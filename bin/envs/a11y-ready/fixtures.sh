#!/usr/bin/env bash
# Fixtures for the accessibility-ready e2e suite (e2e-tests/specs/a11y-ready).
#
# Idempotent: safe to re-run; recreates fixture content by slug/name.
# Usage:
#   Local install:  bash bin/envs/a11y-ready/fixtures.sh /path/to/wp/root
#   CI (docker):    WP_CMD="wp --allow-root" bash bin/envs/a11y-ready/fixtures.sh
set -e

WP_PATH=${1:-}
WP_CMD=${WP_CMD:-wp}
if [ -n "$WP_PATH" ]; then
	WP_CMD="$WP_CMD --path=$WP_PATH"
fi

echo "== a11y-ready fixtures =="

# ------------------------------------------------------------------
# 1. Primary menu with two dropdown submenus (submenu keyboard tests)
# ------------------------------------------------------------------
$WP_CMD menu delete "A11y Test" 2>/dev/null || true
MENU_ID=$($WP_CMD menu create "A11y Test" --porcelain)
HOME_URL=$($WP_CMD option get siteurl)
P1=$($WP_CMD menu item add-custom "$MENU_ID" "Products" "$HOME_URL/?fixture=products" --porcelain)
$WP_CMD menu item add-custom "$MENU_ID" "Product Alpha" "$HOME_URL/?fixture=alpha" --parent-id="$P1" --porcelain
$WP_CMD menu item add-custom "$MENU_ID" "Product Beta" "$HOME_URL/?fixture=beta" --parent-id="$P1" --porcelain
P2=$($WP_CMD menu item add-custom "$MENU_ID" "Company" "$HOME_URL/?fixture=company" --porcelain)
$WP_CMD menu item add-custom "$MENU_ID" "About Us" "$HOME_URL/?fixture=about" --parent-id="$P2" --porcelain
$WP_CMD menu item add-custom "$MENU_ID" "Contact" "$HOME_URL/?fixture=contact" --parent-id="$P2" --porcelain
$WP_CMD menu item add-custom "$MENU_ID" "Plain Item" "$HOME_URL/?fixture=plain" --porcelain
$WP_CMD menu location assign "$MENU_ID" primary

# ------------------------------------------------------------------
# 2. Post with open comments + an inline content link (focus/underline tests)
# ------------------------------------------------------------------
OLD_POST=$($WP_CMD post list --post_type=post --name=a11y-comment-test --field=ID | head -1)
if [ -n "$OLD_POST" ]; then
	$WP_CMD post delete "$OLD_POST" --force
fi
POST_ID=$($WP_CMD post create \
	--post_title="A11y Comment Test" \
	--post_name="a11y-comment-test" \
	--post_status=publish \
	--comment_status=open \
	--post_content="<p>Fixture post for comment form accessibility checks. It contains an <a href=\"$HOME_URL/\">inline content link</a> for the underlined-links criterion, and a second paragraph so the excerpt renders.</p><p>Second paragraph of filler content.</p>" \
	--porcelain)
$WP_CMD comment create --comment_post_ID="$POST_ID" --comment_content="An approved fixture comment so the comment list renders." --comment_author="Fixture Tester" --comment_author_email=fixture@example.com --comment_approved=1 --porcelain

# ------------------------------------------------------------------
# 3. Page containing ALL Neve block patterns (pattern criteria tests)
# ------------------------------------------------------------------
OLD_PAGE=$($WP_CMD post list --post_type=page --name=a11y-pattern-test --field=ID | head -1)
if [ -n "$OLD_PAGE" ]; then
	$WP_CMD post delete "$OLD_PAGE" --force
fi
$WP_CMD eval '
$dir = get_template_directory() . "/inc/compatibility/block-patterns/";
$content = "";
foreach ( glob( $dir . "*.php" ) as $file ) {
	$p = include $file;
	if ( is_array( $p ) && isset( $p["content"] ) ) {
		$content .= $p["content"];
	}
}
$id = wp_insert_post( array(
	"post_title"   => "A11y Pattern Test",
	"post_name"    => "a11y-pattern-test",
	"post_type"    => "page",
	"post_status"  => "publish",
	"post_content" => $content,
) );
echo $id . "\n";
'

# ------------------------------------------------------------------
# 4. Category with posts (archive H1 test) + pagination on the blog
# ------------------------------------------------------------------
$WP_CMD term create category "A11y Cat" --slug=a11y-cat 2>/dev/null || true
for i in 1 2 3 4; do
	SLUG="a11y-cat-post-$i"
	OLD=$($WP_CMD post list --post_type=post --name="$SLUG" --field=ID | head -1)
	if [ -z "$OLD" ]; then
		$WP_CMD post create --post_title="A11y Cat Post $i" --post_name="$SLUG" --post_status=publish --post_content="<p>Filler post $i for archive and pagination fixtures.</p>" --porcelain | xargs -I{} $WP_CMD post term set {} category a11y-cat
	fi
done
# Low per-page count so the blog paginates (pagination link-text criterion).
$WP_CMD option update posts_per_page 3

# ------------------------------------------------------------------
# 5. W3 showcase page: every element the color/contrast workstream
#    touches, on one page, for before/after comparison.
# ------------------------------------------------------------------
OLD_W3=$($WP_CMD post list --post_type=page --name=a11y-w3-showcase --field=ID | head -1)
if [ -n "$OLD_W3" ]; then
	$WP_CMD post delete "$OLD_W3" --force
fi
$WP_CMD eval '
// Raw form markup needs unfiltered_html, which anonymous CLI lacks.
$admins = get_users( array( "role" => "administrator", "number" => 1, "fields" => "ID" ) );
if ( ! empty( $admins ) ) {
	wp_set_current_user( $admins[0] );
}
$home = esc_url( home_url( "/" ) );
$cat  = esc_url( home_url( "/category/a11y-cat/" ) );
$content = <<<HTML
<!-- wp:paragraph --><p>Fixture page showing every element the W3 color/contrast workstream changes. Compare this page before and after W3 lands.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Content links and hover</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Plain inline link: <a href="{$home}">hover me — today the color does not change</a> (secondary accent equals primary accent).</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p>Link with a class attribute (escapes the current underline rule): <a class="fixture-classed-link" href="{$home}">classed link — not underlined today</a>.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Buttons</h2><!-- /wp:heading -->
<!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"className":"is-style-primary"} --><div class="wp-block-button is-style-primary"><a class="wp-block-button__link wp-element-button" href="{$home}">Neve primary — hover me</a></div><!-- /wp:button --><!-- wp:button {"className":"is-style-secondary"} --><div class="wp-block-button is-style-secondary"><a class="wp-block-button__link wp-element-button" href="{$home}">Neve secondary — hover me</a></div><!-- /wp:button --><!-- wp:button --><div class="wp-block-button"><a class="wp-block-button__link wp-element-button" href="{$home}">Default block button (core-styled)</a></div><!-- /wp:button --></div>
<!-- /wp:buttons -->
<!-- wp:paragraph --><p>Neve primary should darken its background on hover; Neve secondary should fill with the light background. The default variation is styled by WordPress core, not the theme.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Form fields: borders, placeholder, search button</h2><!-- /wp:heading -->
<!-- wp:search {"label":"Search this site","buttonText":"Search"} /-->
<!-- wp:html -->
<form action="#" method="get">
<p><label for="w3-text">Text field</label><br /><input type="text" id="w3-text" name="w3-text" placeholder="Placeholder rendered at 50% opacity" /></p>
<p><label for="w3-email">Email field</label><br /><input type="email" id="w3-email" name="w3-email" placeholder="you@example.com" /></p>
<p><label for="w3-select">Select</label><br /><select id="w3-select" name="w3-select"><option>Option one</option><option>Option two</option></select></p>
<p><label for="w3-textarea">Textarea</label><br /><textarea id="w3-textarea" name="w3-textarea" rows="3" placeholder="Border contrast sample"></textarea></p>
<p><input type="submit" value="Submit button" /></p>
</form>
<!-- /wp:html -->

<!-- wp:heading --><h2>Palette colors on white</h2><!-- /wp:heading -->
<!-- wp:paragraph {"textColor":"nv-c-1"} --><p class="has-nv-c-1-color has-text-color">nv-c-1 purple text — currently below 4.5:1 on white.</p><!-- /wp:paragraph -->
<!-- wp:paragraph {"textColor":"nv-c-2"} --><p class="has-nv-c-2-color has-text-color">nv-c-2 red text — currently below 4.5:1 on white.</p><!-- /wp:paragraph -->
<!-- wp:paragraph --><p class="has-neve-link-hover-color-color has-text-color">Secondary accent (the hover color) as text — today identical to the primary accent.</p><!-- /wp:paragraph -->

<!-- wp:heading --><h2>Pagination</h2><!-- /wp:heading -->
<!-- wp:paragraph --><p>Pagination renders on the <a href="{$home}">blog page</a> and the <a href="{$cat}">A11y Cat archive</a>: no hover/focus style and ambiguous link names today.</p><!-- /wp:paragraph -->
HTML;
$id = wp_insert_post( array(
	"post_title"   => "A11y W3 Showcase",
	"post_name"    => "a11y-w3-showcase",
	"post_type"    => "page",
	"post_status"  => "publish",
	"post_content" => $content,
) );
echo $id . "\n";
'

echo "== a11y-ready fixtures done =="
