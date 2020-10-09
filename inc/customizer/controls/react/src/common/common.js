export const maybeParseJson = ( input ) => {
	if ( typeof input !== 'string' ) {
		return input;
	}
	try {
		JSON.parse( input );
	} catch ( error ) {
		return input;
	}
	return JSON.parse( input );
};

/**
 * Simple object check.
 *
 * @param item
 * @return {boolean}
 */
export const isObject = ( item ) => {
	return item && typeof item === 'object' && ! Array.isArray( item );
};

/**
 * Deep merge objects.
 */
export const mergeDeep = (...objects) => {
  const isObject = obj => obj && typeof obj === 'object'
  return objects.reduce((prev, obj) => {
    Object.keys(obj).forEach(key => {
      const pVal = prev[key]
      const oVal = obj[key]
      if (Array.isArray(pVal) && Array.isArray(oVal)) {
        prev[key] = pVal.concat(...oVal)
      } else if (isObject(pVal) && isObject(oVal)) {
        prev[key] = mergeDeep(pVal, oVal)
      } else {
        prev[key] = oVal
      }
    })
    return prev
  }, {})
}

export const getIntValAsResponsive = ( value ) => {
	value = maybeParseJson( value );
	if (
		typeof value === 'object' &&
		Object.prototype.hasOwnProperty.call( value, 'desktop' ) &&
		Object.prototype.hasOwnProperty.call( value, 'tablet' ) &&
		Object.prototype.hasOwnProperty.call( value, 'mobile' )
	) {
		return value;
	}
	if ( typeof value === 'number' ) {
		value = {
			desktop: value,
			tablet: value,
			mobile: value,
		};
		return value;
	}

	return value;
};
