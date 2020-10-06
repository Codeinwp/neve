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
 * Deep merge two objects.
 *
 * @param target
 * @param {...any} sources
 */
export const mergeDeep = ( target, ...sources ) => {
	if ( ! sources.length ) return target;
	// Use first object we want to merge with and remove it from the start.
	const source = sources.shift();

	if ( isObject( target ) && isObject( source ) ) {
		// Loop over each key in one source.
		for ( const key in source ) {
			if ( isObject( source[ key ] ) ) {
				// Merge inside keys if we have an object.
				if ( ! target[ key ] ) Object.assign( target, { [ key ]: {} } );
				mergeDeep( target[ key ], source[ key ] );
			} else {
				// Reassign with source.
				Object.assign( target, { [ key ]: source[ key ] } );
			}
		}
	}
	// Run recursively for multiple.
	return mergeDeep( target, ...sources );
};

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
