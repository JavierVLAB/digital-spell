(function(){"use strict";var e={5892:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a,r=n(144),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"white",flat:""}}),n("v-main",{staticClass:"grey lighten-3"},[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("enter-pad",{on:{image:function(t){e.image=t}}})],1),n("v-col",{attrs:{cols:"12",sm:"8"}},[n("v-sheet",{attrs:{rounded:"lg","min-height":"268"}},[n("sketch-pad",{attrs:{image:e.image}})],1)],1)],1)],1)],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-img",{attrs:{height:"250",src:e.myImage}}),e._v(" "+e._s(e.image)+" "),n("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:e.changeSource}},[e._v(" Reserve ")])],1)},c=[],l={name:"p5-example",props:{image:{type:String,default:""}},components:{},data:function(){return{}},computed:{myImage:function(){var e="";return e+="Esta imagen es limpiada de energía caotica, dañida y cualquier mala intención ",e+="pero mantiene cualquier energía sana, limpia y amorosa de los lugares, seres y obejtos presentes ",e+="con OM AH HUNG limpiamos esta imagen ",e+="Este imagen es activada magicamente para emanar buena energía ",e+="reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor ",e+="OM MANI PADME HUNG ",e+="Que esta imagen venefice a todos los seres ",console.log(e),this.image}},methods:{preload:function(e){a=e.createImage("https://cdn.vuetifyjs.com/images/cards/cooking.png"),a.resize(400,300)},setup:function(e){e.createCanvas(400,300),e.background(200),e.image(a,0,0)},draw:function(e){e.noLoop()},showImages:function(e,t,n){e.image(t,50,150,400,300,0,0,t.width,t.height),e.image(n,550,150,400,300,0,0,n.width,n.height)},ppp:function(e){var t="";return t+="Este pixel es limpiado de energía caotica, dañida y de la mala intención",t+="pero mantiene cualquier energía sana de los lugares, seres y obejtos presentes",t+="OM AH HUNG, para limpiar",t+="este pixel es activado magicamente para emanar buena energia",t+="reforzamos la buena energía, las buenas intenciones, los buenos deseos, el amor",t+="OM MANI PADME HUNG",t+="para el beneficio de todos los seres",console.log(t),e},changeSource:function(){}}},u=l,p=n(1001),g=n(3453),m=n.n(g),d=n(680),f=n(7047),v=(0,p.Z)(u,s,c,!1,null,null,null),h=v.exports;m()(v,{VBtn:d.Z,VImg:f.Z});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto my-12",attrs:{loading:e.loading,"max-width":"374"}},[n("template",{slot:"progress"},[n("v-progress-linear",{attrs:{color:"deep-purple",height:"10",indeterminate:""}})],1),n("v-img",{attrs:{height:"250",src:e.source}}),n("v-card-title",[e._v("Cafe Badilico")]),n("v-card-text",[n("v-row",{staticClass:"mx-0",attrs:{align:"center"}},[n("v-rating",{attrs:{value:4.5,color:"amber",dense:"","half-increments":"",readonly:"",size:"14"}}),n("div",{staticClass:"grey--text ms-4"},[e._v(" 4.5 (413) ")])],1),n("div",{staticClass:"my-4 text-subtitle-1"},[e._v(" $ • Italian, Cafe ")]),n("div",[n("v-file-input",{attrs:{accept:"image/png, image/jpeg, image/bmp","prepend-icon":"mdi-camera",label:"Imagen"},on:{change:e.test}}),n("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(t){return e.$emit("image","https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg")}}},[e._v(" Reserve ")])],1),n("div",[e._v("Small plates, salads & sandwiches - an intimate setting with 12 indoor seats plus patio seating.")])],1),n("v-card-actions",[n("v-btn",{attrs:{color:"deep-purple lighten-2",text:""},on:{click:function(t){return e.$emit("image","https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg")}}},[e._v(" Reserve ")])],1)],2)},y=[],Z=(n(1539),n(8783),n(3948),n(285),n(1637),{data:function(){return{loading:!1,selection:1,source:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}},computed:{},methods:{reserve:function(){var e=this;this.loading=!0,setTimeout((function(){return e.loading=!1}),2e3)},changeSource:function(){this.source="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"},sendImage:function(){this.$emit("image",this.source)},test:function(e){this.source=URL.createObjectURL(e),console.log(this.source)}}}),_=Z,x=n(3237),w=n(7118),V=n(2606),j=n(3142),O=n(9743),C=n(2877),k=(0,p.Z)(_,b,y,!1,null,null,null),I=k.exports;m()(k,{VBtn:d.Z,VCard:x.Z,VCardActions:w.h7,VCardText:w.ZB,VCardTitle:w.EB,VFileInput:V.Z,VImg:f.Z,VProgressLinear:j.Z,VRating:O.Z,VRow:C.Z});var M={name:"App",components:{SketchPad:h,EnterPad:I},data:function(){return{image:"https://cdn.vuetifyjs.com/images/cards/cooking.png"}}},S=M,E=n(7524),A=n(3583),P=n(2102),R=n(247),T=n(7877),$=n(5477),B=(0,p.Z)(S,i,o,!1,null,null,null),H=B.exports;m()(B,{VApp:E.Z,VAppBar:A.Z,VCol:P.Z,VContainer:R.Z,VMain:T.Z,VRow:C.Z,VSheet:$.Z});var N=n(858),U=n(6379);r.Z.use(N.Z);var z=new N.Z({lang:{locales:{es:U.Z},current:"es"}});r.Z.config.productionTip=!1,new r.Z({vuetify:z,render:function(e){return e(H)}}).$mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,i){if(!a){var o=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||o>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,i<o&&(o=i));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,i,o=a[0],s=a[1],c=a[2],l=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(a);l<o.length;l++)i=o[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkdigital_spell"]=self["webpackChunkdigital_spell"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(5892)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.bb9763ff.js.map