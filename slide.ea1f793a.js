parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ehZo":[function(require,module,exports) {
var e=1;function t(t){l(e+=t)}function n(t){l(e=t)}function l(t){var n,l=document.getElementsByClassName("mySlides"),s=document.getElementsByClassName("dot");for(t>l.length&&(e=1),t<1&&(e=l.length),n=0;n<l.length;n++)l[n].style.display="none";for(n=0;n<s.length;n++)s[n].className=s[n].className.replace(" active","");l[e-1].style.display="block",s[e-1].className+=" active"}l(e),document.getElementById("plusbtn").addEventListener("click",function(){t(1)}),document.getElementById("minusbtn").addEventListener("click",function(){t(-1)});
},{}]},{},["ehZo"], null)
//# sourceMappingURL=/team-project/slide.ea1f793a.js.map