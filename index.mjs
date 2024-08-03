// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.5-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.4-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.2-esm/index.mjs";function m(t,r,m){return e(t)||e(r)||e(m)||!s(r)||!s(m)||r>m?NaN:t<r||t>m||!s(t)?i:-n(m-r+1)}function d(t,m){var d;return e(t)||e(m)||!s(t)||!s(m)||t>m?r(NaN):(d=-n(m-t+1),function(n){if(e(n))return NaN;if(n<t||n>m||!s(n))return i;return d})}t(m,"factory",d);export{m as default,d as factory};
//# sourceMappingURL=index.mjs.map
