module.exports.externalMacro = function( t, input, expected ) {
	console.log( 'running external macro...' );
	t.is( eval( input ), expected );
}
