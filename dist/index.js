/** @license Apache-2.0 */

'use strict';

/**
* Natural logarithm of the probability mass function (PMF) for a discrete uniform distribution.
*
* @module @stdlib/stats-base-dists-discrete-uniform-logpmf
*
* @example
* var logpmf = require( '@stdlib/stats-base-dists-discrete-uniform-logpmf' );
*
* var y = logpmf( 3.0, 2, 6 );
* // returns ~-1.609
*
* var myLogPMF = logpmf.factory( 6, 7 );
* y = myLogPMF( 7.0 );
* // returns ~-0.693
*
* y = myLogPMF( 5.0 );
* // returns -Infinity
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
