define("aladdin-san/app/right_recommends_merge/result_ce6bc47",["san","tslib","@baidu/www-api","@searchfe/inject-js"],function(e,r,a,i){return s={},o.m=c={0:function(t,n,e){var r=[n,e(1)],a=function(t,c){"use strict";function s(){return(s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function l(n){return typeof n}:function l(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},l(t)}function u(t,n){var e;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return d(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return d(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var r=0,a=function a(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return o=t.done,t},e:function(t){c=!0,i=t},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(c)throw i}}}}function d(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(t,n,e){var r,a=u(function(t){var n=[t];"function"==typeof t&&(n.push(t.prototype),t.prototype.constructor&&n.push(t.prototype.constructor.prototype));return n}(t));try{for(a.s();!(r=a.n()).done;){var i=r.value;n&&(i.template=n),e.length&&function(t,n){var e,r={},a=u(n);try{for(a.s();!(e=a.n()).done;){var i=e.value;s(r,i)}}catch(c){a.e(c)}finally{a.f()}var o=t.initData;t.initData=o?function(){return s({},o.call(this),{$style:r})}:function(){return r}}(i,e)}}catch(o){a.e(o)}finally{a.f()}return"object"===l(t)?(0,c.defineComponent)(t):t}}.apply(n,r);a===undefined||(t.exports=a)},1:function(t,n){t.exports=e},1827:function(t,n,e){var r=e(2880);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4)["default"])("f5860dca",r,!1,{runAsProduction:!0})},1828:function(t,n){t.exports=' <div class="cr-content {{$style.container}}"> <section s-for="card, index in cards" s-bind:key="index" data-click="{\n                \'rsv_card_index\': {{index}}\n            }"> <s-header card-index="{{index}}" is-fold="{=card.isFold=}" relation-rec-link="{{card.relationRecLink}}" can-title-click="{{card.showTop === 2}}" title="{{card.title}}" truncated-title="{{card.truncatedTitle}}" show-fold-btn="{{card.itemsCount > card.shownums}}" more-link="{{card.moreLink}}"/> <s-panel card-index="{{index}}" rows-data="{{card.itemsGroup}}" is-last="{{index === cards.length - 1}}" is-fold="{{card.isFold}}" showrow="{{card.showrow}}" vertical-img="{{card.verticalImg}}" row-len="{{rowLen}}"/> </section> </div> '},1829:function(t,n,e){var r=e(2882);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4)["default"])("5221a8ea",r,!1,{runAsProduction:!0})},1830:function(t,n){t.exports=' <div class="{{$style.container}} {{isLast ? \'\' : $style.notlast}} {{panelSpacingClass}} {{isFold ? $style.fold : \'\'}}"> <div s-for="row, rowIndex in rowsData" class="c-row {{$style.row}}"> <div s-if="!isFold || rowIndex < showrow"> <section s-for="item, index in row" s-bind:key="index" data-click="{\n                        \'rsv_item_index\': {{rowIndex * 4 + index}}\n                    }"> <s-img-text data="{{item}}" index="{{index}}" row-len="{{rowLen}}" vertical-img="{{verticalImg}}" show-attr="{{rowIndex < showrow}}"/> </section> </div> </div> </div> '},1831:function(t,n,e){var r=e(2884);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4)["default"])("08e2f1f5",r,!1,{runAsProduction:!0})},1832:function(t,n){t.exports=' <div class="{{containerClass}}" data-click="{{data.clickLog}}"> <div class="{{$style[\'img-container\']}}"> <a target="_blank" class="c-img c-img2 c-img-s c-img-radius-large {{$style[\'cover-img\']}}" href="{{data.href}}"> <span class="{{$style[\'cover-img-boder\']}} c-img-radius-large"></span> <img src="{{data.img}}" class="c-img c-img2 c-img-radius-large"> </a> <a s-if="!verticalImg" class="{{$style[\'img-container-mask\']}} c-img-radius-large" target="_blank" href="{{data.href}}"></a> </div> <div class="{{$style.title}}"> <a target="_blank" class="c-font-medium inc_rs_a" title="{{data.name}}" href="{{data.href}}">{{ data.truncatedName }}</a> </div> <div s-if="data.canShowAttr && showAttr" class="{{$style[\'attr-container\']}}"> <p s-if="data.attr" class="{{$style[\'attr-text\']}}"> {{ data.attr }} </p> <a s-elif="data.attrpic && data.attrpicislink" target="_blank" href="{{data.href}}"> <img src="{{data.attrpic}}" class="{{$style[\'attr-pic\']}}"> </a> <img s-elif="data.attrpic" src="{{data.attrpic}}" class="{{$style[\'attr-pic\']}}" data-nolog="1"> </div> </div> '},1833:function(t,n,e){var r=e(2886);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,e(4)["default"])("1d315b8b",r,!1,{runAsProduction:!0})},1834:function(t,n){t.exports=' <div class="cr-title c-clearfix"> <fragment s-if="relationRecLink"> <a class="cr-title-sub" target="_blank" href="{{relationRecLink}}"> <span>更多>></span> </a> <a s-if="canTitleClick" target="_blank" href="{{relationRecLink}}" class="{{$style[\'title-link\']}}"> <span title="{{title}}">{{ truncatedTitle }}</span> </a> <span s-else title="{{title}}">{{ truncatedTitle }}</span> </fragment> <fragment s-else> <a s-if="showFoldBtn" class="cr-title-sub {{$style[\'fold-btn-text\']}}" href="javascript:;" data-click="{\'fm\':\'beha\'}" on-click="foldChangeHandler"> <span>{{ foldBtn.text }}</span> <i class="c-icon {{$style[\'fold-btn-icon\']}}">{{ foldBtn.icon }}</i> </a> <a s-if="moreLink" target="_blank" href="{{moreLink}}" class="{{$style[\'title-link\']}}"> <span title="{{title}}">{{ truncatedTitle }}</span> </a> <fragment s-else> <span title="{{title}}">{{ truncatedTitle }}</span> </fragment> </fragment> </div> '},2:function(t,n){t.exports=r},2879:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(1827),o=e.n(i),c=e(1828),s=e.n(c),l=e(702),u=e.n(l);for(var d in l)"default"!==d&&function(t){e.d(n,t,function(){return l[t]})}(d);var f=[o.a];n["default"]=a()(u.a,s.a,f)},2880:function(t,n,e){(n=e(3)(!1)).push([t.i,".container_2AHLd {\n  position: relative;\n}\n",""]),n.locals={container:"container_2AHLd"},t.exports=n},2881:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(1829),o=e.n(i),c=e(1830),s=e.n(c),l=e(703),u=e.n(l);for(var d in l)"default"!==d&&function(t){e.d(n,t,function(){return l[t]})}(d);var f=[o.a];n["default"]=a()(u.a,s.a,f)},2882:function(t,n,e){(n=e(3)(!1)).push([t.i,".container_EBGt2 {\n  margin-top: -2px;\n}\n.container_EBGt2.notlast_30hc2 {\n  margin-bottom: 22px;\n}\n.container_EBGt2.notlast_30hc2.fold_2kZgh.has-attr_1DAxq,\n.container_l .container_EBGt2.notlast_30hc2.fold_2kZgh.has-attr-l_1_oEC {\n  margin-bottom: 21px;\n}\n.container_EBGt2 .row_19xr- {\n  margin-top: 11px;\n}\n",""]),n.locals={container:"container_EBGt2",notlast:"notlast_30hc2",fold:"fold_2kZgh","has-attr":"has-attr_1DAxq",hasAttr:"has-attr_1DAxq","has-attr-l":"has-attr-l_1_oEC",hasAttrL:"has-attr-l_1_oEC",row:"row_19xr-"},t.exports=n},2883:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(1831),o=e.n(i),c=e(1832),s=e.n(c),l=e(704),u=e.n(l);for(var d in l)"default"!==d&&function(t){e.d(n,t,function(){return l[t]})}(d);var f=[o.a];n["default"]=a()(u.a,s.a,f)},2884:function(t,n,e){(n=e(3)(!1)).push([t.i,'.container_l .last-item_cG9Ps {\n  display: block;\n}\n.container_l .cr-content-narrow .last-item_cG9Ps {\n  display: none;\n}\n.container_f_bS8 {\n  text-align: left;\n  word-break: normal;\n}\n.container-vertical_3rBxg .cover-img_PLe_S {\n  padding-bottom: 107px;\n}\n.last-item_cG9Ps {\n  display: none;\n}\n.img-container_2JSl6 {\n  position: relative;\n  _zoom: 1;\n}\n.img-container_2JSl6 .cover-img-boder_1-OG1 {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n  z-index: 1;\n}\n.img-container-mask_1S9Kw {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n.title_1v7d9 {\n  line-height: 22px;\n  margin-top: 5px;\n}\n.attr-container_22wB9 {\n  min-height: 20px;\n  color: #9195a3;\n}\n.attr-container_22wB9 .attr-text_3jLeU {\n  text-align: left;\n  margin: 0;\n  font-size: 13px;\n  line-height: 21px;\n  margin-top: -1px;\n  word-break: break-all;\n}\n.attr-container_22wB9 .attr-pic_2aNOa {\n  display: block;\n}\n',""]),n.locals={"last-item":"last-item_cG9Ps",lastItem:"last-item_cG9Ps",container:"container_f_bS8","container-vertical":"container-vertical_3rBxg",containerVertical:"container-vertical_3rBxg","cover-img":"cover-img_PLe_S",coverImg:"cover-img_PLe_S","img-container":"img-container_2JSl6",imgContainer:"img-container_2JSl6","cover-img-boder":"cover-img-boder_1-OG1",coverImgBoder:"cover-img-boder_1-OG1","img-container-mask":"img-container-mask_1S9Kw",imgContainerMask:"img-container-mask_1S9Kw",title:"title_1v7d9","attr-container":"attr-container_22wB9",attrContainer:"attr-container_22wB9","attr-text":"attr-text_3jLeU",attrText:"attr-text_3jLeU","attr-pic":"attr-pic_2aNOa",attrPic:"attr-pic_2aNOa"},t.exports=n},2885:function(t,n,e){"use strict";e.r(n);var r=e(0),a=e.n(r),i=e(1833),o=e.n(i),c=e(1834),s=e.n(c),l=e(705),u=e.n(l);for(var d in l)"default"!==d&&function(t){e.d(n,t,function(){return l[t]})}(d);var f=[o.a];n["default"]=a()(u.a,s.a,f)},2886:function(t,n,e){(n=e(3)(!1)).push([t.i,".title-link_23kbc {\n  text-decoration: none;\n}\n.title-link_23kbc:hover {\n  text-decoration: underline;\n}\n.fold-btn-text_3r8hd {\n  color: #626675;\n  text-decoration: none;\n}\n.fold-btn-text_3r8hd:hover {\n  color: #315efb;\n}\n.fold-btn-icon_XSMXB {\n  position: relative;\n  right: 0px;\n  top: 0px;\n  color: #4e6ef2;\n  font-size: 16px;\n  line-height: 16px;\n  width: 16px;\n  height: 16px;\n  margin-left: 4px;\n}\n",""]),n.locals={"title-link":"title-link_23kbc",titleLink:"title-link_23kbc","fold-btn-text":"fold-btn-text_3r8hd",foldBtnText:"fold-btn-text_3r8hd","fold-btn-icon":"fold-btn-icon_XSMXB",foldBtnIcon:"fold-btn-icon_XSMXB"},t.exports=n},3:function(t,n,e){var r=function(){"use strict";t.exports=function(e){var s=[];return s.toString=function(){return this.map(function(t){var n=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var a=function(t){var n=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n);return"/*# ".concat(e," */")}(r),i=r.sources.map(function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")});return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n}).join("")},s.i=function(t,n,e){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(e)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var o=0;o<t.length;o++){var c=[].concat(t[o]);e&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),s.push(c))}},s}}.apply(n,[]);r===undefined||(t.exports=r)},4:function(t,n,e){"use strict";function s(t,n){for(var e=[],r={},a=0;a<n.length;a++){var i=n[a],o=i[0],c={id:t+":"+a,css:i[1],media:i[2],sourceMap:i[3]};r[o]?r[o].parts.push(c):e.push(r[o]={id:o,parts:[c]})}return e}e.r(n),e.d(n,"default",function(){return m});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l={},a=r&&(document.head||document.getElementsByTagName("head")[0]),i=null,o=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function m(o,t,n,e){u=!!e.runAsProduction||n,d=e||{};var c=s(o,t);return h(c),function(t){for(var n=[],e=0;e<c.length;e++){var r=c[e];(a=l[r.id]).refs--,n.push(a)}t?h(c=s(o,t)):c=[];for(var a,e=0;e<n.length;e++){if(0===(a=n[e]).refs){for(var i=0;i<a.parts.length;i++)a.parts[i]();delete l[a.id]}}}}function h(t){for(var n=0;n<t.length;n++){var e=t[n],r=l[e.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](e.parts[a]);for(;a<e.parts.length;a++)r.parts.push(v(e.parts[a]));r.parts.length>e.parts.length&&(r.parts.length=e.parts.length)}else{for(var i=[],a=0;a<e.parts.length;a++)i.push(v(e.parts[a]));l[e.id]={id:e.id,refs:1,parts:i}}}}function g(){var t=document.createElement("style"),n=d.attributes||{};for(var e in t.type="text/css",n)n.hasOwnProperty(e)&&t.setAttribute(e,n[e]);return a.appendChild(t),t}function v(n){var t,e,r,a=document.querySelector("style["+f+'~="'+n.id+'"]');if(a){if(u)return c;a.parentNode.removeChild(a)}return r=p?(t=o++,a=i=i||g(),e=b.bind(null,a,t,!1),b.bind(null,a,t,!0)):(a=g(),e=function(t,n){var e=n.css,r=n.media,a=n.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,n.id);a&&(e+="\n/*# sourceURL="+a.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,a),function(){a.parentNode.removeChild(a)}),e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else r()}}var _,y=(_=[],function(t,n){return _[t]=n,_.filter(Boolean).join("\n")});function b(t,n,e,r){var a,i,o=e?"":r.css;t.styleSheet?t.styleSheet.cssText=y(n,o):(a=document.createTextNode(o),(i=t.childNodes)[n]&&t.removeChild(i[n]),i.length?t.insertBefore(a,i[n]):t.appendChild(a))}},5:function(t,n){t.exports=a},6:function(t,n){t.exports=i},702:function(t,n,e){"use strict";n.__esModule=!0;var r,a=e(2),i=e(1),o=a.__importDefault(e(2881)),c=a.__importDefault(e(2885)),s=e(6),l=e(5),u=(r=i.Component,a.__extends(d,r),d.prototype.initData=function(){return{cards:[],rowLen:0}},d.components={"s-panel":o["default"],"s-header":c["default"]},a.__decorate([s.injectable,a.__metadata("design:paramtypes",[l.SanOption])],d));function d(t){var n=r.call(this,t)||this;return n.trimWhitespace="all",n}n["default"]=u},703:function(t,n,e){"use strict";n.__esModule=!0;var r,a=e(2),i=e(1),o=a.__importDefault(e(2883)),c=(r=i.Component,a.__extends(s,r),s.prototype.initData=function(){return{rowsData:[],isLast:!1,isFold:!0,showrow:0,verticalImg:0,rowLen:0}},s.components={"s-img-text":o["default"]},s.computed={firstAttrPos:function(){for(var t=this.data.get("rowsData")[0],n=0;n<t.length;++n){var e=t[n];if(e.canShowAttr&&e.attr)return n}return-1},panelSpacingClass:function(){var t=this.data.get("$style"),n=this.data.get("firstAttrPos"),e="";return 0<=n&&n<=3&&(e=3===n?t["has-attr-l"]:t["has-attr"]),e}},s);function s(){var t=null!==r&&r.apply(this,arguments)||this;return t.trimWhitespace="all",t}n["default"]=c},704:function(t,n,e){"use strict";n.__esModule=!0;var r,a=e(2),i=e(1),o=(r=i.Component,a.__extends(c,r),c.prototype.initData=function(){return{data:{},rowLen:0,showAttr:!1}},c.computed={containerClass:function(){var t=this.data.get("$style"),n=this.data.get("rowLen"),e=this.data.get("index"),r=this.data.get("verticalImg"),a="c-span2 "+t.container;return r&&(a+=" "+t["container-vertical"]),e===n-1?(a+=" c-span-last",3!==n&&(a+=" "+t["last-item"])):e===n-2&&3!==n&&(a+=" c-span-last-s"),a}},c);function c(){var t=null!==r&&r.apply(this,arguments)||this;return t.trimWhitespace="all",t}n["default"]=o},705:function(t,n,e){"use strict";n.__esModule=!0;var r,a=e(2),i=e(1),o=(r=i.Component,a.__extends(c,r),c.prototype.initData=function(){return{relationRecLink:"",canTitleClick:!1,title:"",truncatedTitle:"",showFoldBtn:!1,moreLink:"",isFold:!1}},c.prototype.foldChangeHandler=function(){this.data.apply("isFold",function(t){return!t})},c.computed={foldBtn:function(){return this.data.get("isFold")?{text:"展开",icon:""}:{text:"收起",icon:""}}},c);function c(){var t=null!==r&&r.apply(this,arguments)||this;return t.trimWhitespace="all",t}n["default"]=o}},o.c=s,o.d=function(t,n,e){o.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(n,t){if(1&t&&(n=o(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var r in n)o.d(e,r,function(t){return n[t]}.bind(null,r));return e},o.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(n,"a",n),n},o.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},o.p="https://pss.bdstatic.com/r/www/cache",o(o.s=2879);function o(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return c[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}var c,s});