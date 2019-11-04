/* global upsellConfig */
document.addEventListener("DOMContentLoaded", function(event) {
    if ( typeof upsellConfig !== 'undefined' ){
        var markup = '<div class="nv-upsell"><div class="nv-upsell-content">' + upsellConfig.text + '</div><a target="_blank" href="'+ upsellConfig.button_url +'" class="button button-primary">'+upsellConfig.button_text+'</a></div>';
        var elChild = document.createElement('li');
        elChild.innerHTML = markup;
        var el = document.getElementById('sub-accordion-panel-hfg_header');
        el.appendChild(elChild);
    }
});
