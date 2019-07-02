(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{45:function(e,t,n){e.exports=n(60)},50:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(39),u=n.n(l),o=(n(50),n(9)),i=n(10),c=n(12),s=n(11),m=n(13),d=n(19),b=n(5),h=n(26),p=n(21),f=n(23);function E(){var e=Object(f.a)(["\n  query($id: ID) {\n    author(id: $id) {\n      id\n      name\n      age\n      books {\n        name\n        id\n      }\n    }\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(f.a)(["\n  query($id: ID) {\n    book(id: $id) {\n      id\n      name\n      genre\n      author {\n        id\n        name\n        age\n        books {\n          name\n          id\n        }\n      }\n    }\n  }\n"]);return v=function(){return e},e}function j(){var e=Object(f.a)(["\n  mutation($name: String!, $age: Int!) {\n    addAuthor(name: $name, age: $age) {\n      name\n      id\n    }\n  }\n"]);return j=function(){return e},e}function O(){var e=Object(f.a)(["\n  mutation($name: String!, $genre: String!, $authorId: ID!) {\n    addBook(name: $name, genre: $genre, authorId: $authorId) {\n      name\n      id\n    }\n  }\n"]);return O=function(){return e},e}function k(){var e=Object(f.a)(["\n  {\n    authors {\n      name\n      id\n    }\n  }\n"]);return k=function(){return e},e}function g(){var e=Object(f.a)(["\n  {\n    books {\n      name\n      id\n    }\n  }\n"]);return g=function(){return e},e}var y=Object(d.b)(g()),A=Object(d.b)(k()),I=Object(d.b)(O()),N=Object(d.b)(j()),B=Object(d.b)(v()),C=Object(d.b)(E()),$=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayBookDetails",value:function(){var e=this.props.data.book;return e?r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.genre),r.a.createElement("p",null,e.author.name),r.a.createElement("p",null,"All Books by this Author:"),r.a.createElement("ul",{className:"other-books"},e.author.books.map(function(e){return r.a.createElement("li",{key:e.id},e.name)}))):r.a.createElement("div",null,"No book selected ...")}},{key:"render",value:function(){return r.a.createElement("div",{id:"book-details"},this.displayBookDetails())}}]),t}(a.Component),S=Object(b.c)(B,{options:function(e){return{variables:{id:e.bookId}}}})($),D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayBook",value:function(){var e=this,t=this.props.data;return t.loading?r.a.createElement("div",null,"Loading Books ..."):t.books.map(function(t){return r.a.createElement("li",{key:t.id,onClick:function(n){e.setState({selected:t.id})}}," ",t.name)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{id:"book-list"},this.displayBook()),r.a.createElement(S,{bookId:this.state.selected}))}}]),t}(a.Component),w=Object(b.c)(y)(D),x=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={name:"",genre:"",authorId:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayAuthors",value:function(){var e=this.props.getAuthorsQuery;return e.loading?r.a.createElement("option",null,"Loading Authors ..."):e.authors.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id}," ",e.name)})}},{key:"submitForm",value:function(e){e.preventDefault(),this.props.addBookMutation({variables:{name:this.state.name,genre:this.state.genre,authorId:this.state.authorId},refetchQueries:[{query:y}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-book",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Book Name:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Genre:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({genre:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Author:"),r.a.createElement("select",{onChange:function(t){return e.setState({authorId:t.target.value})}},r.a.createElement("option",null,"Select author"),this.displayAuthors())),r.a.createElement("button",{className:"btn-sm"},"+"))}}]),t}(a.Component),F=Object(b.b)(Object(b.c)(A,{name:"getAuthorsQuery"}),Object(b.c)(I,{name:"addBookMutation"}))(x),q=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(w,null),r.a.createElement(F,null))},Q=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayAuthorDetails",value:function(){var e=this.props.data.author;return e?r.a.createElement("div",null,r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.age),r.a.createElement("p",null,"All Books by this Author:"),r.a.createElement("ul",{className:"other-books"},e.books.map(function(e){return r.a.createElement("li",{key:e.id},e.name)}))):r.a.createElement("div",null,"No author selected ...")}},{key:"render",value:function(){return r.a.createElement("div",{id:"book-details"},this.displayAuthorDetails())}}]),t}(a.Component),L=Object(b.c)(C,{options:function(e){return{variables:{id:e.authorId}}}})(Q),M=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={selected:null},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"displayAuthor",value:function(){var e=this,t=this.props.data;return t.loading?r.a.createElement("div",null,"Loading Authors ..."):t.authors.map(function(t){return r.a.createElement("li",{key:t.id,onClick:function(n){e.setState({selected:t.id})}}," ",t.name)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("ul",{id:"author-list"},this.displayAuthor()),r.a.createElement(L,{authorId:this.state.selected}))}}]),t}(a.Component),J=Object(b.c)(A)(M),G=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={name:"",genre:""},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addAuthorMutation({variables:{name:this.state.name,age:parseInt(this.state.age)},refetchQueries:[{query:A}]})}},{key:"render",value:function(){var e=this;return r.a.createElement("form",{id:"add-author",onSubmit:this.submitForm.bind(this)},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Author Name:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({name:t.target.value})}})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Age:"),r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({age:t.target.value})}})),r.a.createElement("button",{className:"btn-sm"},"+"))}}]),t}(a.Component),P=Object(b.b)(Object(b.c)(A,{name:"getAuthorsQuery"}),Object(b.c)(N,{name:"addAuthorMutation"}))(G),z=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(J,null),r.a.createElement(P,null))},H=function(e){var t=e.icon,n=e.title;return r.a.createElement("nav",{className:"navbar bg-primary"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("i",{className:t})," ",n),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/"},"Books")),r.a.createElement("li",null,r.a.createElement(h.b,{to:"/authors"},"Authors"))))};H.defaultProps={title:"List of Books",icon:"fab fa-facebook"};var K=H,R=new d.a({uri:"/graphql"}),T=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(b.a,{client:R},r.a.createElement(h.a,null,r.a.createElement("div",{className:"App",id:"main"},r.a.createElement(K,null),r.a.createElement("div",{className:"container"},r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/",exact:!0,component:q}),r.a.createElement(p.a,{path:"/authors",exact:!0,component:z}))))))}}]),t}(a.Component);u.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.8978ccb7.chunk.js.map