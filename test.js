import test from 'ava';

import { externalMacro } from './macros';

function internalMacro( t, input, expected ) {
	console.log( 'running internal macro...' );
	t.is( eval( input ), expected );
}

// this will output a power-assert error
test( 'internalMacro: 2 + 2 === 4', internalMacro, '2 + 2', 8 );

// this will output a standard assert error
test( 'externalMacro: 2 + 2 === 4', externalMacro, '2 + 2', 8 );
