(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7228:function(e){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}},3646:function(e,r,t){var n=t(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},1506:function(e){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},4575:function(e){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},3913:function(e){function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},9713:function(e){e.exports=function(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}},9754:function(e){function r(t){return e.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(t)}e.exports=r},2205:function(e,r,t){var n=t(9489);e.exports=function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&n(e,r)}},6860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},8585:function(e,r,t){var n=t(8),o=t(1506);e.exports=function(e,r){return!r||"object"!==n(r)&&"function"!==typeof r?o(e):r}},9489:function(e){function r(t,n){return e.exports=r=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},r(t,n)}e.exports=r},319:function(e,r,t){var n=t(3646),o=t(6860),a=t(379),s=t(8206);e.exports=function(e){return n(e)||o(e)||a(e)||s()}},8:function(e){function r(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=r=function(e){return typeof e}:e.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(t)}e.exports=r},379:function(e,r,t){var n=t(7228);e.exports=function(e,r){if(e){if("string"===typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?n(e,r):void 0}}},4184:function(e,r){var t;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)&&t.length){var s=o.apply(null,t);s&&e.push(s)}else if("object"===a)for(var i in t)n.call(t,i)&&t[i]&&e.push(i)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()},6086:function(e){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},3367:function(e,r,t){"use strict";var n;r.__esModule=!0,r.AmpStateContext=void 0;var o=((n=t(7294))&&n.__esModule?n:{default:n}).default.createContext({});r.AmpStateContext=o},7845:function(e,r,t){"use strict";r.__esModule=!0,r.isInAmpMode=s,r.useAmp=function(){return s(o.default.useContext(a.AmpStateContext))};var n,o=(n=t(7294))&&n.__esModule?n:{default:n},a=t(3367);function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ampFirst,t=void 0!==r&&r,n=e.hybrid,o=void 0!==n&&n,a=e.hasQuery,s=void 0!==a&&a;return t||o&&s}},4287:function(e,r,t){"use strict";var n;r.__esModule=!0,r.HeadManagerContext=void 0;var o=((n=t(7294))&&n.__esModule?n:{default:n}).default.createContext({});r.HeadManagerContext=o},7947:function(e,r,t){"use strict";var n=t(9713);function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}r.__esModule=!0,r.defaultHead=d,r.default=void 0;var a,s=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=f();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=n?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(t,o,a):t[o]=e[o]}t.default=e,r&&r.set(e,t);return t}(t(7294)),i=(a=t(617))&&a.__esModule?a:{default:a},l=t(3367),c=t(4287),u=t(7845);function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[s.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(s.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function p(e,r){return"string"===typeof r||"number"===typeof r?e:r.type===s.default.Fragment?e.concat(s.default.Children.toArray(r.props.children).reduce((function(e,r){return"string"===typeof r||"number"===typeof r?e:e.concat(r)}),[])):e.concat(r)}var h=["name","httpEquiv","charSet","itemProp"];function m(e,r){return e.reduce((function(e,r){var t=s.default.Children.toArray(r.props.children);return e.concat(t)}),[]).reduce(p,[]).reverse().concat(d(r.inAmpMode)).filter(function(){var e=new Set,r=new Set,t=new Set,n={};return function(o){var a=!0,s=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){s=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":r.has(o.type)?a=!1:r.add(o.type);break;case"meta":for(var l=0,c=h.length;l<c;l++){var u=h[l];if(o.props.hasOwnProperty(u))if("charSet"===u)t.has(u)?a=!1:t.add(u);else{var f=o.props[u],d=n[u]||new Set;"name"===u&&s||!d.has(f)?(d.add(f),n[u]=d):a=!1}}}return a}}()).reverse().map((function(e,t){var a=e.key||t;if(!r.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(r){return e.props.href.startsWith(r)}))){var i=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,s.default.cloneElement(e,i)}return s.default.cloneElement(e,{key:a})}))}function v(e){var r=e.children,t=(0,s.useContext)(l.AmpStateContext),n=(0,s.useContext)(c.HeadManagerContext);return s.default.createElement(i.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,u.isInAmpMode)(t)},r)}v.rewind=function(){};var y=v;r.default=y},617:function(e,r,t){"use strict";var n=t(319),o=t(4575),a=t(3913),s=(t(1506),t(2205)),i=t(8585),l=t(9754);function c(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=l(e);if(r){var o=l(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return i(this,t)}}r.__esModule=!0,r.default=void 0;var u=t(7294),f=function(e){s(t,e);var r=c(t);function t(e){var a;return o(this,t),(a=r.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(n(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(t,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),t}(u.Component);r.default=f},7752:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return oe}});var n=t(5893),o=t(9008);function a(){return(a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}var i=t(4184),l=t.n(i),c=t(7294),u=c.createContext({});u.Consumer,u.Provider;function f(e,r){var t=(0,c.useContext)(u);return e||t[r]||r}var d=c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.fluid,o=e.as,i=void 0===o?"div":o,u=e.className,d=s(e,["bsPrefix","fluid","as","className"]),p=f(t,"container"),h="string"===typeof n?"-"+n:"-fluid";return c.createElement(i,a({ref:r},d,{className:l()(u,n?""+p+h:p)}))}));d.displayName="Container",d.defaultProps={fluid:!1};var p=d,h=["xl","lg","md","sm","xs"],m=c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.noGutters,i=e.as,u=void 0===i?"div":i,d=s(e,["bsPrefix","className","noGutters","as"]),p=f(t,"row"),m=p+"-cols",v=[];return h.forEach((function(e){var r,t=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(r=null!=t&&"object"===typeof t?t.cols:t)&&v.push(""+m+n+"-"+r)})),c.createElement(u,a({ref:r},d,{className:l().apply(void 0,[n,p,o&&"no-gutters"].concat(v))}))}));m.displayName="Row",m.defaultProps={noGutters:!1};var v=m,y=["xl","lg","md","sm","xs"],x=c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.as,i=void 0===o?"div":o,u=s(e,["bsPrefix","className","as"]),d=f(t,"col"),p=[],h=[];return y.forEach((function(e){var r,t,n,o=u[e];if(delete u[e],"object"===typeof o&&null!=o){var a=o.span;r=void 0===a||a,t=o.offset,n=o.order}else r=o;var s="xs"!==e?"-"+e:"";r&&p.push(!0===r?""+d+s:""+d+s+"-"+r),null!=n&&h.push("order"+s+"-"+n),null!=t&&h.push("offset"+s+"-"+t)})),p.length||p.push(d),c.createElement(i,a({},u,{ref:r,className:l().apply(void 0,[n].concat(p,h))}))}));x.displayName="Col";var g=x,b=/-(.)/g;var j=function(e){return e[0].toUpperCase()+(r=e,r.replace(b,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function w(e,r){var t=void 0===r?{}:r,n=t.displayName,o=void 0===n?j(e):n,i=t.Component,u=t.defaultProps,d=c.forwardRef((function(r,t){var n=r.className,o=r.bsPrefix,u=r.as,d=void 0===u?i||"div":u,p=s(r,["className","bsPrefix","as"]),h=f(o,e);return c.createElement(d,a({ref:t,className:l()(n,h)},p))}));return d.defaultProps=u,d.displayName=o,d}var O=function(e){return c.forwardRef((function(r,t){return c.createElement("div",a({},r,{ref:t,className:l()(r.className,e)}))}))},P=c.createContext(null);P.displayName="CardContext";var C=P,N=c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.variant,i=e.as,u=void 0===i?"img":i,d=s(e,["bsPrefix","className","variant","as"]),p=f(t,"card-img");return c.createElement(u,a({ref:r,className:l()(o?p+"-"+o:p,n)},d))}));N.displayName="CardImg",N.defaultProps={variant:null};var _=N,k=O("h5"),M=O("h6"),E=w("card-body"),S=w("card-title",{Component:k}),T=w("card-subtitle",{Component:M}),A=w("card-link",{Component:"a"}),I=w("card-text",{Component:"p"}),R=w("card-header"),z=w("card-footer"),H=w("card-img-overlay"),D=c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.bg,i=e.text,u=e.border,d=e.body,p=e.children,h=e.as,m=void 0===h?"div":h,v=s(e,["bsPrefix","className","bg","text","border","body","children","as"]),y=f(t,"card"),x=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:y+"-header"}}),[y]);return c.createElement(C.Provider,{value:x},c.createElement(m,a({ref:r},v,{className:l()(n,y,o&&"bg-"+o,i&&"text-"+i,u&&"border-"+u)}),d?c.createElement(E,null,p):p))}));D.displayName="Card",D.defaultProps={body:!1},D.Img=_,D.Title=S,D.Subtitle=T,D.Body=E,D.Link=A,D.Text=I,D.Header=R,D.Footer=z,D.ImgOverlay=H;var B=D,V=t(5697),G=t.n(V),L=(G().string,G().bool,G().bool,G().bool,G().bool,c.forwardRef((function(e,r){var t=e.bsPrefix,n=e.className,o=e.fluid,i=e.rounded,u=e.roundedCircle,d=e.thumbnail,p=s(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);t=f(t,"img");var h=l()(o&&t+"-fluid",i&&"rounded",u&&"rounded-circle",d&&t+"-thumbnail");return c.createElement("img",a({ref:r},p,{className:l()(n,h)}))})));L.displayName="Image",L.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var U=L,W=c.forwardRef((function(e,r){var t,n=e.as,o=void 0===n?"div":n,i=e.className,u=e.fluid,d=e.bsPrefix,p=s(e,["as","className","fluid","bsPrefix"]),h=((t={})[d=f(d,"jumbotron")]=!0,t[d+"-fluid"]=u,t);return c.createElement(o,a({ref:r},p,{className:l()(i,h)}))}));W.defaultProps={fluid:!1},W.displayName="Jumbotron";var q=W;function F(){return(F=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function $(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var X=(0,c.forwardRef)((function(e,r){var t=e.color,n=e.size,o=$(e,["color","size"]);return c.createElement("svg",F({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},o),c.createElement("path",{fillRule:"evenodd",d:"M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"}),c.createElement("path",{fillRule:"evenodd",d:"M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"}))}));X.propTypes={color:G().string,size:G().oneOfType([G().string,G().number])},X.defaultProps={color:"currentColor",size:"1em"};var J=X;function Q(){return(Q=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function K(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var Y=(0,c.forwardRef)((function(e,r){var t=e.color,n=e.size,o=K(e,["color","size"]);return c.createElement("svg",Q({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},o),c.createElement("path",{d:"M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"}))}));Y.propTypes={color:G().string,size:G().oneOfType([G().string,G().number])},Y.defaultProps={color:"currentColor",size:"1em"};var Z=Y;function ee(){return(ee=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function re(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var te=(0,c.forwardRef)((function(e,r){var t=e.color,n=e.size,o=re(e,["color","size"]);return c.createElement("svg",ee({ref:r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:n,height:n,fill:t},o),c.createElement("path",{d:"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"}))}));te.propTypes={color:G().string,size:G().oneOfType([G().string,G().number])},te.defaultProps={color:"currentColor",size:"1em"};var ne=te;function oe(){return(0,n.jsxs)(p,{className:"no-padding",fluid:!0,children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"Three Rock Counselling:  Counselling & Psychotherapy"})}),(0,n.jsx)(q,{className:"hero",fluid:!0,children:(0,n.jsxs)(p,{children:[(0,n.jsx)("h2",{children:"Three Rock Counselling"}),(0,n.jsx)("h6",{children:"Counselling & Psychotherapy"})]})}),(0,n.jsxs)(p,{fluid:!0,children:[(0,n.jsx)("p",{children:"Counselling, Psychotherapy and CBT services are available to you face to face or from the comfort of your own home."}),(0,n.jsx)("p",{children:"The Three Rock Mountain, Binn Tri Charraig, is believed to be an ancient burial site. Three was considered a sacred number by the Celts, representing harmony, wisdom and understanding. In counselling  empathy, unconditional positive regard and congruence are the three pillars upon which the counselling relationship is built."}),(0,n.jsx)("p",{children:"Life brings many challenges and can awaken difficult feelings within you, such as anxiety, depression, stress or loss. All of these can leave you with a sense of feeling unable to manage or cope. They may also leave you feeling stuck or unsure of the direction you want to move within your life. It can be hard to deal with these emotions and experiences alone. Sometimes it can be too difficult to talk to our family or friends. Attending counselling can help you understand and explore those unpleasant feelings, uncertainties and experiences. As you work through your issues you can begin to get a greater understanding and this can help you grow and move forward."})]}),(0,n.jsxs)(p,{fluid:!0,children:[(0,n.jsxs)(v,{className:"justify-content-md-between",children:[(0,n.jsx)(g,{className:"no-padding",md:!0,children:(0,n.jsx)(B,{className:"sml-card",children:(0,n.jsx)(U,{src:"/headshot.jpg",fluid:!0})})}),(0,n.jsx)(g,{className:"no-padding",md:!0,children:(0,n.jsx)(B,{className:"sml-card",children:(0,n.jsxs)(B.Body,{children:[(0,n.jsx)(B.Title,{children:"Welcome"}),(0,n.jsxs)(B.Text,{as:"div",children:[(0,n.jsx)("p",{children:"I am a professionally qualified Counsellor and Psychotherapist based in Dublin, with diplomas in general counselling, and postgraduate  qualifications in adolescent counselling and guidance counselling. I adhere to a strict code of ethics as outlined by the Irish Association of Counselling and Psychotherapy. (I.A.C.P.) and the Institute of Guidance Counsellors (IGC)."}),(0,n.jsx)("p",{children:"I provide counselling for"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Anxiety"}),(0,n.jsx)("li",{children:"Depression"}),(0,n.jsx)("li",{children:"Bereavement"}),(0,n.jsx)("li",{children:"Career Change and Direction"}),(0,n.jsx)("li",{children:"Stress"}),(0,n.jsx)("li",{children:"Anger"}),(0,n.jsx)("li",{children:"Addiction"}),(0,n.jsx)("li",{children:"Trauma"}),(0,n.jsx)("li",{children:"Loneliness"})]})]})]})})})]}),(0,n.jsx)(v,{className:"justify-content-md-between",children:(0,n.jsx)(g,{className:"no-padding",children:(0,n.jsx)(B,{className:"sml-card",children:(0,n.jsxs)(B.Body,{children:[(0,n.jsx)(B.Title,{children:"Background"}),(0,n.jsxs)(B.Text,{as:"div",children:[(0,n.jsx)("p",{children:"I have spent four years training in Person-Centred and Gestalt counselling and have completed training in CBT, Choice Theory and Mindfulness and teach these in an educational setting. I also have a special interest in the Polyvagal Theory. I work as a Counsellor and a Guidance Counsellor in a secondary school."}),(0,n.jsx)("p",{children:"I offer a Humanistic, Person Centred approach to Counselling and Psychotherapy, taking elements from different schools of therapy to best fit the clients needs. The counsellor\u2019s role is to get to know you, and for you to develop a greater understanding of yourself in a safe, confidential and supportive environment, working at your own pace. As a lot of our issues centre around relationships, I view the client therapist relationship and increased self-awareness as central to the healing process."})]})]})})})})]}),(0,n.jsx)("footer",{className:"cntr-footer",children:(0,n.jsxs)(p,{className:"container-footer",children:[(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1,children:(0,n.jsx)("h4",{children:"Contact:"})}),(0,n.jsx)(g,{xs:6})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1,children:(0,n.jsx)(J,{})}),(0,n.jsx)(g,{xs:6,children:"Rahan"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1}),(0,n.jsx)(g,{xs:6,children:"Ballybetagh Road"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1}),(0,n.jsx)(g,{xs:6,children:"Glencullen Village"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1}),(0,n.jsx)(g,{xs:6,children:"Dublin 18"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{}),(0,n.jsx)(g,{children:"\xa0"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1,children:(0,n.jsx)(Z,{})}),(0,n.jsx)(g,{xs:6,children:"threerockcounselling@gmail.com"})]}),(0,n.jsxs)(v,{className:"row-footer",children:[(0,n.jsx)(g,{xs:1,children:(0,n.jsx)(ne,{})}),(0,n.jsx)(g,{xs:6,children:(0,n.jsx)("a",{className:"white-color",href:"https://www.facebook.com/ThreeRockCounselling",children:"facebook.com/ThreeRockCounselling"})})]})]})})]})}},3685:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7752)}])},9008:function(e,r,t){e.exports=t(7947)}},function(e){e.O(0,[774],(function(){return r=3685,e(e.s=r);var r}));var r=e.O();_N_E=r}]);