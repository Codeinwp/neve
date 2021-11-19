/**
 * Parses the font family to ensure proper CSS formatting.
 *
 * @param {string} font the font string.
 * @return {string} the formatted font string.
 */
export const parseFontFamily = (font) => {
	// Only one font (no commas)
	if (font.indexOf(',') < 0) {
		return quoteFont(font);
	}

	// Multiple fonts separated by comma.
	const parsed = font.split(',').map((singularFont) => {
		return quoteFont(singularFont);
	});

	return parsed.join(',');
};

/**
 * Quote a font if it has spaces inside.
 *
 * @param {string} font the font string.
 * @return {string} returns quoted font string.
 */
const quoteFont = (font) => {
	font = font.trim();

	if (font.indexOf(' ') < 0) {
		return font;
	}
	return `"${font}"`;
};
