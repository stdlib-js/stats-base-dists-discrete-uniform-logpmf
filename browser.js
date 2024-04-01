// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,a=e-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(a):n(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(r){var e,n,c;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===r.specifier||10!==e)&&(c=4294967295+c+1),c<0?(n=(-c).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=c.toString(e),c||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===o.call(r.specifier)?o.call(n):a.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var f=Math.abs,u=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,w=/\.0*e/,b=/(\..*[^0])0*e/;function v(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,b,"$1e"),n=s.call(n,w,"e"),n=s.call(n,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,y,"e-0$1"),r.alternate&&(n=s.call(n,d,"$1."),n=s.call(n,g,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):u.call(n)}function m(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var A=String.fromCharCode,_=isNaN,E=Array.isArray;function U(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function x(r){var e,t,n,a,o,f,u,l,s,p,y,d,g;if(!E(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",u=1,l=0;l<r.length;l++)if("string"==typeof(n=r[l]))f+=n;else{if(e=void 0!==n.precision,!(n=U(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(a=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,_(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(o)?String(n.arg):A(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,y=n.width,d=n.padRight,g=void 0,(g=y-p.length)<0?p:p=d?p+m(g):m(g)+p)),f+=n.arg||"",u+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function j(r){var e,t,n,i;for(t=[],i=0,n=S.exec(r);n;)(e=r.slice(i,S.lastIndex-n[0].length)).length&&t.push(e),t.push(k(n)),i=S.lastIndex,n=S.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function F(r){var e,t;if("string"!=typeof r)throw new TypeError(F("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[j(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return x.apply(null,e)}var N,T=Object.prototype,I=T.toString,V=T.__defineGetter__,$=T.__defineSetter__,O=T.__lookupGetter__,C=T.__lookupSetter__;N=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===I.call(r))throw new TypeError(F("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===I.call(t))throw new TypeError(F("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(O.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=T,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&V&&V.call(r,e,t.get),o&&$&&$.call(r,e,t.set),r};var P=N,R=Math.floor;function G(r){return R(r)===r}function Z(r){return r!=r}var W,L="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),M=Object.prototype.toString,X=Object.prototype.hasOwnProperty,z="function"==typeof Symbol?Symbol:void 0,Y="function"==typeof z?z.toStringTag:"";W=L&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,a;if(null==r)return M.call(r);t=r[Y],a=Y,e=null!=(i=r)&&X.call(i,a);try{r[Y]=void 0}catch(e){return M.call(r)}return n=M.call(r),e?r[Y]=t:delete r[Y],n}:function(r){return M.call(r)};var q,B=W,D="function"==typeof Uint32Array,H="function"==typeof Uint32Array?Uint32Array:null,J="function"==typeof Uint32Array?Uint32Array:void 0;q=function(){var r,e,t;if("function"!=typeof H)return!1;try{e=new H(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(D&&t instanceof Uint32Array||"[object Uint32Array]"===B(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?J:function(){throw new Error("not implemented")};var K,Q=q,rr="function"==typeof Float64Array,er="function"==typeof Float64Array?Float64Array:null,tr="function"==typeof Float64Array?Float64Array:void 0;K=function(){var r,e,t;if("function"!=typeof er)return!1;try{e=new er([1,3.14,-3.14,NaN]),t=e,r=(rr&&t instanceof Float64Array||"[object Float64Array]"===B(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var nr,ir=K,ar="function"==typeof Uint8Array,or="function"==typeof Uint8Array?Uint8Array:null,cr="function"==typeof Uint8Array?Uint8Array:void 0;nr=function(){var r,e,t;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,256,257]),t=e,r=(ar&&t instanceof Uint8Array||"[object Uint8Array]"===B(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?cr:function(){throw new Error("not implemented")};var fr,ur=nr,lr="function"==typeof Uint16Array,sr="function"==typeof Uint16Array?Uint16Array:null,pr="function"==typeof Uint16Array?Uint16Array:void 0;fr=function(){var r,e,t;if("function"!=typeof sr)return!1;try{e=new sr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(lr&&t instanceof Uint16Array||"[object Uint16Array]"===B(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,dr={uint16:fr,uint8:ur};(yr=new dr.uint16(1))[0]=4660;var gr=52===new dr.uint8(yr.buffer)[0],hr=!0===gr?1:0,wr=new ir(1),br=new Q(wr.buffer);function vr(r){return wr[0]=r,br[hr]}var mr=!0===gr?1:0,Ar=new ir(1),_r=new Q(Ar.buffer),Er=1023,Ur=Number.NEGATIVE_INFINITY,xr=.6931471803691238,Sr=1.9082149292705877e-10,kr=0x40000000000000,jr=.3333333333333333,Fr=1048575,Nr=2146435072,Tr=1048576,Ir=1072693248;function Vr(r){var e,t,n,i,a,o,c,f,u,l,s,p;return 0===r?Ur:Z(r)||r<0?NaN:(a=0,(t=vr(r))<Tr&&(a-=54,t=vr(r*=kr)),t>=Nr?r+r:(a+=(t>>20)-Er|0,a+=(f=614244+(t&=Fr)&1048576|0)>>20|0,c=(r=function(r,e){return Ar[0]=r,_r[mr]=e>>>0,Ar[0]}(r,t|f^Ir))-1,(Fr&2+t)<3?0===c?0===a?0:a*xr+a*Sr:(o=c*c*(.5-jr*c),0===a?c-o:a*xr-(o-a*Sr-c)):(f=t-398458|0,u=440401-t|0,i=(s=(p=(l=c/(2+c))*l)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(s),n=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(s),o=n+i,(f|=u)>0?(e=.5*c*c,0===a?c-(e-l*(e+o)):a*xr-(e-(l*(e+o)+a*Sr)-c)):0===a?c-l*(c-o):a*xr-(l*(c-o)-a*Sr-c))))}function $r(r,e,t){return Z(r)||Z(e)||Z(t)||!G(e)||!G(t)||e>t?NaN:r<e||r>t||!G(r)?Ur:-Vr(t-e+1)}return P($r,"factory",{configurable:!1,enumerable:!1,writable:!1,value:function(r,e){var t,n;return Z(r)||Z(e)||!G(r)||!G(e)||r>e?(n=NaN,function(){return n}):(t=-Vr(e-r+1),function(n){return Z(n)?NaN:n<r||n>e||!G(n)?Ur:t})}}),$r},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).logpmf=e();
//# sourceMappingURL=browser.js.map
