(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{24:function(e,t,n){e.exports=n(35)},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),l=n.n(r),c=n(17),i=n(5),d=n(6),u=n(7),s=n(8),m=n(12),p=n(9);var f={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},h={color:"#fff",textDecoration:"none"},b=function(){return o.a.createElement("header",{style:f},o.a.createElement("h1",null,"TodoList"),o.a.createElement(m.b,{style:h,to:"/TodoListApp"},"Home")," |",o.a.createElement(m.b,{style:h,to:"/About"}," About"))},g=(n(34),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{background:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:e.props.todo.completed?"Line-through":"none"}},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.todo,t=e.id,n=e.title;return o.a.createElement("div",{style:this.getStyle()},o.a.createElement("p",null,o.a.createElement("input",{type:"checkbox",onChange:this.props.markComplete.bind(this,t)})," ","  ",n,o.a.createElement("button",{style:v,onClick:this.props.delTodo.bind(this,t)},"x")))}}]),n}(a.Component)),v={background:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right"},E=g,y=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return this.props.todos.map((function(t){return o.a.createElement(E,{key:t.id,todo:t,markComplete:e.props.markComplete,delTodo:e.props.delTodo})}))}}]),n}(a.Component),k=n(23),x=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={title:""},e.onChange=function(t){return e.setState(Object(k.a)({},t.target.name,t.target.value))},e.onSubmit=function(t){t.preventDefault(),e.props.addTodo(e.state.title),e.setState({title:""})},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.onSubmit,style:{display:"flex"}},o.a.createElement("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),o.a.createElement("input",{type:"submit",value:"submit",className:"btn",style:{flex:"1"}}))}}]),n}(a.Component);var j=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"About"),o.a.createElement("p",null,"This is TodoList App v1.1.0 ",o.a.createElement("br",null)," Mahmoud Abdo",o.a.createElement("br",null),"Mahmoud.abdo59986@Gmail.com "))};var O={textAlign:"center",padding:"3px",textDecoration:"none"},T=function(){var e=new Date,t="Current Date: "+(e.getDate()+"-"+(e.getMonth()+1)+"-"+e.getFullYear());return o.a.createElement("header",{style:O},o.a.createElement("h5",null,t))};var C={background:"#333",color:"#fff",textAlign:"center",padding:"0px"},w=function(){return o.a.createElement("header",{style:C},o.a.createElement("form",null,o.a.createElement(T,null)))},A=n(13),S=n.n(A),D=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[{id:S()(),title:"Take out the trash",completed:!1},{id:S()(),title:"Dinner with wife",completed:!1},{id:S()(),title:"Meeting with boss",completed:!1}]},e.markComplete=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.delTodo=function(t){e.setState({todos:Object(c.a)(e.state.todos.filter((function(e){return e.id!==t})))})},e.addTodo=function(t){var n={id:S()(),title:t,complete:!1};e.setState({todos:[].concat(Object(c.a)(e.state.todos),[n])})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement(m.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(b,null),o.a.createElement(p.a,{exact:!0,path:"/TodoListApp",render:function(t){return o.a.createElement(o.a.Fragment,null,o.a.createElement(x,{addTodo:e.addTodo}),o.a.createElement(w,null),o.a.createElement(y,{todos:e.state.todos,markComplete:e.markComplete,delTodo:e.delTodo}))}}),o.a.createElement(p.a,{path:"/about",component:j}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.b0ae6eea.chunk.js.map