(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,n){t.exports=n(19)},16:function(t,e,n){},17:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},18:function(t,e,n){},19:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(2),l=n.n(i),r=(n(16),n(7)),c=n(3),s=n(4),d=n(5),u=n(8),h=n(6),m=n(9);n(17),n(18);var w=function(t){return a.a.createElement("div",null,a.a.createElement("input",{name:"newTodo",type:"text",value:t.newTodo,onChange:t.handleInputChange}),a.a.createElement("button",{onClick:t.handleSubmit},"Add Todo"))};var v=function(t){return console.log(t),a.a.createElement("div",null,"TodoList, this is where my todos will go",0===t.todos.length?a.a.createElement("div",null,"This is empty"):a.a.createElement("ul",null,t.todos.map(function(t){return a.a.createElement("li",null,t.text)})))},g=function(t){function e(){var t,n;Object(s.a)(this,e);for(var o=arguments.length,a=new Array(o),i=0;i<o;i++)a[i]=arguments[i];return(n=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(a)))).state={newTodo:"",todos:[{text:"this is a thing I have to do"},{text:"this is another thing I have to do"}]},n.handleInputChange=function(t){var e=t.target,o=e.name,a=e.value;n.setState(Object(c.a)({},o,a))},n.todoSubmit=function(t){t.preventDefault(),console.log("we tried to submit something"),console.log(n.state);var e=[{text:n.state.newTodo}].concat(Object(r.a)(n.state.todos));n.setState({todos:e,newTodo:""})},n}return Object(m.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement(w,{newTodo:this.state.newTodo,handleInputChange:this.handleInputChange,handleSubmit:this.todoSubmit}),a.a.createElement(v,{todos:this.state.todos}))}}]),e}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.28495d8c.chunk.js.map