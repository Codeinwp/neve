<?php
/**
 * Portofolio starter content.
 *
 * @package Neve\Compatibility\Starter_Content
 */

return [
	'post_type'    => 'page',
	'post_title'   => _x( 'Portofolio', 'Theme starter content', 'neve' ),
	'post_content' => '<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"minHeight":300,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:300px"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:heading {"level":1,"textColor":"neve-text-color","className":"has-text-align-left"} -->
<h1 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Portfolio</h1>
<!-- /wp:heading --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-light-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-light-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-15.jpg" alt="" style="border-radius:24px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Marketing Strategy</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing, luctus ullamcorper mattis.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-13.jpg" alt="" style="border-radius:24px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Omnichannel Optimization</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing, luctus ullamcorper mattis.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-14.jpg" alt="" style="border-radius:24px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Brand Positioning Map</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing, luctus ullamcorper mattis.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"align":"full"} -->
<div class="wp-block-cover alignfull"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Food Magazine Ad</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Whatever shabby chic gatekeep flannel echo park, pinterest semiotics. Plaid kickstarter squid, swag street art yr pabst distillery blue bottle dreamcatcher ramps.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-12.jpg" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"50px"} -->
<div style="height:50px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-dark-bg","isUserOverlayColor":true,"minHeight":300,"align":"full","style":{"spacing":{"padding":{"right":"0","left":"0"}}}} -->
<div class="wp-block-cover alignfull" style="padding-right:0;padding-left:0;min-height:300px"><span aria-hidden="true" class="wp-block-cover__background has-nv-dark-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"60%"} -->
<div class="wp-block-column" style="flex-basis:60%"><!-- wp:group {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:image {"width":"80px","height":"80px","sizeSlug":"full","linkDestination":"none","align":"center","className":"is-style-rounded"} -->
<figure class="wp-block-image aligncenter size-full is-resized is-style-rounded"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-02.jpg" alt="" style="width:80px;height:80px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color">“Their expertise and their data-driven approach allowed us to optimize our campaigns for maximum impact.”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg","fontSize":"small"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-small-font-size"><strong>MARIA STEVENS</strong></p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-18.jpg" alt="" style="border-radius:24px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Social Media Management</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"24px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-17.jpg" alt="" style="border-radius:24px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Influencer Marketing</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/project-details/' ) ) . '">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"neve-link-color","isUserOverlayColor":true,"minHeight":300,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:300px"><span aria-hidden="true" class="wp-block-cover__background has-neve-link-color-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"140px"} -->
<div style="height:140px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"></div>
<!-- /wp:column -->

<!-- wp:column {"width":"60%"} -->
<div class="wp-block-column" style="flex-basis:60%"><!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","textColor":"nv-text-dark-bg"} -->
<h2 class="wp-block-heading has-text-align-center has-nv-text-dark-bg-color has-text-color">Let’s work together on your next marketing project</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-link-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus <br>nec ullamcorper mattis, pulvinar dapibus leo.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center","orientation":"horizontal"}} -->
<div class="wp-block-buttons"><!-- wp:button {"textColor":"neve-link-color","style":{"elements":{"link":{"color":{"text":"var:preset|color|neve-link-color"}}},"color":{"background":"#ffffff"}},"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link has-neve-link-color-color has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/contact/' ) ) . '" style="background-color:#ffffff">Get Started</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"20%"} -->
<div class="wp-block-column" style="flex-basis:20%"></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"140px"} -->
<div style="height:140px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:cover -->',
];
