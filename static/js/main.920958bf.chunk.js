(this.webpackJsonpemployees=this.webpackJsonpemployees||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(9),i=n.n(s),c=n(8),l=n(2),o=n(3),u=n(5),j=n(4),d=(n(16),n(0)),b=function(e){var t=e.eCount,n=e.pCount;return Object(d.jsxs)("div",{className:"app-info",children:[Object(d.jsx)("h1",{children:"\u0423\u0447\u0435\u0442 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432 \u0432 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 N"}),Object(d.jsxs)("h2",{children:["\u041e\u0431\u0449\u0435\u0435 \u0447\u0438\u0441\u043b\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u043e\u0432: ",t]}),Object(d.jsxs)("h2",{children:["\u041f\u0440\u0435\u043c\u0438\u044e \u043f\u043e\u043b\u0443\u0447\u0430\u0442: ",n]})]})},h=(n(18),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onText=function(e){a.setState({text:e.target.value}),a.props.onSearch(e.target.value)},a.state={text:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsx)("input",{onChange:this.onText,type:"text",value:this.state.text,className:"form-control search-input",placeholder:"\u041d\u0430\u0439\u0442\u0438 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"})}}]),n}(a.Component)),p=(n(19),function(e){var t=e.onFilter,n=e.selected,a=[{id:"all",text:"\u0412\u0441\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"},{id:"rise",text:"\u041d\u0430 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435"},{id:"thousand",text:"\u0417\u041f \u0431\u043e\u043b\u044c\u0448\u0435 1000$"}].map((function(e){return Object(d.jsx)("button",{type:"button",className:e.id===n?"btn btn-light":"btn btn-outline-light","data-filter":e.id,onClick:t,children:e.text},e.id)}));return Object(d.jsx)("div",{className:"btn-group",children:a})}),f=n(10),m=n(11),x=(n(20),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).setSalary=function(e){var t=+e.target.value.slice(0,e.target.value.length-1);a.setState({salary:t}),a.props.onSalary(t)},a.state={salary:a.props.salary},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.increase,a=e.like,r=e.onToggleProp,s=e.onDelete,i="list-group-item d-flex justify-content-between";!0===n&&(i+=" increase"),!0===a&&(i+=" like");var c=this.state.salary+"$";return Object(d.jsxs)("li",{className:i,children:[Object(d.jsx)("span",{onClick:r,className:"list-group-item-label","data-toggle":"like",children:t}),Object(d.jsx)("input",{type:"text",className:"list-group-item-input",value:c,onChange:this.setSalary}),Object(d.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[Object(d.jsx)("button",{onClick:r,"data-toggle":"increase",type:"button",className:"btn-cookie btn-sm ",children:Object(d.jsx)("i",{className:"fas fa-cookie"})}),Object(d.jsx)("button",{type:"button",onClick:s,className:"btn-trash btn-sm ",children:Object(d.jsx)("i",{className:"fas fa-trash"})}),Object(d.jsx)("i",{className:"fas fa-star"})]})]})}}]),n}(a.Component)),O=(n(21),["id"]),y=function(e){var t=e.employees,n=e.onDelete,a=e.onToggleProp,r=e.onSalary,s=t.map((function(e){var t=e.id,s=Object(m.a)(e,O);return Object(d.jsx)(x,Object(f.a)({onSalary:function(e){return r(t,e)},onDelete:function(){return n(t)},onToggleProp:function(e){return a(t,e.currentTarget.getAttribute("data-toggle"))}},s),t)}));return Object(d.jsx)("ul",{className:"app-list list-group",children:s})},g=n(6),v=(n(22),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onInput=function(e){a.setState(Object(g.a)({},e.target.name,e.target.value))},a.toPush=function(e){e.preventDefault(),a.props.onAdd(a.state.name,a.state.salary)},a.state={name:"",salary:""},a}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app-add-form",children:[Object(d.jsx)("h3",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u043d\u043e\u0432\u043e\u0433\u043e \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0430"}),Object(d.jsxs)("form",{onSubmit:this.toPush,className:"add-form d-flex",children:[Object(d.jsx)("input",{type:"text",required:!0,onChange:this.onInput,name:"name",className:"form-control new-post-label",placeholder:"\u041a\u0430\u043a \u0435\u0433\u043e \u0437\u043e\u0432\u0443\u0442?"}),Object(d.jsx)("input",{type:"number",onChange:this.onInput,required:!0,name:"salary",className:"form-control new-post-label",placeholder:"\u0417/\u041f \u0432 $?"}),Object(d.jsx)("button",{type:"submit",className:"btn btn-outline-light",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})]})]})}}]),n}(a.Component)),k=(n(23),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onToggleProp=function(e,t,n){var r=a.state.employees,s=r.findIndex((function(t){return t.id===e})),i=Object(c.a)(r);"increase"===t?i[s].increase=!i[s].increase:"like"===t?i[s].like=!i[s].like:i[s].salary=n,a.setState({employees:i})},a.onSalary=function(e,t){a.onToggleProp(e,"salary",t)},a.onDelete=function(e){a.setState((function(t){return{employees:t.employees.filter((function(t){return t.id!==e}))}}))},a.onAdd=function(e,t){a.setState((function(n){var a=n.employees;return{employees:[].concat(Object(c.a)(a),[{name:e,salary:t,increase:!1,like:!1,id:2+a[a.length-1].id}])}}))},a.onSearch=function(e){a.setState({searchText:e})},a.toFilter=function(){var e,t=a.state,n=t.employees,r=t.searchText;switch(t.selectedFilter){case"all":e=n.filter((function(e){return e.name.indexOf(r)>-1}));break;case"rise":e=n.filter((function(e){return e.name.indexOf(r)>-1&&!0===e.like}));break;case"thousand":e=n.filter((function(e){return e.name.indexOf(r)>-1&&+e.salary>1e3}))}return e},a.onFilter=function(e){a.setState({selectedFilter:e.currentTarget.getAttribute("data-filter")})},a.state={employees:[{name:"Alexander",salary:8e3,increase:!0,like:!0,id:1},{name:"Maxim",salary:3e3,increase:!1,like:!1,id:2},{name:"Dmitriy",salary:4e3,increase:!1,like:!1,id:3}],searchText:"",selectedFilter:"all"},a}return Object(o.a)(n,[{key:"render",value:function(){var e=this.state,t=e.employees,n=e.searchText,a=e.selectedFilter,r=t.filter((function(e){return!0===e.increase}));return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(b,{eCount:t.length,pCount:r.length}),Object(d.jsxs)("div",{className:"search-panel",children:[Object(d.jsx)(h,{onSearch:this.onSearch}),Object(d.jsx)(p,{onFilter:this.onFilter,selected:a})]}),Object(d.jsx)(y,{onDelete:this.onDelete,onSalary:this.onSalary,onToggleProp:this.onToggleProp,employees:this.toFilter(n)}),Object(d.jsx)(v,{onAdd:this.onAdd})]})}}]),n}(a.Component));n(24);i.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.920958bf.chunk.js.map