(this["webpackJsonpmonosters-rolodex"]=this["webpackJsonpmonosters-rolodex"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),s=(n(13),n(3)),i=n(4),l=n(5),m=n(7),u=n(6),h=(n(14),n(15),function(e){var t=e.monoster,n=t.id,a=t.name,r=t.email;return o.a.createElement("div",{className:"Card"},o.a.createElement("img",{src:"https://robohash.org/".concat(n,".png"),alt:n}),o.a.createElement("h4",null,a),o.a.createElement("h5",null,r))}),d=function(e){var t=Object(a.useState)(""),n=Object(u.a)(t,2),r=n[0],c=n[1],s=e.monosters.filter((function(e){return e.name.toLowerCase().includes(r)})).map((function(e){return o.a.createElement(h,{key:e.id,monoster:e})}));return o.a.createElement("div",{className:"CardList"},o.a.createElement("div",{className:"input-container"},o.a.createElement("label",{for:"name"},"Enter monoster Name"),o.a.createElement("input",{type:"text",name:"name",id:"name",value:r,onChange:function(e){c(e.target.value.toLowerCase())}})),o.a.createElement("div",{class:"list"},s))},f=(n(16),function(e){Object(m.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={monsters:[]},a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({monsters:t})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("h1",{className:"title"},"Monosters Rolodex"),o.a.createElement(d,{monosters:this.state.monsters}))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.388fad0e.chunk.js.map