<?php
/**
 * Default starter content polish layer.
 *
 * Applied as core "Additional CSS" (wp_custom_css) on import. Every rule is scoped
 * under a .folio-* class added to core blocks, so it only affects the starter pages
 * and degrades gracefully if removed. No third-party CSS, no layout hacks.
 *
 * @package Neve\Compatibility\Starter_Content
 */

return <<<'CSS'
/* ---- Default starter content ---- */

/* Section rhythm helpers */
.folio-eyebrow{margin-bottom:14px}

/* Hero media: fanned, overlapping image cards (group uses core flex layout) */
.folio-hero-media > .wp-block-group__inner-container,
.folio-hero-media.is-layout-flex{min-height:340px;align-items:center}
.folio-hero-media .wp-block-cover{flex:0 0 auto;width:172px;min-height:252px;border-radius:16px;overflow:hidden;box-shadow:0 24px 52px rgba(15,23,42,.22);margin:0}
.folio-hero-media .wp-block-cover:nth-child(1){transform:rotate(-7deg) translateY(6px);z-index:1}
.folio-hero-media .wp-block-cover:nth-child(2){transform:translateY(-16px);z-index:3;margin:0 -26px}
.folio-hero-media .wp-block-cover:nth-child(3){transform:rotate(7deg) translateY(10px);z-index:2}
@media(max-width:782px){
  .folio-hero-media .wp-block-cover{width:150px;transform:none !important;margin:6px !important}
}

/* Star rating row */
.folio-stars{display:inline-flex;gap:3px;color:var(--nv-c-3,#F59E0B);line-height:1}
.folio-stars svg{width:18px;height:18px;display:block}

/* Outline buttons: core's transparent-background outline rule loses the cascade on some
   WP versions (e.g. 6.9) and the default dark button background shows through. */
.folio-btn-outline .wp-block-button__link{background-color:transparent}

/* Tag pills */
.folio-pills .wp-block-button__link{font-size:13px}

/* Brand strip */
.folio-brand p{margin:0;opacity:.55;font-weight:600}

/* Icon wrapper */
.folio-icon{display:inline-flex;align-items:center;justify-content:center;line-height:0}
.folio-icon svg{display:block}

/* Cards (services, what-we-do) */
.folio-card{height:auto;background:var(--nv-site-bg,#fff);transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 1px 2px rgba(15,23,42,.04)}
.folio-card:hover{transform:translateY(-4px);box-shadow:0 22px 48px rgba(15,23,42,.10)}
/* Centered card variant (home "What we do") */
.folio-card-center{text-align:center}
.folio-card-center .folio-icon{margin-left:auto;margin-right:auto}

/* Project cards */
.folio-project{background:var(--nv-site-bg,#fff);overflow:hidden;transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 10px 30px rgba(15,23,42,.06)}
.folio-project:hover{transform:translateY(-5px);box-shadow:0 26px 56px rgba(15,23,42,.14)}
.folio-project .wp-block-image,.folio-project img{margin:0;display:block}
.folio-project .wp-block-image img{width:100%;height:100%;object-fit:cover}

/* Equal-height cards only when laid out in a row (not stacked on mobile) */
@media(min-width:783px){.folio-card,.folio-project{height:100%}}

/* Team member: center avatar + text under each other */
.folio-team-member{text-align:center}
.folio-team-member .folio-avatar{width:62px;height:62px;font-size:20px;margin-left:auto;margin-right:auto}

/* Testimonial author row: keep avatar + name vertically centered */
.folio-author > .wp-block-group__inner-container,.folio-author.is-layout-flex{align-items:center}

/* Stats */
.folio-stat-num{line-height:1}

/* Testimonials */
.folio-quote{height:100%;background:var(--nv-site-bg,#fff);box-shadow:0 10px 30px rgba(15,23,42,.06)}
.folio-quote-mark{font-family:Georgia,serif;line-height:.6;color:var(--nv-c-1,#E5E7EB)}
.folio-avatar{width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--nv-primary-accent,#2563EB);color:#fff;font-weight:700;font-size:15px;flex:0 0 auto}

/* FAQ (core details) */
.folio-faq details{background:var(--nv-site-bg,#fff);border:1px solid var(--nv-c-1,#E5E7EB);border-radius:12px;padding:18px 22px;margin-bottom:14px}
.folio-faq summary{cursor:pointer;font-weight:600;list-style:none}
.folio-faq summary::-webkit-details-marker{display:none}
.folio-faq summary::after{content:"+";float:right;font-size:20px;line-height:1;color:var(--nv-c-2,#6B7280)}
.folio-faq details[open] summary::after{content:"\2013"}
.folio-faq details[open] summary{margin-bottom:10px}

/* Contact info icon chips */
.folio-contact-icon{width:44px;height:44px;border-radius:10px;background:var(--nv-light-bg,#F1F5F9);display:flex;align-items:center;justify-content:center;flex:0 0 auto;color:var(--nv-primary-accent,#2563EB)}

/* Generic image rounding inside starter pages */
.folio-round img{border-radius:16px}
CSS;
