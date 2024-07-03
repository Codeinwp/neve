<?php
/**
 * Home starter content.
 *
 * @package Neve\Compatibility\Starter_Content
 */
return [
	'post_type'    => 'page',
	'post_title'   => _x( 'Home', 'Theme starter content', 'neve' ),
	'post_content' => '<!-- wp:cover {"url":"' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-hero-2.png","dimRatio":0,"isUserOverlayColor":true,"focalPoint":{"x":0.5,"y":0.72},"minHeight":800,"contentPosition":"center center","align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:800px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><img class="wp-block-cover__image-background" alt="" src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-hero-2.png" style="object-position:50% 72%" data-object-fit="cover" data-object-position="50% 72%"/><div class="wp-block-cover__inner-container"><!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"65%","style":{"spacing":{"padding":{"right":"var:preset|spacing|20","left":"var:preset|spacing|20"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--20);padding-left:var(--wp--preset--spacing--20);flex-basis:65%"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","level":1,"textColor":"nv-text-dark-bg"} -->
<h1 class="wp-block-heading has-text-align-left has-nv-text-dark-bg-color has-text-color">Create and grow your unique website today</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","style":{"typography":{"fontSize":17}},"textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-left has-nv-text-dark-bg-color has-text-color" style="font-size:17px">Programmatically work but low hanging fruit so new economy cross-pollination. Quick sync new economy onward and upward.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left","orientation":"horizontal"}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"color":{"background":"#ffffff","text":"#0a2279"},"elements":{"link":{"color":{"text":"#0a2279"}}}},"className":"is-style-primary"} -->
<div class="wp-block-button is-style-primary"><a class="wp-block-button__link has-text-color has-background has-link-color wp-element-button" href="' . esc_url( home_url( '/about/' ) ) . '" style="color:#0a2279;background-color:#ffffff">Get Started</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"nv-text-dark-bg","style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-secondary"} -->
<div class="wp-block-button is-style-secondary"><a class="wp-block-button__link has-nv-text-dark-bg-color has-text-color has-link-color wp-element-button" href="' . esc_url( home_url( '/portofolio/' ) ) . '">Hire us</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/person-hero-2.png" alt=""/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}},"className":"neve-duotone"} -->
<div class="wp-block-column neve-duotone" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"color":{"duotone":"unset"},"border":{"radius":"0px"}},"className":"icon-style is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-1.png" alt="" style="border-radius:0px" title=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"16px"} -->
<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Business</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Vivamus dolor sit amet do, consectetur adipiscing.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"color":{},"border":{"radius":"0px"}},"className":"icon-style is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-4.1.png" alt="" style="border-radius:0px" title=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"16px"} -->
<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Online Store</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Sollicitudin ipsum sit amet elit do sed eiusmod tempor.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"color":{"duotone":"unset"},"border":{"radius":"0px"}},"className":"icon-style is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-3.1.png" alt="" style="border-radius:0px" title=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"16px"} -->
<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Personal Blog</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Faucibus dolor sit amet do, consectetur adipiscing.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30)"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","align":"center","style":{"color":{"duotone":"unset"},"border":{"radius":"0px"}},"className":"icon-style is-style-default"} -->
<figure class="wp-block-image aligncenter size-full has-custom-border icon-style is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-icon-2.png" alt="" style="border-radius:0px" title=""/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"16px"} -->
<div style="height:16px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color","className":"has-text-align-center"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Portfolio</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center"} -->
<p class="has-text-align-center">Interdum dolor sit amet elit do sed eiusmod tempor.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:cover {"dimRatio":80,"overlayColor":"nv-light-bg","isUserOverlayColor":true,"minHeight":600,"contentPosition":"center center","align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-light-bg-background-color has-background-dim-80 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"width":"20%","style":{"spacing":{"padding":{"right":"0","left":"0"}}}} -->
<div class="wp-block-column" style="padding-right:0;padding-left:0;flex-basis:20%"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group"></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"width":"60%"} -->
<div class="wp-block-column" style="flex-basis:60%"><!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group"><!-- wp:heading {"textAlign":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}},"textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color has-link-color">Featured Work</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}},"textColor":"neve-text-color"} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color has-link-color">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"0px","style":{"layout":{"flexSize":"24px","selfStretch":"fixed"}}} -->
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

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"lightbox":{"enabled":false},"sizeSlug":"full","linkDestination":"custom","style":{"border":{"radius":"16px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-15.jpg" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Marketing Strategy</h3>
<!-- /wp:heading -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"lightbox":{"enabled":false},"sizeSlug":"full","linkDestination":"custom","style":{"border":{"radius":"16px"}}} -->
<figure class="wp-block-image size-full has-custom-border"><a href="#"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-13.jpg" alt="" style="border-radius:16px"/></a></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"center","level":3,"textColor":"neve-text-color"} -->
<h3 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color">Omnichannel Optimization</h3>
<!-- /wp:heading -->

<!-- wp:spacer {"height":"40px"} -->
<div style="height:40px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-dark-bg","isUserOverlayColor":true,"minHeight":420,"align":"full","style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg"} -->
<div class="wp-block-cover alignfull has-nv-text-dark-bg-color has-text-color has-link-color" style="min-height:420px"><span aria-hidden="true" class="wp-block-cover__background has-nv-dark-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns -->
<div class="wp-block-columns"><!-- wp:column {"className":"ticss-4ce656f1"} -->
<div class="wp-block-column ticss-4ce656f1"><!-- wp:image {"width":"80px","height":"80px","sizeSlug":"full","linkDestination":"none","align":"center","className":"is-style-rounded"} -->
<figure class="wp-block-image aligncenter size-full is-resized is-style-rounded"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-04.jpg" alt="" style="width:80px;height:80px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"center","style":{"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-link-color">“We saw a significant increase in website traffic and sales within just a few months. I recommend the marketing agency.“</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase"}},"textColor":"nv-text-dark-bg","fontSize":"small"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-small-font-size" style="text-transform:uppercase"><strong>Janet Morris</strong></p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"className":"ticss-f6fc7494"} -->
<div class="wp-block-column ticss-f6fc7494"><!-- wp:image {"width":"80px","height":"80px","sizeSlug":"full","linkDestination":"none","align":"center","className":"is-style-rounded"} -->
<figure class="wp-block-image aligncenter size-full is-resized is-style-rounded"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-03.jpg" alt="" style="width:80px;height:80px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color">“The agency completely transformed our strategy. They\'re a true marketing partner, and we\'re thrilled with the results.”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase"}},"textColor":"nv-text-dark-bg","fontSize":"small"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-small-font-size" style="text-transform:uppercase"><strong>Willie Brown</strong></p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column -->

<!-- wp:column {"className":"ticss-a5b4df29"} -->
<div class="wp-block-column ticss-a5b4df29"><!-- wp:image {"width":"80px","height":"80px","sizeSlug":"full","linkDestination":"none","align":"center","className":"is-style-rounded"} -->
<figure class="wp-block-image aligncenter size-full is-resized is-style-rounded"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-02.jpg" alt="" style="width:80px;height:80px"/></figure>
<!-- /wp:image -->

<!-- wp:spacer {"height":"24px"} -->
<div style="height:24px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color">“Their expertise and their data-driven approach allowed us to optimize our campaigns for maximum impact.”</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase"}},"textColor":"nv-text-dark-bg","fontSize":"small"} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color has-small-font-size" style="text-transform:uppercase"><strong>MARIA STEVENS</strong></p>
<!-- /wp:paragraph -->

<!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:spacer {"height":"0px"} -->
<div style="height:0px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"overlayColor":"nv-site-bg","isUserOverlayColor":true,"minHeight":600,"align":"full"} -->
<div class="wp-block-cover alignfull" style="min-height:600px"><span aria-hidden="true" class="wp-block-cover__background has-nv-site-bg-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group -->
<div class="wp-block-group"><!-- wp:spacer {"height":"80px"} -->
<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-12.jpg" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Food Magazine Ad</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","style":{"typography":{"fontSize":17}},"textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color" style="font-size:17px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Fit authentic try-hard farm-to-table hammock hexagon aesthetic.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="#">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->

<!-- wp:columns {"verticalAlignment":"center"} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:spacer {"height":"20px"} -->
<div style="height:20px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:heading {"textAlign":"left","textColor":"neve-text-color"} -->
<h2 class="wp-block-heading has-text-align-left has-neve-text-color-color has-text-color">Influencer Marketing</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"left","style":{"typography":{"fontSize":17}},"textColor":"neve-text-color"} -->
<p class="has-text-align-left has-neve-text-color-color has-text-color" style="font-size:17px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus. Fit authentic try-hard farm-to-table hammock hexagon aesthetic.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"left"},"fontSize":"small"} -->
<div class="wp-block-buttons has-custom-font-size has-small-font-size"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"16px"},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}},"className":"is-style-default"} -->
<div class="wp-block-button has-custom-font-size is-style-default" style="font-size:16px"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color wp-element-button" href="#">Learn more</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%","style":{"spacing":{"padding":{"right":"var:preset|spacing|30","left":"var:preset|spacing|30"}}}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-right:var(--wp--preset--spacing--30);padding-left:var(--wp--preset--spacing--30);flex-basis:50%"><!-- wp:image {"sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"16px"}},"className":"is-style-default"} -->
<figure class="wp-block-image size-full has-custom-border is-style-default"><img src="' . trailingslashit( get_template_directory_uri() ) . 'assets/img/starter-content/neve-marketing-agency-17.jpg" alt="" style="border-radius:16px"/></figure>
<!-- /wp:image --></div>
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
