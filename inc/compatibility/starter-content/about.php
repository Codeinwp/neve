<?php
/**
 * About starter content.
 *
 * @package Neve\Compatibility\Starter_Content
 */

return [
	'post_type'    => 'page',
	'post_title'   => _x( 'About', 'Theme starter content', 'neve' ),
	'post_content' => '<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"minHeight":320,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:320px"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:heading {"level":1,"textColor":"neve-text-color","className":"has-text-align-left"} -->
<h1 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">About Us</h1>
<!-- /wp:heading --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-light-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-light-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center","textColor":"neve-text-color"} -->
<div class="wp-block-columns are-vertically-aligned-center has-neve-text-color-color has-text-color"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"16px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-10.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"var:preset|spacing|30","right":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-top:0;padding-right:var(--wp--preset--spacing--30);padding-bottom:0;padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:heading {"textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-neve-text-color-color has-text-color">Our Story</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"neve-text-color"} -->
<p class="has-neve-text-color-color has-text-color">Are there any leftovers in the kitchen? what are the expectations but technologically savvy.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"neve-text-color"} -->
<p class="has-neve-text-color-color has-text-color">Quick sync new economy onward and upward, productize the deliverables and focus on the bottom line high touch client we need to have a Come to Jesus meeting with Phil about his attitude, so where the metal hits the meat best.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-dark-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-dark-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:heading {"textColor":"nv-text-dark-bg"} -->
<h2 class="wp-block-heading has-nv-text-dark-bg-color has-text-color">We are driven by values</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-text-dark-bg"} -->
<p class="has-nv-text-dark-bg-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Line high touch client we need to have a Come to Jesus meeting with Phil about his attitude, so where the.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/contact/' ) ) . '">Book a Call</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"16px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-16.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"minHeight":420,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:420px"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}},"className":"ticss-4ce656f1"} -->
<div class="wp-block-column ticss-4ce656f1" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","className":"icon-style is-style-default"} -->
<figure class="wp-block-image size-full icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-1.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-left has-text-align-center has-neve-text-color-color has-text-color">Results Oriented Growth</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor line high touch client.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}},"className":"ticss-f6fc7494"} -->
<div class="wp-block-column ticss-f6fc7494" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","className":"icon-style is-style-default"} -->
<figure class="wp-block-image size-full icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-2.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-left has-text-align-center has-neve-text-color-color has-text-color">Client Collaboration</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor line high touch client.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}},"className":"ticss-a5b4df29"} -->
<div class="wp-block-column ticss-a5b4df29" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","className":"icon-style is-style-default"} -->
<figure class="wp-block-image size-full icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-3.1.png" alt=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-left has-text-align-center has-neve-text-color-color has-text-color">Data-Driven Creativity</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet elit do, consectetur adipiscing, sed eiusmod tempor line high touch client.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"30px"} -->
<div style="height:30px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-light-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-light-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group"></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"60%"} -->
<div class="wp-block-column" style="flex-basis:60%"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}},"textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color has-link-color">The team behind</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}},"textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color has-link-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"0px","style":{"layout":{"flexSize":"16px","selfStretch":"fixed"}}} -->
<div style="height:0px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group"></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-06.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">John Marshall</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color">Strategy</p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"nv-text-dark-bg","iconColorValue":"var(\u002d\u002dnv-text-dark-bg)","iconBackgroundColor":"nv-dark-bg","iconBackgroundColorValue":"var(\u002d\u002dnv-dark-bg)","align":"center"} -->
<ul class="wp-block-social-links aligncenter has-icon-color has-icon-background-color"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-07.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Maria Williams</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color">Marketing</p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"nv-text-dark-bg","iconColorValue":"var(\u002d\u002dnv-text-dark-bg)","iconBackgroundColor":"nv-dark-bg","iconBackgroundColorValue":"var(\u002d\u002dnv-dark-bg)","align":"center"} -->
<ul class="wp-block-social-links aligncenter has-icon-color has-icon-background-color"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-05.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Mark Spencer</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color">Copywriting</p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"nv-text-dark-bg","iconColorValue":"var(\u002d\u002dnv-text-dark-bg)","iconBackgroundColor":"nv-dark-bg","iconBackgroundColorValue":"var(\u002d\u002dnv-dark-bg)","align":"center"} -->
<ul class="wp-block-social-links aligncenter has-icon-color has-icon-background-color"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-01.png" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Helen Castillo</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color">Public Relations</p>
<!-- /wp:paragraph -->

<!-- wp:social-links {"iconColor":"nv-text-dark-bg","iconColorValue":"var(\u002d\u002dnv-text-dark-bg)","iconBackgroundColor":"nv-dark-bg","iconBackgroundColorValue":"var(\u002d\u002dnv-dark-bg)","align":"center"} -->
<ul class="wp-block-social-links aligncenter has-icon-color has-icon-background-color"><!-- wp:social-link {"url":"#","service":"facebook"} /-->

<!-- wp:social-link {"url":"#","service":"twitter"} /-->

<!-- wp:social-link {"url":"#","service":"linkedin"} /--></ul>
<!-- /wp:social-links -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns {"style":{"spacing":{"padding":{"top":"var:preset|spacing|70","bottom":"var:preset|spacing|70","left":"var:preset|spacing|70","right":"var:preset|spacing|70"},"blockGap":"var:preset|spacing|40"},"border":{"radius":"24px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg"} -->
<div class="wp-block-columns has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color" style="border-radius:24px;padding-top:var(--wp--preset--spacing--70);padding-right:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--70);padding-left:var(--wp--preset--spacing--70)"><!-- wp:column {"width":"100%","style":{"spacing":{"blockGap":"var:preset|spacing|60"}}} -->
<div class="wp-block-column" style="flex-basis:100%"><!-- wp:heading {"style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg","fontSize":"huge"} -->
<h2 class="wp-block-heading has-nv-text-dark-bg-color has-text-color has-link-color has-huge-font-size">Join our team!</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg"} -->
<p class="has-nv-text-dark-bg-color has-text-color has-link-color">Feeling inspired? <a href="#">Join the team</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"100%"} -->
<div class="wp-block-column" style="flex-basis:100%"><!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg","fontSize":"medium"} -->
<p class="has-nv-text-dark-bg-color has-text-color has-link-color has-medium-font-size">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec fermentum ex. Vestibulum ante ipsum.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->',
];
