define("aladdin-san/app/yl_music_song/result_79b7f7a",["san","tslib","@baidu/www-api","@searchfe/inject-js"],function(e,a,r,i){return s={},o.m=l={0:function(n,t,e){var a=[t,e(1)],r=function(n,l){"use strict";function s(){return(s=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n}).apply(this,arguments)}function c(n){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function c(t){return typeof t}:function c(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},c(n)}function d(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return u(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var a=0,r=function r(){};return{s:r,n:function(){return a>=n.length?{done:!0}:{done:!1,value:n[a++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return o=n.done,n},e:function(n){l=!0,i=n},f:function(){try{o||null==e["return"]||e["return"]()}finally{if(l)throw i}}}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,a=new Array(t);e<t;e++)a[e]=n[e];return a}Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(n,t,e){var a,r=d(function(n){var t=[n];"function"==typeof n&&(t.push(n.prototype),n.prototype.constructor&&t.push(n.prototype.constructor.prototype));return t}(n));try{for(r.s();!(a=r.n()).done;){var i=a.value;t&&(i.template=t),e.length&&function(n,t){var e,a={},r=d(t);try{for(r.s();!(e=r.n()).done;){var i=e.value;s(a,i)}}catch(l){r.e(l)}finally{r.f()}var o=n.initData;n.initData=o?function(){return s({},o.call(this),{$style:a})}:function(){return a}}(i,e)}}catch(o){r.e(o)}finally{r.f()}return"object"===c(n)?(0,l.defineComponent)(n):n}}.apply(t,a);r===undefined||(n.exports=r)},1:function(n,t){n.exports=e},125:function(n,t,e){"use strict";t.__esModule=!0;var a,r=e(2),i=e(1),o=r.__importDefault(e(319)),l=(a=i.Component,r.__extends(s,a),s.prototype.initData=function(){return{song:{},showLine:!1}},s.prototype.linkurl=function(n){n&&window.open(n)},s.prototype.dataClick=function(n){return n.sitePinyin?JSON.stringify({sitePinyin:n.sitePinyin}):""},s.components={"my-label":o["default"]},s.computed={singersLen:function(){return this.data.get("song").singer.length}},s);function s(){var n=null!==a&&a.apply(this,arguments)||this;return n.trimWhitespace="all",n}t["default"]=l},126:function(n,t,e){"use strict";t.__esModule=!0;var a,r=e(2),i=e(1),o=(a=i.Component,r.__extends(l,a),l.prototype.initData=function(){return{text:"",type:""}},l.computed={textClass:function(){var n=this.data.get("type"),t=this.data.get("text");if(n.includes("solid")){var e=n.split("-"),a=1<t.length?"c-text-mult":"";return"c-text-"+e[0]+" "+a}return this.data.get("hasBorder")||this.data.get("smallRadius")?"c-text-"+n:"c-text-blue"},hasBorder:function(){return-1!==this.data.get("type").indexOf("border")},smallRadius:function(){var n=this.data.get("type");return["new","hot","fei","bao","recommend","finish","time"].includes(n)}},l);function l(){return null!==a&&a.apply(this,arguments)||this}t["default"]=o},2:function(n,t){n.exports=a},2014:function(n,t,e){var a=e(3075);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(4)["default"])("23044393",a,!1,{runAsProduction:!0})},2015:function(n,t){n.exports=' <div> <div s-if="!isSong" class="{{ [$style.reBox, isGroup ? $style.isGroup : \'\' ] }}"> <p class="{{isGroup ? \' c-group-title\' : ($style.songName + \' c-gap-bottom-xsmall\')}} c-color-t"> <span s-if="!isGroup">{{ data.title }}歌曲</span> <span s-else>音乐</span> </p> <song-table class="{{$style.singerSongTable}}" songList="{{ site }}"/> </div> <div s-else> <h3 class="t"> <a href="{{ song.songUrl }}" data-click="{{ dataClick(song) }}" target="_blank" class="{{ $style.reTitle }}"> {{ title | raw }} </a> </h3> <div class="{{ $style.reBox }}"> <song-head song="{{ song }}"/> <div s-if="multiLen"> <p class="{{ $style.otherVersion }} c-font-medium">其他版本</p> <song-table songList="{{ multi }}"/> </div> </div> </div> </div> '},2016:function(n,t,e){var a=e(3077);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(4)["default"])("72b5b2b8",a,!1,{runAsProduction:!0})},2017:function(n,t){n.exports=' <div class="{{ $style.tableContainer }}"> <table> <thead class="{{ $style.tableThead }}"> <tr> <th class="{{ $style.thNum }}">序号</th> <th class="{{ $style.thSonger }}">歌手</th> <th class="{{ $style.thSource }}">来源</th> </tr> </thead> <tbody class="{{ $style.tableTbody }}"> <tr s-for="item, index in songList" class="c-gap-bottom-mini"> <td class="{{ $style.tdNum }}"> <span class="{{ $style.num }} c-font-medium">{{ index + 1 }}</span> <img class="c-icon c-gap-right {{ $style.iconCommon }} OP_LOG_BTN" data-click="{{dataClick(item)}}" on-click="linkurl(item.playFile)" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=271657503,3457309198&fm=179&app=35&f=PNG?w=96&h=96&s=25D13A6C8A072157515DA11B0300C0C1"/> <a class="{{ $style.songName }} c-line-clamp1" data-click="{{dataClick(item)}}" href="{{ item.songUrl }}" target="_blank">{{ item.songName }}</a> <div class="{{ $style.labelContainer }}"> <span s-if="item.mvUrl" class="c-gap-left-small c-text c-text-green-border {{ $style.mvLabel }} OP_LOG_BTN" title="播放MV" data-click="{{dataClick(item)}}" on-click="linkurl(item.mvUrl)">MV</span> <c-label s-for="label in item.labels" class="c-gap-left-small {{ $style.songLabel }}" text="{{ label.txt }}" type="{{ label.type }}-border"/> </div> </td> <td class="{{ $style.tdSongName }} c-line-clamp1"> <span class="{{ $style.headSinger }}" s-for="s, i in item.singer"> <a href="{{ s.singerUrl }}" target="_blank" data-click="{{dataClick(item)}}">{{ s.singerName }}</a> <span s-if="(i + 1) !== (singersLen(item.singer))">/</span> </span> </td> <td class="{{ $style.iconBox }} c-gap-left-small"> <img src="{{ item.siteIcon }}" class="{{ $style.iconCommon }} {{ $style.iconSource }} OP_LOG_BTN" data-click="{{dataClick(item)}}" on-click="linkurl(item.showUrl)"/> </td> </tr> </tbody> </table> </div> '},3:function(n,t,e){var a=function(){"use strict";n.exports=function(e){var s=[];return s.toString=function(){return this.map(function(n){var t=function(n,t){var e=n[1]||"",a=n[3];if(!a)return e;if(t&&"function"==typeof btoa){var r=function(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),e="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(e," */")}(a),i=a.sources.map(function(n){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(n," */")});return[e].concat(i).concat([r]).join("\n")}return[e].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t}).join("")},s.i=function(n,t,e){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(e)for(var r=0;r<this.length;r++){var i=this[r][0];null!=i&&(a[i]=!0)}for(var o=0;o<n.length;o++){var l=[].concat(n[o]);e&&a[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),s.push(l))}},s}}.apply(t,[]);a===undefined||(n.exports=a)},305:function(n,t,e){var a=e(894);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(4)["default"])("3f210d24",a,!1,{runAsProduction:!0})},306:function(n,t){n.exports=' <div class="{{ $style.headContainer }}" style="{{ showLine ? \'\' : {\'border\': \'none\'} }}"> <img src="{{ song.poster || song.musicImage }}" alt="" class="{{ $style.headPoster }}"> <div class="{{$style.headRight}} c-gap-left-large"> <p class="{{ $style.songName }}"> <a href="{{ song.songUrl }}" data-click="{{ dataClick(song) }}" target="_blank" class="c-font-medium"> {{ song.songName }} </a> <span s-if="song.mvUrl" class="c-gap-left-small c-text c-text-green-border {{ $style.mvLabel }} OP_LOG_BTN" title="播放MV" data-click="{{ dataClick(song) }}" on-click="linkurl(song.mvUrl)">MV</span> </p> <div class="{{ $style.rightRow }}"> <span> 歌手: </span> <div class="{{ $style.singerWrap }} {{ song.isOriginal === \'1\' ? $style.hasOriginal : \'\' }} c-line-clamp1"> <span s-for="item, index in song.singer" class="{{ $style.headSinger }} c-line-clamp1"> <a href="{{ item.singerUrl }}" data-click="{{ dataClick(song) }}" target="_blank"> {{ item.singerName }} </a> <span s-if="(index + 1) !== singersLen">/</span> </span> </div> <my-label s-if="song.isOriginal === \'1\'" text="原唱" type="gray-border" class="c-gap-left-small"/> <span s-if="song.publishTime" class="c-gap-left"> 发行日期:{{ song.publishTime }} </span> </div> <button class="{{ $style.headBtn }} {{ $style.playBtn }} c-gap-top" data-click="{{ dataClick(song) }}" on-click="linkurl(song.playFile)"> 立即播放 </button> <button s-if="song.lrcContentAll" data-click="{{ dataClick(song) }}" class="{{ $style.headBtn }} {{ $style.findLrcBtn }} c-gap-top c-gap-left" on-click="linkurl(song.lrcUrl)"> 查看歌词 </button> </div> </div> '},307:function(n,t,e){var a=e(895);"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);(0,e(4)["default"])("13081cca",a,!1,{runAsProduction:!0})},3074:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(2014),o=e.n(i),l=e(2015),s=e.n(l),c=e(796),d=e.n(c);for(var u in c)"default"!==u&&function(n){e.d(t,n,function(){return c[n]})}(u);var p=[o.a];t["default"]=r()(d.a,s.a,p)},3075:function(n,t,e){(t=e(3)(!1)).push([n.i,".re-title_nYXhF {\n  margin-bottom: 4px;\n}\n.re-box_2CJ9w {\n  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 16px;\n  padding: 16px 16px 6px;\n  margin: 0 -16px;\n}\n.re-box_2CJ9w.is-group_POaO_ {\n  box-shadow: none;\n  padding: 0 16px;\n  margin-bottom: -9px;\n}\n.re-box_2CJ9w.is-group_POaO_ .singer-song-table_27gRR {\n  margin-top: -5px;\n}\n.re-box_2CJ9w .other-version_P0N9L {\n  margin-bottom: 3px;\n}\n.song-name__aUaD {\n  font-size: 18px;\n}\n",""]),t.locals={"re-title":"re-title_nYXhF",reTitle:"re-title_nYXhF","re-box":"re-box_2CJ9w",reBox:"re-box_2CJ9w","is-group":"is-group_POaO_",isGroup:"is-group_POaO_","singer-song-table":"singer-song-table_27gRR",singerSongTable:"singer-song-table_27gRR","other-version":"other-version_P0N9L",otherVersion:"other-version_P0N9L","song-name":"song-name__aUaD",songName:"song-name__aUaD"},n.exports=t},3076:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(2016),o=e.n(i),l=e(2017),s=e.n(l),c=e(797),d=e.n(c);for(var u in c)"default"!==u&&function(n){e.d(t,n,function(){return c[n]})}(u);var p=[o.a];t["default"]=r()(d.a,s.a,p)},3077:function(n,t,e){(t=e(3)(!1)).push([n.i,".table-container_39X6k .table-thead_2yUCX {\n  color: #9195A3;\n  padding-bottom: 3px;\n  border-bottom: 1px solid #f2f2f2;\n  display: block;\n}\n.table-container_39X6k .table-thead_2yUCX .th-num_390pb {\n  width: 378px;\n  text-align: left;\n}\n.table-container_39X6k .table-thead_2yUCX .th-songer_2aTVS {\n  width: 136px;\n  text-align: left;\n}\n.table-container_39X6k .table-thead_2yUCX .th-source_3SiF1 {\n  padding-left: 8px;\n  padding-right: 6px;\n  white-space: nowrap;\n}\n.table-container_39X6k .table-tbody_3exJd {\n  display: block;\n}\n.table-container_39X6k .table-tbody_3exJd tr {\n  height: 30px;\n  display: flex;\n  align-items: center;\n}\n.table-container_39X6k .table-tbody_3exJd tr:first-child {\n  margin-top: 3px;\n}\n.table-container_39X6k .table-tbody_3exJd tr:last-child {\n  margin-bottom: 3px;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor {\n  color: #9599a7;\n  width: 380px;\n  display: flex;\n  align-items: center;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .num_38a6c {\n  margin-right: 27px;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .icon-common_232F6 {\n  height: 16px;\n  width: 16px;\n  flex: 0 0 auto;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .icon-common_232F6:hover {\n  cursor: pointer;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .mv-label_32azY {\n  padding: 0 4px;\n  border-radius: 4px;\n  flex-shrink: 0;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .mv-label_32azY:hover {\n  cursor: pointer;\n}\n.table-container_39X6k .table-tbody_3exJd .td-num_evVor .song-label_QDWG7 {\n  flex-shrink: 0;\n  display: flex;\n}\n.td-song-name_2bIaE {\n  width: 135px;\n}\n.icon-box_3kKvp {\n  height: inherit;\n  display: flex;\n  align-items: center;\n}\n.icon-box_3kKvp .icon-common_232F6 {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.icon-box_3kKvp .icon-source_2WueA {\n  border-radius: 3.56px;\n  width: 16px;\n}\n.label-container_3g6aF {\n  display: flex;\n  overflow: hidden;\n}\n",""]),t.locals={"table-container":"table-container_39X6k",tableContainer:"table-container_39X6k","table-thead":"table-thead_2yUCX",tableThead:"table-thead_2yUCX","th-num":"th-num_390pb",thNum:"th-num_390pb","th-songer":"th-songer_2aTVS",thSonger:"th-songer_2aTVS","th-source":"th-source_3SiF1",thSource:"th-source_3SiF1","table-tbody":"table-tbody_3exJd",tableTbody:"table-tbody_3exJd","td-num":"td-num_evVor",tdNum:"td-num_evVor",num:"num_38a6c","icon-common":"icon-common_232F6",iconCommon:"icon-common_232F6","mv-label":"mv-label_32azY",mvLabel:"mv-label_32azY","song-label":"song-label_QDWG7",songLabel:"song-label_QDWG7","td-song-name":"td-song-name_2bIaE",tdSongName:"td-song-name_2bIaE","icon-box":"icon-box_3kKvp",iconBox:"icon-box_3kKvp","icon-source":"icon-source_2WueA",iconSource:"icon-source_2WueA","label-container":"label-container_3g6aF",labelContainer:"label-container_3g6aF"},n.exports=t},308:function(n,t){n.exports=' <div class="{{ $style.labelWrap}}"> <span class="c-text {{ textClass }} {{ $style.label }} {{ hasBorder ? $style.labelBorder : \'\' }} {{ smallRadius ? \'\' : $style.normalRadius }}" name="label">{{ text }}</span> </div> '},319:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(307),o=e.n(i),l=e(308),s=e.n(l),c=e(126),d=e.n(c);for(var u in c)"default"!==u&&function(n){e.d(t,n,function(){return c[n]})}(u);var p=[o.a];t["default"]=r()(d.a,s.a,p)},4:function(n,t,e){"use strict";function s(n,t){for(var e=[],a={},r=0;r<t.length;r++){var i=t[r],o=i[0],l={id:n+":"+r,css:i[1],media:i[2],sourceMap:i[3]};a[o]?a[o].parts.push(l):e.push(a[o]={id:o,parts:[l]})}return e}e.r(t),e.d(t,"default",function(){return h});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c={},r=a&&(document.head||document.getElementsByTagName("head")[0]),i=null,o=0,d=!1,l=function(){},u=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(o,n,t,e){d=!!e.runAsProduction||t,u=e||{};var l=s(o,n);return g(l),function(n){for(var t=[],e=0;e<l.length;e++){var a=l[e];(r=c[a.id]).refs--,t.push(r)}n?g(l=s(o,n)):l=[];for(var r,e=0;e<t.length;e++){if(0===(r=t[e]).refs){for(var i=0;i<r.parts.length;i++)r.parts[i]();delete c[r.id]}}}}function g(n){for(var t=0;t<n.length;t++){var e=n[t],a=c[e.id];if(a){a.refs++;for(var r=0;r<a.parts.length;r++)a.parts[r](e.parts[r]);for(;r<e.parts.length;r++)a.parts.push(_(e.parts[r]));a.parts.length>e.parts.length&&(a.parts.length=e.parts.length)}else{for(var i=[],r=0;r<e.parts.length;r++)i.push(_(e.parts[r]));c[e.id]={id:e.id,refs:1,parts:i}}}}function b(){var n=document.createElement("style"),t=u.attributes||{};for(var e in n.type="text/css",t)t.hasOwnProperty(e)&&n.setAttribute(e,t[e]);return r.appendChild(n),n}function _(t){var n,e,a,r=document.querySelector("style["+p+'~="'+t.id+'"]');if(r){if(d)return l;r.parentNode.removeChild(r)}return a=f?(n=o++,r=i=i||b(),e=x.bind(null,r,n,!1),x.bind(null,r,n,!0)):(r=b(),e=function(n,t){var e=t.css,a=t.media,r=t.sourceMap;a&&n.setAttribute("media",a);u.ssrId&&n.setAttribute(p,t.id);r&&(e+="\n/*# sourceURL="+r.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,r),function(){r.parentNode.removeChild(r)}),e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else a()}}var m,y=(m=[],function(n,t){return m[n]=t,m.filter(Boolean).join("\n")});function x(n,t,e,a){var r,i,o=e?"":a.css;n.styleSheet?n.styleSheet.cssText=y(t,o):(r=document.createTextNode(o),(i=n.childNodes)[t]&&n.removeChild(i[t]),i.length?n.insertBefore(r,i[t]):n.appendChild(r))}},5:function(n,t){n.exports=r},6:function(n,t){n.exports=i},796:function(n,t,e){"use strict";t.__esModule=!0;var a,r=e(2),i=e(1),o=r.__importDefault(e(3076)),l=r.__importDefault(e(893)),s=e(6),c=e(5),d=(a=i.Component,r.__extends(u,a),u.prototype.initData=function(){return{title:"",site:[],toolsData:"",isSong:!1,data:{},isGroup:!1,multi:[]}},u.prototype.dataClick=function(n){return n.sitePinyin?JSON.stringify({sitePinyin:n.sitePinyin}):""},u.components={"song-table":o["default"],"song-head":l["default"]},u.computed={song:function(){return this.data.get("site")[0]},multiLen:function(){return this.data.get("multi").length}},r.__decorate([s.injectable,r.__metadata("design:paramtypes",[c.SanOption])],u));function u(n){var t=a.call(this,n)||this;return t.trimWhitespace="all",t}t["default"]=d},797:function(n,t,e){"use strict";t.__esModule=!0;var a,r=e(2),i=e(1),o=r.__importDefault(e(319)),l=(a=i.Component,r.__extends(s,a),s.prototype.initData=function(){return{songList:[]}},s.prototype.singersLen=function(n){return n.length},s.prototype.linkurl=function(n){n&&-1===n.indexOf("http")?window.open("http://"+n,"_blank"):n&&window.open(n,"_blank")},s.prototype.dataClick=function(n){return n.sitePinyin?JSON.stringify({sitePinyin:n.sitePinyin}):""},s.components={"c-label":o["default"]},s);function s(){var n=null!==a&&a.apply(this,arguments)||this;return n.trimWhitespace="all",n}t["default"]=l},893:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),i=e(305),o=e.n(i),l=e(306),s=e.n(l),c=e(125),d=e.n(c);for(var u in c)"default"!==u&&function(n){e.d(t,n,function(){return c[n]})}(u);var p=[o.a];t["default"]=r()(d.a,s.a,p)},894:function(n,t,e){(t=e(3)(!1)).push([n.i,".singer-wrap_3VbAp {\n  max-width: 300px;\n  height: 20px;\n  line-height: 20px;\n}\n.singer-wrap_3VbAp.has-original_BXc1w {\n  max-width: 258px;\n}\n.head-container_1ASW4 {\n  display: inline-block;\n  border-bottom: 1px solid #f4f4f4;\n  padding-bottom: 12px;\n  margin-right: 9px;\n}\n.head-container_1ASW4 .head-poster_3VQz3 {\n  height: 80px;\n  width: 80px;\n  border-radius: 12px;\n  float: left;\n}\n.head-container_1ASW4 .head-right_2OyG6 {\n  max-width: 464px;\n  float: left;\n}\n.head-container_1ASW4 .head-right_2OyG6 .song-name_fpAiu {\n  display: flex;\n  align-items: center;\n  margin-top: -4px;\n  margin-bottom: 4px;\n}\n.head-container_1ASW4 .head-right_2OyG6 .song-name_fpAiu .mv-label_3lXNg {\n  padding: 0 4px;\n  border-radius: 4px;\n}\n.head-container_1ASW4 .head-right_2OyG6 .song-name_fpAiu .mv-label_3lXNg:hover {\n  cursor: pointer;\n}\n.head-container_1ASW4 .head-right_2OyG6 .right-row_1kMnT {\n  height: 20px;\n  line-height: 20px;\n  display: flex;\n  align-items: center;\n}\n.head-container_1ASW4 .head-right_2OyG6 .right-row_1kMnT .label-wrap_3jmjt {\n  float: left;\n}\n.head-container_1ASW4 .head-right_2OyG6 .right-row_1kMnT .head-label_UgOYM {\n  display: flex;\n  align-items: center;\n  border-radius: 4px;\n  font-size: 13px;\n  color: #fff;\n}\n.head-container_1ASW4 .head-right_2OyG6 .head-singer_ibQWz {\n  max-width: 78px;\n}\n.head-container_1ASW4 .head-right_2OyG6 .head-btn_P_Mbl {\n  padding: 6px 14px;\n  font-size: 13px;\n  border-radius: 6px;\n  border: none;\n  cursor: pointer;\n}\n.head-container_1ASW4 .head-right_2OyG6 .head-btn_P_Mbl:active,\n.head-container_1ASW4 .head-right_2OyG6 .head-btn_P_Mbl:visited {\n  border: none;\n  outline: none;\n}\n.head-container_1ASW4 .head-right_2OyG6 .play-btn_2PbE2 {\n  background: #4E6EF2;\n  color: #fff;\n}\n.head-container_1ASW4 .head-right_2OyG6 .play-btn_2PbE2:hover {\n  background: #315EFB;\n}\n.head-container_1ASW4 .head-right_2OyG6 .find-lrc-btn_ayH7_ {\n  background: #F5F5F6;\n  color: #333;\n}\n.head-container_1ASW4 .head-right_2OyG6 .find-lrc-btn_ayH7_:hover {\n  background: #F0F0F0;\n}\n",""]),t.locals={"singer-wrap":"singer-wrap_3VbAp",singerWrap:"singer-wrap_3VbAp","has-original":"has-original_BXc1w",hasOriginal:"has-original_BXc1w","head-container":"head-container_1ASW4",headContainer:"head-container_1ASW4","head-poster":"head-poster_3VQz3",headPoster:"head-poster_3VQz3","head-right":"head-right_2OyG6",headRight:"head-right_2OyG6","song-name":"song-name_fpAiu",songName:"song-name_fpAiu","mv-label":"mv-label_3lXNg",mvLabel:"mv-label_3lXNg","right-row":"right-row_1kMnT",rightRow:"right-row_1kMnT","label-wrap":"label-wrap_3jmjt",labelWrap:"label-wrap_3jmjt","head-label":"head-label_UgOYM",headLabel:"head-label_UgOYM","head-singer":"head-singer_ibQWz",headSinger:"head-singer_ibQWz","head-btn":"head-btn_P_Mbl",headBtn:"head-btn_P_Mbl","play-btn":"play-btn_2PbE2",playBtn:"play-btn_2PbE2","find-lrc-btn":"find-lrc-btn_ayH7_",findLrcBtn:"find-lrc-btn_ayH7_"},n.exports=t},895:function(n,t,e){(t=e(3)(!1)).push([n.i,'.label-wrap_tbGiF {\n  display: inline-block;\n}\n.label-wrap_tbGiF .normal-radius_1tQCo[name="label"] {\n  height: 14px;\n  line-height: 14px;\n  margin-bottom: 1px;\n  border-radius: 4px;\n  padding: 0 3px;\n}\n',""]),t.locals={"label-wrap":"label-wrap_tbGiF",labelWrap:"label-wrap_tbGiF","normal-radius":"normal-radius_1tQCo",normalRadius:"normal-radius_1tQCo"},n.exports=t}},o.c=s,o.d=function(n,t,e){o.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(t,n){if(1&n&&(t=o(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)o.d(e,a,function(n){return t[n]}.bind(null,a));return e},o.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return o.d(t,"a",t),t},o.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},o.p="https://pss.bdstatic.com/r/www/cache",o(o.s=3074);function o(n){if(s[n])return s[n].exports;var t=s[n]={i:n,l:!1,exports:{}};return l[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}var l,s});