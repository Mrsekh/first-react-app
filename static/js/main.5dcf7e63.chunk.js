(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),c=n.n(r),l=(n(13),n(3)),i=n(4),s=n(6),u=n(5),m=n(7),h=(n(14),n(15),n(16),function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{alt:"employess",src:"https://robohash.org/".concat(e.employee.id,"?set=set2&size=180x180")}),o.a.createElement("h2",null,e.employee.name),o.a.createElement("p",null,e.employee.email))}),p=function(e){return o.a.createElement("div",{className:"card-list"},e.employee.map((function(e){return o.a.createElement(h,{key:e.id,employee:e})})))},d=(n(17),function(e){return o.a.createElement("input",{className:"search",type:"search",placeholder:e.placeholder,onChange:e.handleChange})}),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).handleChange=function(t){e.setState({searchField:t.target.value})},e.state={Employee:[],searchField:""},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({Employee:t})}))}},{key:"render",value:function(){var e=this.state,t=e.Employee,n=e.searchField,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Employee Box"),o.a.createElement(d,{placeholder:"Search Employee",handleChange:this.handleChange}),o.a.createElement(p,{employee:a}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[8,1,2]]]);
//# sourceMappingURL=main.5dcf7e63.chunk.js.map