!function(r){function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var t={};e.m=r,e.c=t,e.d=function(r,t,n){e.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:n})},e.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(t,"a",t),t},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="",e(e.s=0)}([function(r,e,t){"use strict";function n(r){if(Array.isArray(r)){for(var e=0,t=Array(r.length);e<r.length;e++)t[e]=r[e];return t}return Array.from(r)}Object.defineProperty(e,"__esModule",{value:!0});var a=function(r,e){var t=e.targetBlank,a=void 0!==t&&t,o=e.classNames,i=void 0===o?[]:o,u=r.innerText,l=u.match(/\[\[(.*?)\]\]/g).map(function(r){return r.replace(/\[+|\]+/g,"")}),c=0,f=!0,s=!1,p=void 0;try{for(var v,d=l[Symbol.iterator]();!(f=(v=d.next()).done);f=!0){var y=v.value,b=y.split(","),g=document.createElement("a");if(g.setAttribute("href",b[1]),g.innerHTML=b[0],a&&g.setAttribute("target","_blank"),0===i.length)i=[];else{var m;(m=g.classList).add.apply(m,n(i))}var h="[["+y+"]]";if(0===c){var M=u.replace(h,g.outerHTML);r.innerHTML=M}else{var x=r.innerHTML,L=x.replace(h,g.outerHTML);r.innerHTML=L}c++}}catch(r){s=!0,p=r}finally{try{!f&&d.return&&d.return()}finally{if(s)throw p}}};e.default=a}]);