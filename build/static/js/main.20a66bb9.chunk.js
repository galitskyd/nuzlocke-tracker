(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{102:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(26),c=t.n(r),l=(t(84),t(35)),i=t(36),s=t(48),u=t(47),d=(t(85),t(15)),m=t.n(d),j=t(116),h=t(118),p=t(114),v=t(120),b=t(76),k=t(25),S=[{name:"Route 29",pokemon:[{name:"Pidgey",onGold:!0,onSilver:!0},{name:"Sentret",onGold:!0,onSilver:!0},{name:"Rattata",onGold:!0,onSilver:!0},{name:"Hoothoot",onGold:!0,onSilver:!0},{name:"Pineco",onGold:!0,onSilver:!0},{name:"Exeggecute",onGold:!0,onSilver:!0},{name:"Ledyba",onGold:!1,onSilver:!0},{name:"Spinarak",onGold:!0,onSilver:!1}]},{name:"Route 30",pokemon:[{name:"Pidgey",onGold:!0,onSilver:!0},{name:"Rattata",onGold:!0,onSilver:!0},{name:"Hoothoot",onGold:!0,onSilver:!0},{name:"Caterpie",onGold:!0,onSilver:!1},{name:"Metapod",onGold:!0,onSilver:!1},{name:"Weedle",onGold:!1,onSilver:!0},{name:"Kakuna",onGold:!1,onSilver:!0},{name:"Ledyba",onGold:!1,onSilver:!0},{name:"Spinarak",onGold:!0,onSilver:!1}]},{name:"Route 31",pokemon:[{name:"Bellsprout",onGold:!0,onSilver:!0},{name:"Pidgey",onGold:!0,onSilver:!0},{name:"Rattata",onGold:!0,onSilver:!0},{name:"Hoothoot",onGold:!0,onSilver:!0},{name:"Caterpie",onGold:!0,onSilver:!1},{name:"Metapod",onGold:!0,onSilver:!1},{name:"Weedle",onGold:!1,onSilver:!0},{name:"Kakuna",onGold:!1,onSilver:!0},{name:"Spinarak",onGold:!1,onSilver:!0}]},{name:"Route 32",pokemon:[{name:"Ekans",onGold:!0,onSilver:!0},{name:"Zubat",onGold:!0,onSilver:!0},{name:"Rattata",onGold:!0,onSilver:!0},{name:"Bellsprout",onGold:!0,onSilver:!0},{name:"Mareep",onGold:!0,onSilver:!0},{name:"Charmander"}]}],O=t(59),f=t(115),x=t(5),g=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).onRouteChange=function(e){var n=o.props,t=n.onRouteChange,a=n.uid;return o.setState({route:e.value}),t&&t(e,a),!1},o.onPokemonChange=function(e){var n=o.props,t=n.onPokemonChange,a=n.uid;return o.setState({pokemon:e.value}),t&&t(e,a),!1},o.onRemove=function(){var e=o.props,n=e.onRemove,t=e.uid;return n&&n(t),!1},o.state={route:null,pokemon:null},o}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,n=e.route,t=e.pokemon;this.setState({route:n,pokemon:t})}},{key:"render",value:function(){var e,n=this,t=this.props.tracker,o=this.state,a=o.route,r=o.pokemon,c=m.a.map(t,(function(e){return e.route})),l=m.a.map(t,(function(e){return e.pokemon})),i=m.a.map(m.a.remove(m.a.flatMap(S,(function(e){return e.name})),(function(e){return-1===m.a.indexOf(c,e)})),(function(e){return{value:e,label:e}}));return a&&!r&&(e=m.a.flatMap(m.a.flatMap(S,(function(e){return e.name==n.state.route?[m.a.flatMap(e.pokemon,(function(e){return e.name}))]:[]})),(function(e){return m.a.remove(e,(function(e){return-1===m.a.indexOf(l,e)})).map((function(e){return{value:e,label:e}}))}))),Object(x.jsxs)(p.a,{templateColumns:"repeat(7, 1fr)",gap:6,children:[Object(x.jsx)(p.b,{colSpan:3,children:a?Object(x.jsx)("span",{children:a}):Object(x.jsx)(O.a,{isSearchable:!0,onChange:this.onRouteChange,options:i})}),Object(x.jsx)(p.b,{colSpan:3,children:a?r?Object(x.jsx)("span",{children:r}):Object(x.jsx)(O.a,{onChange:this.onPokemonChange,options:e}):null}),a&&r&&Object(x.jsx)(p.b,{colSpan:1,children:Object(x.jsx)(f.a,{onClick:this.onRemove,variant:"ghost",colorScheme:"red","aria-label":"Delete",icon:Object(x.jsx)(k.d,{})})})]})}}]),t}(a.a.Component),C=function(e){Object(s.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(l.a)(this,t),(o=n.call(this,e)).addCatch=function(){var e=o.state.tracker;e.push({uid:Math.floor(1e3*Math.random()+1)}),o.setState({tracker:e})},o.saveCatches=function(){var e=o.state.tracker;return localStorage.setItem("tracker",JSON.stringify(e)),!1},o.clearCatches=function(){localStorage.setItem("tracker",JSON.stringify([])),o.setState({tracker:[]})},o.onRouteChange=function(e,n){var t=o.state.tracker;t[m.a.findIndex(t,{uid:n})].route=e.value,o.setState({tracker:t})},o.onPokemonChange=function(e,n){var t=o.state.tracker;t[m.a.findIndex(t,{uid:n})].pokemon=e.value,o.setState({tracker:t})},o.onRemove=function(e){var n=o.state.tracker,t=m.a.findIndex(n,{uid:e});n.splice(t,1),o.setState({tracker:n})},o.state={tracker:null},o}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("tracker"))||[];this.setState({tracker:e})}},{key:"render",value:function(){var e=this,n=this.state.tracker,t=function(t){return Object(x.jsx)("ul",{children:t.tracker&&t.tracker.map((function(t,o){return Object(x.jsx)(g,{tracker:n,pokeData:S,uid:t.uid,route:t.route,pokemon:t.pokemon,onRouteChange:e.onRouteChange,onPokemonChange:e.onPokemonChange,onRemove:e.onRemove},o)}))})};return Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)("div",{style:{padding:"10px 15px"},children:Object(x.jsx)(j.a,{children:"Nuzlocke Tracker"})}),Object(x.jsxs)(h.e,{children:[Object(x.jsxs)(h.b,{children:[Object(x.jsx)(h.a,{children:"Tracker"}),Object(x.jsx)(h.a,{children:"Available Pokemon"}),Object(x.jsx)(h.a,{children:"TBD"})]}),Object(x.jsxs)(h.d,{children:[Object(x.jsx)(h.c,{children:Object(x.jsxs)(p.a,{templateColumns:"repeat(5, 1fr)",gap:4,children:[Object(x.jsx)(p.b,{colSpan:5,children:Object(x.jsxs)(v.a,{direction:"row",spacing:4,children:[Object(x.jsx)(b.a,{leftIcon:Object(x.jsx)(k.a,{}),colorScheme:"blue",size:"sm",onClick:this.addCatch,children:"Add Catch"}),n&&n.length>0?Object(x.jsxs)(a.a.Fragment,{children:[Object(x.jsx)(b.a,{leftIcon:Object(x.jsx)(k.b,{}),colorScheme:"green",size:"sm",variant:"outline",onClick:this.saveCatches,children:"Save Tracker"}),Object(x.jsx)(b.a,{leftIcon:Object(x.jsx)(k.c,{}),colorScheme:"red",size:"sm",variant:"outline",onClick:this.clearCatches,children:"Clear Tracker"})]}):null]})}),Object(x.jsx)(p.b,{colSpan:3,children:Object(x.jsx)(t,{tracker:n})}),Object(x.jsx)(p.b,{colSpan:2})]})}),Object(x.jsx)(h.c,{children:Object(x.jsx)("p",{children:"TBD"})}),Object(x.jsx)(h.c,{children:Object(x.jsx)("p",{children:"TBD"})})]})]})]})}}]),t}(a.a.Component),G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,121)).then((function(n){var t=n.getCLS,o=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),o(e),a(e),r(e),c(e)}))},R=t(117),y=t(119),P=Object(R.a)({colors:{brand:{900:"#1a365d",800:"#153e75",700:"#2a69ac"}}});c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(y.a,{theme:P,children:Object(x.jsx)(C,{})})}),document.getElementById("root")),G()},84:function(e,n,t){},85:function(e,n,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.20a66bb9.chunk.js.map