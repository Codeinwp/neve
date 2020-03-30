export const maybeParseJson = (input) => {
  if ( typeof input !== 'string' ) {
    return input
  }
  try {
    JSON.parse( input )
  } catch ( error ) {
    return input
  }
  return JSON.parse( input )
}
