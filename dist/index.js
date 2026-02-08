"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=o(function(j,f){
var t=require('@stdlib/math-base-assert-is-integer/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),g=require('@stdlib/math-base-special-ln/dist'),p=require('@stdlib/constants-float64-ninf/dist');function y(e,r,i){return u(e)||u(r)||u(i)||!t(r)||!t(i)||r>i?NaN:e<r||e>i||!t(e)?p:-g(i-r+1)}f.exports=y
});var c=o(function(k,q){
var I=require('@stdlib/utils-constant-function/dist'),a=require('@stdlib/math-base-assert-is-integer/dist'),s=require('@stdlib/math-base-assert-is-nan/dist'),m=require('@stdlib/math-base-special-ln/dist'),F=require('@stdlib/constants-float64-ninf/dist');function d(e,r){var i;if(s(e)||s(r)||!a(e)||!a(r)||e>r)return I(NaN);return i=-m(r-e+1),l;function l(n){return s(n)?NaN:n<e||n>r||!a(n)?F:i}}q.exports=d
});var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),N=v(),R=c();O(N,"factory",R);module.exports=N;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
