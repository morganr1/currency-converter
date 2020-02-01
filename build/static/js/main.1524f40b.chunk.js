(this["webpackJsonpplan-currency-converter"]=this["webpackJsonpplan-currency-converter"]||[]).push([[0],{65:function(e,t,n){e.exports=n(78)},70:function(e,t,n){},72:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),l=(n(70),n(28)),u=n(24),i=n.n(u),s=n(33),m=n(17),d=n(48),h=n(49),p=n(53),b=function(){var e,t,n;return i.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,i.a.awrap(fetch("https://api.exchangeratesapi.io/latest"));case 3:return e=a.sent,a.next=6,i.a.awrap(e.json());case 6:return t=a.sent,n=t.rates,a.abrupt("return",n);case 11:a.prev=11,a.t0=a.catch(0),console.log("An error occurred trying to fetch data from the rates API",a.t0);case 14:case"end":return a.stop()}}),null,null,[[0,11]])},f=n(106),v=n(102),y=n(38),C=n.n(y);n(72);C.a.base="EUR";var g=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={currencies:[],result:null,fromCurrency:"EUR",toCurrency:"GBP",amount:1},n.componentDidMount=function(){var e,t,a;return i.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return e=["EUR"],r.next=3,i.a.awrap(b());case 3:for(a in t=r.sent,C.a.rates=t,t)e.push(a);e.sort(),n.setState({currencies:e});case 8:case"end":return r.stop()}}))},n.handleConversion=function(){return n.setState({result:C()(n.state.amount).from(n.state.fromCurrency).to(n.state.toCurrency)})},n.handleCurrencySelect=function(e){var t=e.target,a=t.value,r=t.name;"From"===r&&n.setState({fromCurrency:a}),"To"===r&&n.setState({toCurrency:a})},n.resetForm=function(e){n.setState({amount:e,result:1}),n.handleConversion()},n.setAmount=function(e){return n.setState({amount:e})},n}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e,t){var n=this.state,a=n.currencies,r=n.toCurrency,o=n.fromCurrency,c=n.amount;t.currencies!==a&&this.handleConversion(),t.toCurrency===r&&t.fromCurrency===o||this.handleConversion(),t.amount!==this.state.amount&&c&&this.handleConversion()}},{key:"render",value:function(){var e=this.state,t=e.fromCurrency,n=e.toCurrency,a=e.currencies,o=e.result,c=e.amount,l=this.props.themeType,u=!c;return r.a.createElement(v.a,{elevation:21,className:"converter-container",style:{paddingTop:20,paddingBottom:30}},r.a.createElement(f.a,{className:"title-text",variant:"h5",component:"h5"},"CURRENCY CONVERTER"),r.a.createElement(w,{result:o,toCurrency:n,themeType:l}),r.a.createElement(E,{disabled:u,currencies:a,fromCurrency:t,toCurrency:n,handleCurrencySelect:this.handleCurrencySelect}),r.a.createElement(F,{disabled:u,amount:c,setAmountCallback:this.setAmount,resetForm:this.resetForm,buttonText:"Clear"}))}}]),t}(a.Component),w=function(e){var t=e.result,n=e.toCurrency,a=e.themeType;return r.a.createElement(f.a,{style:{background:"dark"!==a?"ghostwhite":"#333333"},className:"result-text",color:"textSecondary",variant:"h4",component:"h4"},t&&t.toLocaleString(void 0,{style:"currency",currency:n}).split(" ")[0])},E=function(e){var t=e.disabled,n=e.currencies,a=e.fromCurrency,o=e.toCurrency,c=e.handleCurrencySelect;return r.a.createElement("div",{className:"currencies-container"},r.a.createElement(B,{disabled:t,values:n,currentValue:a,onChangeCallback:c,label:"From"}),r.a.createElement(B,{disabled:t,values:n,currentValue:o,onChangeCallback:c,label:"To"}))},k=n(9),j=n(107),O=n(108),x=n(51),S=n.n(x),T=Object(j.a)((function(e){var t;return{button:(t={width:400,marginTop:20},Object(k.a)(t,e.breakpoints.down(600),{width:300}),Object(k.a)(t,e.breakpoints.down(362),{width:200}),t),container:{alignItems:"center",display:"flex",flexDirection:"column",margin:"0 auto",width:257}}})),F=function(e){var t=e.disabled,n=e.amount,a=e.setAmountCallback,o=e.resetForm,c=e.buttonText,l=T();return r.a.createElement("div",{className:l.container},r.a.createElement(V,{value:n,label:"Amount",onChangeCallback:function(e){return a(e.target.value)}}),r.a.createElement(O.a,{classes:{root:l.button},disabled:t,"aria-label":"convert currency button",size:"large",onClick:function(){return o(1)},variant:"contained",color:"primary",startIcon:r.a.createElement(S.a,null)},c))},N=n(115),R=n(116),A=n(109),I=n(113),U=Object(j.a)((function(e){var t;return{formControl:{margin:e.spacing(1)},select:(t={width:192},Object(k.a)(t,e.breakpoints.down(460),{width:144}),Object(k.a)(t,e.breakpoints.down(362),{width:92}),t),selectEmpty:{marginTop:e.spacing(2)}}})),B=function(e){var t=e.disabled,n=e.values,o=e.currentValue,c=e.onChangeCallback,u=e.label,i=U(),s=r.a.useRef(null),m=r.a.useState(0),d=Object(l.a)(m,2),h=d[0],p=d[1];return r.a.useEffect((function(){p(s.current.offsetWidth)}),[]),r.a.createElement(a.Fragment,null,r.a.createElement(A.a,{variant:"outlined",className:i.formControl},r.a.createElement(N.a,{ref:s,id:"".concat(u,"-dropdown-label")},u),r.a.createElement(I.a,{disabled:t,className:i.select,name:u,labelId:"".concat(u,"-dropdown-label"),id:"".concat(u,"-dropdown"),value:o,onChange:c,labelWidth:h},n.map((function(e){return r.a.createElement(R.a,{key:e,value:e},e)})))))},D=n(117),P=Object(j.a)((function(e){var t;return{textField:(t={marginLeft:e.spacing(2),marginRight:e.spacing(2),width:400},Object(k.a)(t,e.breakpoints.down(460),{width:300}),Object(k.a)(t,e.breakpoints.down(362),{width:200}),t)}})),V=function(e){var t=e.value,n=e.onChangeCallback,a=e.label,o=P();return r.a.createElement(A.a,{variant:"outlined"},r.a.createElement(D.a,{"aria-label":"".concat(a," text field"),autoFocus:!0,className:o.textField,id:"".concat(a,"-input"),label:a,value:t,onChange:n,margin:"normal",variant:"outlined",type:"number",required:!0,InputProps:{inputMode:"numeric",inputProps:{min:1}}}))},W=n(52),G=n(114),L=n(112);var M=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1],c=r.a.useMemo((function(){return Object(W.a)({palette:{type:n?"dark":"light"}})}),[n]),u=(c=Object(G.a)(c)).palette.type;return r.a.createElement(L.a,{theme:c},r.a.createElement(O.a,{style:{position:"absolute",top:0,right:0},variant:"contained",color:"secondary",onClick:function(){return o(!n)}},n?"Go Light":"Go Dark"),r.a.createElement(g,{themeType:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[65,1,2]]]);
//# sourceMappingURL=main.1524f40b.chunk.js.map