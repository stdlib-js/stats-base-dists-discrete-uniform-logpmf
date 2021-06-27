<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Logarithm of Probability Mass Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Evaluate the natural logarithm of the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution.

<section class="intro">

The [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] random variable is

<!-- <equation class="equation" label="eq:discrete_uniform_pmf" align="center" raw="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} & \text{for } x \in \{ a, \ldots, b \} \\ 0 & \text{otherwise} \end{cases}" alt="Probability mass function (PMF) for a discrete uniform distribution."> -->

<div class="equation" align="center" data-raw-text="P(X=x;a,b)=\begin{cases} \frac{1}{b - a + 1} &amp; \text{for } x \in \{ a, \ldots, b \} \\ 0 &amp; \text{otherwise} \end{cases}" data-equation="eq:discrete_uniform_pmf">
    <img src="https://cdn.rawgit.com/stdlib-js/stdlib/7e0a95722efd9c771b129597380c63dc6715508b/lib/node_modules/@stdlib/stats/base/dists/discrete-uniform/logpmf/docs/img/equation_discrete_uniform_pmf.svg" alt="Probability mass function (PMF) for a discrete uniform distribution.">
    <br>
</div>

<!-- </equation> -->

where `a` is the minimum support and `b` is the maximum support of the distribution. The parameters must satisfy `a <= b`.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-discrete-uniform-logpmf
```

</section>

<section class="usage">

## Usage

```javascript
var logpmf = require( '@stdlib/stats-base-dists-discrete-uniform-logpmf' );
```

#### logpmf( x, a, b )

Evaluates the natural logarithm of the [probability mass function][pmf] (PMF) for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var y = logpmf( 2.0, 0, 4 );
// returns ~-1.609

y = logpmf( 5.0, 0, 4 );
// returns -Infinity

y = logpmf( 3, -4, 4 );
// returns ~-2.197
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = logpmf( NaN, -2, 2 );
// returns NaN

y = logpmf( 1.0, NaN, 4 );
// returns NaN

y = logpmf( 2.0, 0, NaN );
// returns NaN
```

If `a` or `b` is not an integer value, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 1, 5.5 );
// returns NaN
```

If provided `a > b`, the function returns `NaN`.

```javascript
var y = logpmf( 2.0, 3, 2 );
// returns NaN
```

#### logpmf.factory( a, b )

Returns a `function` for evaluating the [PMF][pmf] for a [discrete uniform][discrete-uniform-distribution] distribution with parameters `a` (minimum support) and `b` (maximum support).

```javascript
var myLogPMF = logpmf.factory( 6, 7 );
var y = myLogPMF( 7.0 );
// returns ~-0.693

y = myLogPMF( 5.0 );
// returns -Infinity
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randint = require( '@stdlib/random-base-discrete-uniform' );
var logpmf = require( '@stdlib/stats-base-dists-discrete-uniform-logpmf' );

var randa = randint.factory( 0, 10 );
var randb = randint.factory();
var a;
var b;
var x;
var y;
var i;

for ( i = 0; i < 25; i++ ) {
    a = randa();
    x = randb( a, a+randa() );
    b = randb( a, a+randa() );
    y = logpmf( x, a, b );
    console.log( 'x: %d, a: %d, b: %d, ln(P(X=x;a,b)): %d', x.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-discrete-uniform-logpmf.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-discrete-uniform-logpmf

[test-image]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logpmf/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/stats-base-dists-discrete-uniform-logpmf/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-discrete-uniform-logpmf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-discrete-uniform-logpmf?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-discrete-uniform-logpmf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-discrete-uniform-logpmf/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-discrete-uniform-logpmf/main/LICENSE

[pmf]: https://en.wikipedia.org/wiki/Probability_mass_function

[discrete-uniform-distribution]: https://en.wikipedia.org/wiki/Discrete_uniform_distribution

</section>

<!-- /.links -->
