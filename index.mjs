// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";var m=s,d=e,a=n,o=r;var l=i,j=s,f=e,p=n,h=r;var c=function(t,s,e){return d(t)||d(s)||d(e)||!m(s)||!m(e)||s>e?NaN:t<s||t>e||!m(t)?o:-a(e-s+1)},u=function(t,s){var e;return f(t)||f(s)||!j(t)||!j(s)||t>s?l(NaN):(e=-p(s-t+1),function(n){if(f(n))return NaN;if(n<t||n>s||!j(n))return h;return e})};t(c,"factory",u);var v=c;export{v as default,u as factory};
//# sourceMappingURL=index.mjs.map
