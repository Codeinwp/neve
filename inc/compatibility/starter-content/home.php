<?php
/**
 * Home starter content.
 *
 * @package Neve\Compatibility\Starter_Content
 */

$star = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.4l-5.8 3.05 1.1-6.47L2.6 9.35l6.5-.95L12 2.5z"/></svg>';

$post_content = <<<'HTML'
<!-- wp:group {"align":"full","backgroundColor":"nv-site-bg","className":"folio-hero","style":{"spacing":{"padding":{"top":"120px","bottom":"120px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull folio-hero has-nv-site-bg-background-color has-background" style="padding-top:120px;padding-right:24px;padding-bottom:120px;padding-left:24px"><!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"56px","top":"40px"}}}} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"52%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:52%"><!-- wp:heading {"level":1,"textColor":"neve-text-color","style":{"typography":{"fontSize":"56px","lineHeight":"1.05","fontWeight":"800","letterSpacing":"-1px"}}} -->
<h1 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:56px;font-weight:800;letter-spacing:-1px;line-height:1.05">We craft digital experiences that matter</h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"18px","lineHeight":"1.7"},"spacing":{"margin":{"top":"22px","bottom":"30px"}}}} -->
<p class="has-nv-c-2-color has-text-color" style="margin-top:22px;margin-bottom:30px;font-size:18px;line-height:1.7">Turn your ideas into digital products people use. From brand identity to custom web development, we focus on results that move your business forward.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"blockGap":"14px"}}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"neve-link-color","textColor":"nv-text-dark-bg","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"14px","right":"28px","bottom":"14px","left":"28px"}},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-nv-text-dark-bg-color has-neve-link-color-background-color has-text-color has-background has-link-color" href="{{home_url}}work/" style="border-radius:8px;padding-top:14px;padding-right:28px;padding-bottom:14px;padding-left:28px">View Our Work</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"neve-text-color","className":"is-style-outline","style":{"border":{"radius":"8px","color":"#E5E7EB","width":"1px"},"spacing":{"padding":{"top":"14px","right":"28px","bottom":"14px","left":"28px"}},"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}}} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-neve-text-color-color has-text-color has-border-color has-link-color" href="{{home_url}}contact/" style="border-color:#E5E7EB;border-width:1px;border-radius:8px;padding-top:14px;padding-right:28px;padding-bottom:14px;padding-left:28px">Get in Touch</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:group {"className":"folio-rating","style":{"spacing":{"margin":{"top":"34px"},"blockGap":"12px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-group folio-rating" style="margin-top:34px"><!-- wp:html -->
<span class="folio-stars">$star$star$star$star$star</span>
<!-- /wp:html -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"14px"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:14px">Trusted by 500+ clients worldwide</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:buttons {"className":"folio-pills","style":{"spacing":{"margin":{"top":"22px"},"blockGap":"10px"}}} -->
<div class="wp-block-buttons folio-pills" style="margin-top:22px"><!-- wp:button {"textColor":"neve-text-color","style":{"border":{"radius":"999px"},"spacing":{"padding":{"top":"7px","right":"16px","bottom":"7px","left":"16px"}},"color":{"background":"#F1F5F9"},"typography":{"fontSize":"13px"},"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:13px"><a class="wp-block-button__link has-neve-text-color-color has-text-color has-background has-link-color" href="#" style="border-radius:999px;background-color:#F1F5F9;padding-top:7px;padding-right:16px;padding-bottom:7px;padding-left:16px">Business</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"neve-text-color","style":{"border":{"radius":"999px"},"spacing":{"padding":{"top":"7px","right":"16px","bottom":"7px","left":"16px"}},"color":{"background":"#F1F5F9"},"typography":{"fontSize":"13px"},"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:13px"><a class="wp-block-button__link has-neve-text-color-color has-text-color has-background has-link-color" href="#" style="border-radius:999px;background-color:#F1F5F9;padding-top:7px;padding-right:16px;padding-bottom:7px;padding-left:16px">Portfolio</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"neve-text-color","style":{"border":{"radius":"999px"},"spacing":{"padding":{"top":"7px","right":"16px","bottom":"7px","left":"16px"}},"color":{"background":"#F1F5F9"},"typography":{"fontSize":"13px"},"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:13px"><a class="wp-block-button__link has-neve-text-color-color has-text-color has-background has-link-color" href="#" style="border-radius:999px;background-color:#F1F5F9;padding-top:7px;padding-right:16px;padding-bottom:7px;padding-left:16px">Blog</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"neve-text-color","style":{"border":{"radius":"999px"},"spacing":{"padding":{"top":"7px","right":"16px","bottom":"7px","left":"16px"}},"color":{"background":"#F1F5F9"},"typography":{"fontSize":"13px"},"elements":{"link":{"color":{"text":"var:preset|color|neve-text-color"}}}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:13px"><a class="wp-block-button__link has-neve-text-color-color has-text-color has-background has-link-color" href="#" style="border-radius:999px;background-color:#F1F5F9;padding-top:7px;padding-right:16px;padding-bottom:7px;padding-left:16px">Shop</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"48%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:48%"><!-- wp:group {"className":"folio-hero-media","style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"center","verticalAlignment":"center"}} -->
<div class="wp-block-group folio-hero-media"><!-- wp:cover {"url":"{{theme_uri}}assets/img/starter-content/folio-design.jpeg","dimRatio":30,"customOverlayColor":"#111827","minHeight":300,"contentPosition":"bottom left","style":{"spacing":{"padding":{"top":"18px","right":"18px","bottom":"18px","left":"18px"}}}} -->
<div class="wp-block-cover has-background-dim-30 has-background-dim has-custom-content-position is-position-bottom-left" style="padding-top:18px;padding-right:18px;padding-bottom:18px;padding-left:18px;background-color:#111827;min-height:300px"><img class="wp-block-cover__image-background" alt="" src="{{theme_uri}}assets/img/starter-content/folio-design.jpeg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-nv-text-dark-bg-color has-text-color" style="font-size:15px;font-weight:700">Brand Identity</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"url":"{{theme_uri}}assets/img/starter-content/folio-code.jpeg","dimRatio":30,"customOverlayColor":"#111827","minHeight":300,"contentPosition":"bottom left","style":{"spacing":{"padding":{"top":"18px","right":"18px","bottom":"18px","left":"18px"}}}} -->
<div class="wp-block-cover has-background-dim-30 has-background-dim has-custom-content-position is-position-bottom-left" style="padding-top:18px;padding-right:18px;padding-bottom:18px;padding-left:18px;background-color:#111827;min-height:300px"><img class="wp-block-cover__image-background" alt="" src="{{theme_uri}}assets/img/starter-content/folio-code.jpeg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-nv-text-dark-bg-color has-text-color" style="font-size:15px;font-weight:700">Web Design</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover -->

<!-- wp:cover {"url":"{{theme_uri}}assets/img/starter-content/folio-process.jpeg","dimRatio":30,"customOverlayColor":"#111827","minHeight":300,"contentPosition":"bottom left","style":{"spacing":{"padding":{"top":"18px","right":"18px","bottom":"18px","left":"18px"}}}} -->
<div class="wp-block-cover has-background-dim-30 has-background-dim has-custom-content-position is-position-bottom-left" style="padding-top:18px;padding-right:18px;padding-bottom:18px;padding-left:18px;background-color:#111827;min-height:300px"><img class="wp-block-cover__image-background" alt="" src="{{theme_uri}}assets/img/starter-content/folio-process.jpeg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:paragraph {"textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-nv-text-dark-bg-color has-text-color" style="font-size:15px;font-weight:700">Photography</p>
<!-- /wp:paragraph --></div></div>
<!-- /wp:cover --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-light-bg","className":"folio-brand","style":{"spacing":{"padding":{"top":"48px","bottom":"48px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull folio-brand has-nv-light-bg-background-color has-background" style="padding-top:48px;padding-right:24px;padding-bottom:48px;padding-left:24px"><!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"12px","letterSpacing":"2px","textTransform":"uppercase","fontWeight":"600"},"spacing":{"margin":{"bottom":"26px"}}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="margin-bottom:26px;font-size:12px;font-weight:600;letter-spacing:2px;text-transform:uppercase">Brands we have worked with</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"verticalAlignment":"center","style":{"spacing":{"blockGap":{"left":"20px","top":"12px"}}}} -->
<div class="wp-block-columns are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontWeight":"700"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-weight:700">Northwind</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontWeight":"700","letterSpacing":"2px"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-weight:700;letter-spacing:2px">APEX</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontStyle":"italic","fontWeight":"600"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-style:italic;font-weight:600">Coastal Co.</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontWeight":"700"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-weight:700">Helix Group</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontStyle":"italic","fontWeight":"600"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-style:italic;font-weight:600">Solaris</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center"} -->
<div class="wp-block-column is-vertically-aligned-center"><!-- wp:paragraph {"align":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"18px","fontWeight":"700","letterSpacing":"3px"}}} -->
<p class="has-text-align-center has-neve-text-color-color has-text-color" style="font-size:18px;font-weight:700;letter-spacing:3px">VANTAGE</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-site-bg","style":{"spacing":{"padding":{"top":"96px","bottom":"96px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-site-bg-background-color has-background" style="padding-top:96px;padding-right:24px;padding-bottom:96px;padding-left:24px"><!-- wp:heading {"textAlign":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"44px","fontWeight":"800","letterSpacing":"-0.5px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color" style="font-size:44px;font-weight:800;letter-spacing:-0.5px">What we do</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"17px"},"spacing":{"margin":{"top":"12px","bottom":"48px"}}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="margin-top:12px;margin-bottom:48px;font-size:17px">Comprehensive creative and technical services to bring your ideas to life.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"24px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-card folio-card-center","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"14px"},"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"},"blockGap":"14px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-card folio-card-center has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:14px;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px"><!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="17.5" cy="10.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="8.5" cy="7.5" r="1.5" fill="currentColor" stroke="none"/><circle cx="6.5" cy="12.5" r="1.5" fill="currentColor" stroke="none"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.93 0 1.5-.6 1.5-1.4 0-.4-.16-.74-.4-1-.24-.27-.4-.62-.4-1 0-.83.67-1.5 1.5-1.5H16c3.31 0 6-2.69 6-6 0-4.96-4.5-9-10-9z"/></svg></span>
<!-- /wp:html -->

<!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Brand Design</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"15px","lineHeight":"1.65"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:15px;line-height:1.65">Create a distinctive identity that resonates with your audience and stands apart in the marketplace.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"600"}}} -->
<p class="has-link-color" style="font-size:14px;font-weight:600"><a href="{{home_url}}services/" style="color:#2563EB">Learn more →</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-card folio-card-center","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"14px"},"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"},"blockGap":"14px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-card folio-card-center has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:14px;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px"><!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3.5" width="20" height="13" rx="2"/><path d="M8 21h8M12 16.5V21"/><path d="M9.5 8.5L7.5 10l2 1.5M14.5 8.5l2 1.5-2 1.5"/></svg></span>
<!-- /wp:html -->

<!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Web Development</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"15px","lineHeight":"1.65"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:15px;line-height:1.65">Build fast, scalable websites that load quickly, engage visitors, and convert them into customers.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"600"}}} -->
<p class="has-link-color" style="font-size:14px;font-weight:600"><a href="{{home_url}}services/" style="color:#2563EB">Learn more →</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-card folio-card-center","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"14px"},"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"},"blockGap":"14px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-card folio-card-center has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:14px;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px"><!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7.5h3l1.5-2h9L18 7.5h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-10a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg></span>
<!-- /wp:html -->

<!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Photography</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"15px","lineHeight":"1.65"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:15px;line-height:1.65">Capture clear visuals that tell your brand story and support your marketing materials.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"600"}}} -->
<p class="has-link-color" style="font-size:14px;font-weight:600"><a href="{{home_url}}services/" style="color:#2563EB">Learn more →</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-card folio-card-center","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"14px"},"spacing":{"padding":{"top":"32px","right":"28px","bottom":"32px","left":"28px"},"blockGap":"14px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-card folio-card-center has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:14px;padding-top:32px;padding-right:28px;padding-bottom:32px;padding-left:28px"><!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11v2a1 1 0 0 0 1 1h2l4 4V6L6 10H4a1 1 0 0 0-1 1z"/><path d="M14 7.5a5 5 0 0 1 0 9"/><path d="M10 18.5l1 3"/></svg></span>
<!-- /wp:html -->

<!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Digital Marketing</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"15px","lineHeight":"1.65"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:15px;line-height:1.65">Strategic campaigns that reach your target audience and deliver measurable growth.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","fontWeight":"600"}}} -->
<p class="has-link-color" style="font-size:14px;font-weight:600"><a href="{{home_url}}services/" style="color:#2563EB">Learn more →</a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-light-bg","style":{"spacing":{"padding":{"top":"96px","bottom":"96px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-light-bg-background-color has-background" style="padding-top:96px;padding-right:24px;padding-bottom:96px;padding-left:24px"><!-- wp:heading {"textAlign":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"44px","fontWeight":"800","letterSpacing":"-0.5px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color" style="font-size:44px;font-weight:800;letter-spacing:-0.5px">Selected projects</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"17px"},"spacing":{"margin":{"top":"12px","bottom":"48px"}}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="margin-top:12px;margin-bottom:48px;font-size:17px">A glimpse of the brands and products we have helped shape.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"28px","top":"28px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-project","style":{"border":{"radius":"16px"},"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-project" style="border-radius:16px"><!-- wp:image {"sizeSlug":"large","linkDestination":"none","style":{"color":{}}} -->
<figure class="wp-block-image size-large"><img src="{{theme_uri}}assets/img/starter-content/folio-design.jpeg" alt="Horizon Brand"/></figure>
<!-- /wp:image -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"22px","right":"24px","bottom":"24px","left":"24px"},"blockGap":"10px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:22px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Horizon Brand</h3>
<!-- /wp:heading -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px","textTransform":"uppercase","letterSpacing":"1px","fontWeight":"600"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Branding</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg></span>
<!-- /wp:html --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-project","style":{"border":{"radius":"16px"},"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-project" style="border-radius:16px"><!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="{{theme_uri}}assets/img/starter-content/folio-code.jpeg" alt="Digital Platform"/></figure>
<!-- /wp:image -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"22px","right":"24px","bottom":"24px","left":"24px"},"blockGap":"10px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:22px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Digital Platform</h3>
<!-- /wp:heading -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px","textTransform":"uppercase","letterSpacing":"1px","fontWeight":"600"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Website</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg></span>
<!-- /wp:html --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-project","style":{"border":{"radius":"16px"},"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-project" style="border-radius:16px"><!-- wp:image {"sizeSlug":"large","linkDestination":"none"} -->
<figure class="wp-block-image size-large"><img src="{{theme_uri}}assets/img/starter-content/folio-dashboard.jpeg" alt="Summer Campaign"/></figure>
<!-- /wp:image -->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"22px","right":"24px","bottom":"24px","left":"24px"},"blockGap":"10px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="padding-top:22px;padding-right:24px;padding-bottom:24px;padding-left:24px"><!-- wp:heading {"level":3,"textColor":"neve-text-color","style":{"typography":{"fontSize":"20px","fontWeight":"700"}}} -->
<h3 class="wp-block-heading has-neve-text-color-color has-text-color" style="font-size:20px;font-weight:700">Summer Campaign</h3>
<!-- /wp:heading -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between","verticalAlignment":"center"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px","textTransform":"uppercase","letterSpacing":"1px","fontWeight":"600"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px;font-weight:600;letter-spacing:1px;text-transform:uppercase">Campaign</p>
<!-- /wp:paragraph -->

<!-- wp:html -->
<span class="folio-icon" style="color:#2563EB"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg></span>
<!-- /wp:html --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-dark-bg","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-dark-bg-background-color has-background" style="padding-top:80px;padding-right:24px;padding-bottom:80px;padding-left:24px"><!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"32px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3,"textColor":"nv-text-dark-bg","className":"folio-stat-num","style":{"typography":{"fontSize":"48px","fontWeight":"800"}}} -->
<h3 class="wp-block-heading has-text-align-center folio-stat-num has-nv-text-dark-bg-color has-text-color" style="font-size:48px;font-weight:800">500+</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"15px"}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="font-size:15px">Projects Completed</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3,"textColor":"nv-text-dark-bg","className":"folio-stat-num","style":{"typography":{"fontSize":"48px","fontWeight":"800"}}} -->
<h3 class="wp-block-heading has-text-align-center folio-stat-num has-nv-text-dark-bg-color has-text-color" style="font-size:48px;font-weight:800">98%</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"15px"}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="font-size:15px">Client Satisfaction</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3,"textColor":"nv-text-dark-bg","className":"folio-stat-num","style":{"typography":{"fontSize":"48px","fontWeight":"800"}}} -->
<h3 class="wp-block-heading has-text-align-center folio-stat-num has-nv-text-dark-bg-color has-text-color" style="font-size:48px;font-weight:800">12</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"15px"}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="font-size:15px">Years Experience</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:heading {"textAlign":"center","level":3,"textColor":"nv-text-dark-bg","className":"folio-stat-num","style":{"typography":{"fontSize":"48px","fontWeight":"800"}}} -->
<h3 class="wp-block-heading has-text-align-center folio-stat-num has-nv-text-dark-bg-color has-text-color" style="font-size:48px;font-weight:800">50+</h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"15px"}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="font-size:15px">Team Members</p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"nv-site-bg","style":{"spacing":{"padding":{"top":"96px","bottom":"96px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"1160px"}} -->
<div class="wp-block-group alignfull has-nv-site-bg-background-color has-background" style="padding-top:96px;padding-right:24px;padding-bottom:96px;padding-left:24px"><!-- wp:heading {"textAlign":"center","textColor":"neve-text-color","style":{"typography":{"fontSize":"44px","fontWeight":"800","letterSpacing":"-0.5px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-neve-text-color-color has-text-color" style="font-size:44px;font-weight:800;letter-spacing:-0.5px">What our clients say</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-c-2","style":{"typography":{"fontSize":"17px"},"spacing":{"margin":{"top":"12px","bottom":"48px"}}}} -->
<p class="has-text-align-center has-nv-c-2-color has-text-color" style="margin-top:12px;margin-bottom:48px;font-size:17px">Real words from teams we have partnered with.</p>
<!-- /wp:paragraph -->

<!-- wp:columns {"style":{"spacing":{"blockGap":{"left":"24px","top":"24px"}}}} -->
<div class="wp-block-columns"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-quote","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"16px"},"spacing":{"padding":{"top":"30px","right":"28px","bottom":"30px","left":"28px"},"blockGap":"16px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-quote has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:16px;padding-top:30px;padding-right:28px;padding-bottom:30px;padding-left:28px"><!-- wp:paragraph {"className":"folio-quote-mark","style":{"typography":{"fontSize":"50px","fontWeight":"700"}}} -->
<p class="folio-quote-mark" style="font-size:50px;font-weight:700">“</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"16px","lineHeight":"1.7"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:16px;line-height:1.7">Folio reworked our entire online presence. Their team understood our goals early and delivered what we asked for on time.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"folio-author","style":{"spacing":{"blockGap":"14px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-group folio-author"><!-- wp:html -->
<span class="folio-avatar">MJ</span>
<!-- /wp:html -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:15px;font-weight:700">Maria Johnson</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px">CEO, Horizon Tech</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-quote","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"16px"},"spacing":{"padding":{"top":"30px","right":"28px","bottom":"30px","left":"28px"},"blockGap":"16px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-quote has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:16px;padding-top:30px;padding-right:28px;padding-bottom:30px;padding-left:28px"><!-- wp:paragraph {"className":"folio-quote-mark","style":{"typography":{"fontSize":"50px","fontWeight":"700"}}} -->
<p class="folio-quote-mark" style="font-size:50px;font-weight:700">“</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"16px","lineHeight":"1.7"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:16px;line-height:1.7">Working with Folio was straightforward. They are responsive, creative, and genuinely invested in our success.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"folio-author","style":{"spacing":{"blockGap":"14px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-group folio-author"><!-- wp:html -->
<span class="folio-avatar">AR</span>
<!-- /wp:html -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:15px;font-weight:700">Alex Rivera</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px">Founder, Creative Studio</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:group {"className":"folio-quote","style":{"border":{"color":"#E5E7EB","width":"1px","radius":"16px"},"spacing":{"padding":{"top":"30px","right":"28px","bottom":"30px","left":"28px"},"blockGap":"16px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group folio-quote has-border-color" style="border-color:#E5E7EB;border-width:1px;border-radius:16px;padding-top:30px;padding-right:28px;padding-bottom:30px;padding-left:28px"><!-- wp:paragraph {"className":"folio-quote-mark","style":{"typography":{"fontSize":"50px","fontWeight":"700"}}} -->
<p class="folio-quote-mark" style="font-size:50px;font-weight:700">“</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"16px","lineHeight":"1.7"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:16px;line-height:1.7">Reliable service from start to finish. Folio paid close attention to detail at every stage of the project.</p>
<!-- /wp:paragraph -->

<!-- wp:group {"className":"folio-author","style":{"spacing":{"blockGap":"14px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"center"}} -->
<div class="wp-block-group folio-author"><!-- wp:html -->
<span class="folio-avatar">SK</span>
<!-- /wp:html -->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"textColor":"neve-text-color","style":{"typography":{"fontSize":"15px","fontWeight":"700"}}} -->
<p class="has-neve-text-color-color has-text-color" style="font-size:15px;font-weight:700">Sarah Kim</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"textColor":"nv-c-2","style":{"typography":{"fontSize":"13px"}}} -->
<p class="has-nv-c-2-color has-text-color" style="font-size:13px">Director, Digital Growth</p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","backgroundColor":"neve-link-color","style":{"spacing":{"padding":{"top":"96px","bottom":"96px","left":"24px","right":"24px"}}},"layout":{"type":"constrained","contentSize":"720px"}} -->
<div class="wp-block-group alignfull has-neve-link-color-background-color has-background" style="padding-top:96px;padding-right:24px;padding-bottom:96px;padding-left:24px"><!-- wp:heading {"textAlign":"center","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"40px","fontWeight":"800","letterSpacing":"-0.5px"}}} -->
<h2 class="wp-block-heading has-text-align-center has-nv-text-dark-bg-color has-text-color" style="font-size:40px;font-weight:800;letter-spacing:-0.5px">Let's build something together</h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","textColor":"nv-text-dark-bg","style":{"typography":{"fontSize":"18px","lineHeight":"1.7"},"spacing":{"margin":{"top":"16px","bottom":"32px"}},"color":{}}} -->
<p class="has-text-align-center has-nv-text-dark-bg-color has-text-color" style="margin-top:16px;margin-bottom:32px;font-size:18px;line-height:1.7">Ready to transform your vision into reality? Get in touch and let's start the conversation.</p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"blockGap":"14px"}}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"nv-site-bg","textColor":"neve-link-color","style":{"border":{"radius":"8px"},"spacing":{"padding":{"top":"14px","right":"30px","bottom":"14px","left":"30px"}},"elements":{"link":{"color":{"text":"var:preset|color|neve-link-color"}}}}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-neve-link-color-color has-nv-site-bg-background-color has-text-color has-background has-link-color" href="{{home_url}}contact/" style="border-radius:8px;padding-top:14px;padding-right:30px;padding-bottom:14px;padding-left:30px">Start a Project</a></div>
<!-- /wp:button -->

<!-- wp:button {"textColor":"nv-text-dark-bg","className":"is-style-outline","style":{"border":{"radius":"8px","color":"#ffffff","width":"1px"},"spacing":{"padding":{"top":"14px","right":"30px","bottom":"14px","left":"30px"}},"elements":{"link":{"color":{"text":"var:preset|color|nv-text-dark-bg"}}}}} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-nv-text-dark-bg-color has-text-color has-border-color has-link-color" href="{{home_url}}work/" style="border-color:#ffffff;border-width:1px;border-radius:8px;padding-top:14px;padding-right:30px;padding-bottom:14px;padding-left:30px">View Our Work</a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->
HTML;

$post_content = str_replace( '$star', $star, $post_content );

return [
	'post_type'    => 'page',
	'post_name'    => 'home',
	'post_title'   => _x( 'Home', 'Theme starter content', 'neve' ),
	'post_content' => str_replace(
		[ '{{theme_uri}}', '{{home_url}}' ],
		[ trailingslashit( get_template_directory_uri() ), trailingslashit( home_url() ) ],
		$post_content
	),
];
