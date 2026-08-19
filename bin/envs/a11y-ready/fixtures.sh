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

echo "== a11y-ready fixtures done =="
