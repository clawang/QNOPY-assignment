(this["webpackJsonpqnopy-assignment"]=this["webpackJsonpqnopy-assignment"]||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/pin.a07280f4.png"},12:function(e,t,a){e.exports=a.p+"static/media/photos.39e88c51.csv"},13:function(e,t,a){e.exports=a(39)},18:function(e,t,a){},20:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),s=(a(18),a(2)),c=a.n(s),i=a(6),u=a(4),p=(a(20),a(7)),d=a(10),m=a.n(d);var f=Object(p.GoogleApiWrapper)({apiKey:"".concat("AIzaSyDH4ZdWsClT3rloTadqeU4_HsmbcLbBn5Y")})((function(e){var t=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#efefef"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#ffbd83"},{saturation:"-16"},{lightness:"48"}]},{featureType:"road.arterial",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"on"},{lightness:"31"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"all",stylers:[{visibility:"on"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]},{featureType:"water",elementType:"geometry.fill",stylers:[{color:"#8ad1c5"},{saturation:"-33"},{lightness:"55"}]}];return r.a.createElement("div",{className:"map-wrapper"},r.a.createElement("div",{className:"map-right"},r.a.createElement("h4",null,"Capture Coordinates"),r.a.createElement("p",null,"Latitude: ",e.coords.latitude),r.a.createElement("p",null,"Longitude: ",e.coords.longitude)),r.a.createElement(p.Map,{google:e.google,zoom:15,style:{width:"400px",height:"400px"},onClick:function(t,a,n){var r=n.latLng,l=r.lat(),o=r.lng();e.setCoords({latitude:l,longitude:o})},initialCenter:{lat:e.coords.latitude,lng:e.coords.longitude},onReady:function(e,a){return function(e,a){a.setOptions({styles:t})}(0,a)}},r.a.createElement(p.Marker,{position:{lat:e.coords.latitude,lng:e.coords.longitude},draggable:!0,onDragend:function(t,a,n){var r=n.latLng,l=r.lat(),o=r.lng();e.setCoords({latitude:l,longitude:o})},icon:{url:m.a,scaledSize:new google.maps.Size(24,33)}}),e.photos.map((function(e){return r.a.createElement(p.Marker,{position:{lat:e.latitude,lng:e.longitude},icon:{url:e.url,scaledSize:new google.maps.Size(20,20)}})}))),r.a.createElement("button",{onClick:e.btnClick},"Capture"),r.a.createElement("button",{onClick:e.btnClick,className:"cancel"},"Cancel"))}));var h=function(e){var t=Object(n.useState)({map:!1}),a=Object(u.a)(t,2),l=a[0],o=a[1],s=function(e){var t=l.map;o({map:!t})};return r.a.createElement("div",{className:"search-overlay"},r.a.createElement("div",{className:"search"},r.a.createElement("p",{id:"close",onClick:e.close},"X"),r.a.createElement("h2",null,"Advanced Search"),l.map?r.a.createElement(f,{coords:e.coords,setCoords:e.setCoords,btnClick:s,photos:e.photos}):r.a.createElement("div",null,r.a.createElement("p",null,"Add Location to Search"),r.a.createElement("input",{readOnly:!0,type:"text",value:e.coords.latitude+", "+e.coords.longitude}),r.a.createElement("button",{onClick:s},"Get"),r.a.createElement("br",null),r.a.createElement("button",{className:"submit",onClick:e.sortPhotos},"Search"))))};var y=function(e){return r.a.createElement("div",{className:"pictures"},r.a.createElement("h2",null,"All Pictures"),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("a",{href:"#search",onClick:e.openSearch},"Advanced Search")),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Thumbnail"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Created"),r.a.createElement("th",null,"Notes"))),r.a.createElement("tbody",null,e.photos.length>0?e.photos.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,r.a.createElement("img",{src:e.url,alt:e.title})),r.a.createElement("td",null,e.title),r.a.createElement("td",null,e.created," ",r.a.createElement("br",null)," By: ",e.creator),r.a.createElement("td",null,e.notes))})):r.a.createElement("p",null,"No photos within 100 feet."))))},g=a(11),v=a.n(g),b=a(12),E=a.n(b);function T(){return(T=Object(i.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=v.a,e.next=3,w();case 3:return e.t1=e.sent,t=e.t0.parse.call(e.t0,e.t1),a=k(t.data),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(){return C.apply(this,arguments)}function C(){return(C=Object(i.a)(c.a.mark((function e(){var t,a,n,r,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(E.a);case 2:return t=e.sent,a=t.body.getReader(),e.next=6,a.read();case 6:return n=e.sent,r=new TextDecoder("utf-8"),e.next=10,r.decode(n.value);case 10:return l=e.sent,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e){for(var t=[],a=e[0],n=1;n<e.length;n++){for(var r={},l=e[n],o=0;o<a.length;o++)r[a[o]]=l[o];t.push(r)}return t}var x=function(){return T.apply(this,arguments)};var S=function(){var e=Object(n.useState)({latitude:40.731143,longitude:-73.997849}),t=Object(u.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)({photos:[],filteredPhotos:[]}),s=Object(u.a)(o,2),p=s[0],d=s[1],m=Object(n.useState)({search:!1}),f=Object(u.a)(m,2),g=f[0],v=f[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,d({photos:t,filteredPhotos:t});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[d]);var b=function(e,t){return E(e.latitude,e.longitude)-E(t.latitude,t.longitude)},E=function(e,t){var n=a.latitude,r=a.longitude,l=Math.abs(n-e),o=Math.abs(r-t);return 364e3*Math.sqrt(l*l+o*o)};return r.a.createElement("div",{className:"App"},g.search?r.a.createElement(h,{coords:a,setCoords:l,sortPhotos:function(){v({search:!1});var e=p.photos;e.sort(b);var t=e.filter((function(e){var t=E(e.latitude,e.longitude);return console.log(t),t<100}));console.log(t),d({photos:e,filteredPhotos:t})},photos:p.photos,close:function(){v({search:!1})}}):r.a.createElement("div",null),r.a.createElement(y,{coords:a,setCoords:l,photos:p.filteredPhotos,openSearch:function(e){v({search:!0})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.ea25c543.chunk.js.map