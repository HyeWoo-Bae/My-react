(this.webpackJsonpreact_app=this.webpackJsonpreact_app||[]).push([[0],{130:function(t,e,n){},425:function(t,e,n){},427:function(t,e,n){"use strict";n.r(e);var c=n(5),i=n.n(c),s=n(15),a=n.n(s),r=(n(130),n(21)),o=n(22),l=n(24),d=n(23),h=(n(428),n(425),n(1)),u=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){for(var t=this.props.data,e=[],n=0;n<t.length;n++)e.push(Object(h.jsx)("li",{children:Object(h.jsx)("a",{"data-id":t[n].id,onClick:function(t){t.preventDefault(),alert("click"),this.props.onChangePage(t.target.dataset.id)}.bind(this),href:"/content/"+t[n].id,children:t[n].title})},t[n].id));return Object(h.jsx)("nav",{children:Object(h.jsx)("ul",{children:e})})}}]),n}(c.Component),j=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("article",{children:[Object(h.jsx)("h2",{children:this.props.title}),this.props.desc,Object(h.jsx)("h1",{children:"!!!"})]})}}]),n}(c.Component),b=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("header",{children:[Object(h.jsx)("h1",{children:Object(h.jsx)("a",{href:"/",onClick:function(t){t.preventDefault(),this.props.onChangePage()}.bind(this),children:this.props.title})}),this.props.sub]})}}]),n}(c.Component),p=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).state={mode:"read",selected_content_id:2,subject:{title:"web",sub:"world wid web!"},welcome:{title:"Welcom",desc:"Hello, React!!"},contents:[{id:1,title:"html",desc:"hteml is..."},{id:2,title:"css",desc:"css is..."},{id:3,title:"javascript",desc:"javascript is..."}]},c}return Object(o.a)(n,[{key:"render",value:function(){var t,e=null;if("welcome"===this.state.mode)t=this.state.welcome.title,e=this.state.welcome.desc;else if("read"===this.state.mode){var n=this.state.selected_content_id-1,c=this.state.contents[n];t=c.title,e=c.desc}return console.log("render:::",this),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(b,{title:this.state.subject.title,sub:this.state.subject.sub,onChangePage:function(){alert("hi"),this.setState({mode:"welcome"})}.bind(this)}),Object(h.jsx)(u,{onChangePage:function(t){alert(t+"toc"),this.setState({mode:"read",selected_content_id:Number(t)})}.bind(this),data:this.state.contents}),Object(h.jsx)(j,{title:t,desc:e})]})}}]),n}(c.Component),O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,429)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),s(t),a(t)}))};a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),O()}},[[427,1,2]]]);
//# sourceMappingURL=main.0bb67f0b.chunk.js.map