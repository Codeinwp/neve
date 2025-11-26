/*global neveScrollOffset*/

function scrollTopSafe(to) {
	let i = window.scrollY;
	to = parseInt(to);
	const scrollInterval = setInterval(function () {
		if (i < to + 20) i -= 1;
		else if (i < to + 40) i -= 6;
		else if (i < to + 80) i -= 16;
		else if (i < to + 160) i -= 36;
		else if (i < to + 200) i -= 48;
		else if (i < to + 300) i -= 80;
		else i -= 120;
		window.scroll(0, i);
		if (i <= to) clearInterval(scrollInterval);
	}, 15);
}

function runScroll() {
	const smoothScrollFeature =
		'scrollBehavior' in document.documentElement.style;
	if (!smoothScrollFeature) {
		scrollTopSafe(0);
	} else {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}
	const content = document.getElementById('content');
	const scrollButton = document.getElementById('scroll-to-top');
	if (content) {
		scrollButton.blur();
		content.focus();
	}
}
function scrollToTop() {
	const element = document.getElementById('scroll-to-top');
	if (!element) {
		return false;
	}

	element.addEventListener('click', function () {
		runScroll();
	});

	element.addEventListener('keydown', function (event) {
		if (event.key === 'Enter') {
			runScroll();
		}
	});

	window.addEventListener('scroll', function () {
		const yScrollPos = window.scrollY;
		const offset = neveScrollOffset.offset;

		if (yScrollPos > offset) {
			element.style.visibility = 'visible';
			element.style.opacity = '1';
		}
		if (yScrollPos <= offset) {
			element.style.opacity = '0';
			element.style.visibility = 'hidden';
		}

		// Change scroll to top position if there is a sticky add to cart in place.
		const stickyAddToCart = document.querySelector(
			'.sticky-add-to-cart-bottom'
		);
		if (stickyAddToCart) {
			element.style.bottom = '30px';

			// Try to get Neve's sticky footer. If it doesn't exist try to get Elementor's.
			let stickyFooter = document.querySelector('.hfg_footer');
			if (
				!stickyFooter ||
				!stickyFooter.classList.contains('has-sticky-rows')
			) {
				stickyFooter = document.querySelector(
					'.elementor-location-footer .elementor-sticky'
				);
			}
			const footerHeight = stickyFooter ? stickyFooter.offsetHeight : 0;

			if (
				stickyAddToCart.classList.contains('sticky-add-to-cart--active')
			) {
				element.style.bottom =
					stickyAddToCart.offsetHeight + footerHeight + 10 + 'px';
			}
		}
	});
}

window.addEventListener('load', function () {
	scrollToTop();
});
