import{z as g,q,k as R,a as z,c as F,b as I}from"./value.iufjd77T.js";function M(n,r){return n==null||r==null?NaN:n<r?-1:n>r?1:n>=r?0:NaN}function S(n,r){return n==null||r==null?NaN:r<n?-1:r>n?1:r>=n?0:NaN}function w(n){let r,i,e;n.length!==2?(r=M,i=(f,l)=>M(n(f),l),e=(f,l)=>n(f)-l):(r=n===M||n===S?n:j,i=n,e=n);function a(f,l,t=0,h=f.length){if(t<h){if(r(l,l)!==0)return h;do{const c=t+h>>>1;i(f[c],l)<0?t=c+1:h=c}while(t<h)}return t}function u(f,l,t=0,h=f.length){if(t<h){if(r(l,l)!==0)return h;do{const c=t+h>>>1;i(f[c],l)<=0?t=c+1:h=c}while(t<h)}return t}function o(f,l,t=0,h=f.length){const c=a(f,l,t,h-1);return c>t&&e(f[c-1],l)>-e(f[c],l)?c-1:c}return{left:a,center:o,right:u}}function j(){return 0}function P(n){return n===null?NaN:+n}function*rn(n,r){if(r===void 0)for(let i of n)i!=null&&(i=+i)>=i&&(yield i);else{let i=-1;for(let e of n)(e=r(e,++i,n))!=null&&(e=+e)>=e&&(yield e)}}const N=w(M),y=N.right,en=N.left;w(P).center;const $=Math.sqrt(50),x=Math.sqrt(10),B=Math.sqrt(2);function d(n,r,i){const e=(r-n)/Math.max(0,i),a=Math.floor(Math.log10(e)),u=e/Math.pow(10,a),o=u>=$?10:u>=x?5:u>=B?2:1;let f,l,t;return a<0?(t=Math.pow(10,-a)/o,f=Math.round(n*t),l=Math.round(r*t),f/t<n&&++f,l/t>r&&--l,t=-t):(t=Math.pow(10,a)*o,f=Math.round(n/t),l=Math.round(r/t),f*t<n&&++f,l*t>r&&--l),l<f&&.5<=i&&i<2?d(n,r,i*2):[f,l,t]}function E(n,r,i){if(r=+r,n=+n,i=+i,!(i>0))return[];if(n===r)return[n];const e=r<n,[a,u,o]=e?d(r,n,i):d(n,r,i);if(!(u>=a))return[];const f=u-a+1,l=new Array(f);if(e)if(o<0)for(let t=0;t<f;++t)l[t]=(u-t)/-o;else for(let t=0;t<f;++t)l[t]=(u-t)*o;else if(o<0)for(let t=0;t<f;++t)l[t]=(a+t)/-o;else for(let t=0;t<f;++t)l[t]=(a+t)*o;return l}function p(n,r,i){return r=+r,n=+n,i=+i,d(n,r,i)[2]}function L(n,r,i){r=+r,n=+n,i=+i;const e=r<n,a=e?p(r,n,i):p(n,r,i);return(e?-1:1)*(a<0?1/-a:a)}function O(n){return Math.max(0,-g(Math.abs(n)))}function C(n,r){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(g(r)/3)))*3-g(Math.abs(n)))}function D(n,r){return n=Math.abs(n),r=Math.abs(r)-n,Math.max(0,g(r)-g(n))+1}function b(n,r){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(r).domain(n);break}return this}function tn(n,r){switch(arguments.length){case 0:break;case 1:{typeof n=="function"?this.interpolator(n):this.range(n);break}default:{this.domain(n),typeof r=="function"?this.interpolator(r):this.range(r);break}}return this}function G(n,r){return n=+n,r=+r,function(i){return Math.round(n*(1-i)+r*i)}}function H(n){return function(){return n}}function J(n){return+n}var k=[0,1];function m(n){return n}function v(n,r){return(r-=n=+n)?function(i){return(i-n)/r}:H(isNaN(r)?NaN:.5)}function K(n,r){var i;return n>r&&(i=n,n=r,r=i),function(e){return Math.max(n,Math.min(r,e))}}function Q(n,r,i){var e=n[0],a=n[1],u=r[0],o=r[1];return a<e?(e=v(a,e),u=i(o,u)):(e=v(e,a),u=i(u,o)),function(f){return u(e(f))}}function T(n,r,i){var e=Math.min(n.length,r.length)-1,a=new Array(e),u=new Array(e),o=-1;for(n[e]<n[0]&&(n=n.slice().reverse(),r=r.slice().reverse());++o<e;)a[o]=v(n[o],n[o+1]),u[o]=i(r[o],r[o+1]);return function(f){var l=y(n,f,1,e)-1;return u[l](a[l](f))}}function U(n,r){return r.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function V(){var n=k,r=k,i=R,e,a,u,o=m,f,l,t;function h(){var s=Math.min(n.length,r.length);return o!==m&&(o=K(n[0],n[s-1])),f=s>2?T:Q,l=t=null,c}function c(s){return s==null||isNaN(s=+s)?u:(l||(l=f(n.map(e),r,i)))(e(o(s)))}return c.invert=function(s){return o(a((t||(t=f(r,n.map(e),q)))(s)))},c.domain=function(s){return arguments.length?(n=Array.from(s,J),h()):n.slice()},c.range=function(s){return arguments.length?(r=Array.from(s),h()):r.slice()},c.rangeRound=function(s){return r=Array.from(s),i=G,h()},c.clamp=function(s){return arguments.length?(o=s?!0:m,h()):o!==m},c.interpolate=function(s){return arguments.length?(i=s,h()):i},c.unknown=function(s){return arguments.length?(u=s,c):u},function(s,A){return e=s,a=A,h()}}function W(){return V()(m,m)}function X(n,r,i,e){var a=L(n,r,i),u;switch(e=z(e??",f"),e.type){case"s":{var o=Math.max(Math.abs(n),Math.abs(r));return e.precision==null&&!isNaN(u=C(a,o))&&(e.precision=u),F(e,o)}case"":case"e":case"g":case"p":case"r":{e.precision==null&&!isNaN(u=D(a,Math.max(Math.abs(n),Math.abs(r))))&&(e.precision=u-(e.type==="e"));break}case"f":case"%":{e.precision==null&&!isNaN(u=O(a))&&(e.precision=u-(e.type==="%")*2);break}}return I(e)}function Y(n){var r=n.domain;return n.ticks=function(i){var e=r();return E(e[0],e[e.length-1],i??10)},n.tickFormat=function(i,e){var a=r();return X(a[0],a[a.length-1],i??10,e)},n.nice=function(i){i==null&&(i=10);var e=r(),a=0,u=e.length-1,o=e[a],f=e[u],l,t,h=10;for(f<o&&(t=o,o=f,f=t,t=a,a=u,u=t);h-- >0;){if(t=p(o,f,i),t===l)return e[a]=o,e[u]=f,r(e);if(t>0)o=Math.floor(o/t)*t,f=Math.ceil(f/t)*t;else if(t<0)o=Math.ceil(o*t)/t,f=Math.floor(f*t)/t;else break;l=t}return n},n}function Z(){var n=W();return n.copy=function(){return U(n,Z())},b.apply(n,arguments),Y(n)}function _(){var n=[.5],r=[0,1],i,e=1;function a(u){return u!=null&&u<=u?r[y(n,u,0,e)]:i}return a.domain=function(u){return arguments.length?(n=Array.from(u),e=Math.min(n.length,r.length-1),a):n.slice()},a.range=function(u){return arguments.length?(r=Array.from(u),e=Math.min(n.length,r.length-1),a):r.slice()},a.invertExtent=function(u){var o=r.indexOf(u);return[n[o-1],n[o]]},a.unknown=function(u){return arguments.length?(i=u,a):i},a.copy=function(){return _().domain(n).range(r).unknown(i)},b.apply(a,arguments)}export{M as a,P as b,w as c,D as d,C as e,G as f,J as g,V as h,b as i,U as j,E as k,Y as l,m,rn as n,y as o,O as p,W as q,tn as r,Z as s,L as t,_ as u,X as v,en as w};
