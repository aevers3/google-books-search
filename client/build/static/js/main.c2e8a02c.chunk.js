(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{24:function(e,t,a){e.exports=a(61)},30:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/logo.495d93cc.svg"},32:function(e,t,a){},33:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(20),l=a.n(r),c=(a(30),a(5)),s=a(6),i=a(8),u=a(7),m=a(9),f=a(64),h=a(66),d=a(65),v=(a(31),a(32),a(63));a(33);var E=function(e){return o.a.createElement(v.a,{className:"navLink",to:e.page},e.text)};a(36);var p=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",null,o.a.createElement("span",{className:"navLink"},o.a.createElement(E,{text:"Search",page:"/"})),o.a.createElement("span",{className:"navLink"},o.a.createElement(E,{text:"Saved",page:"/saved"}))))};a(37);var k=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h3",{className:"text-center mt-5 text-white"},"Search for Books!"))};a(38);var g=function(e){return o.a.createElement("form",null,o.a.createElement("div",{className:"container text-center"},o.a.createElement("div",{className:"row d-flex justify-content-center mt-5"},o.a.createElement("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search for a book",id:"search"})),o.a.createElement("div",{className:"row mt-3 d-flex justify-content-center"},o.a.createElement("button",{onClick:e.handleFormSubmit,className:"search-button "},"Search"))))},b=a(10),N=a.n(b),w={search:function(e){return N.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&key=AIzaSyC3vVfuQuQFalxDjkW23QkVYyV8Kg-2jEQ")},saveBook:function(e){return console.log("bookData",e),N.a.post("http://localhost:3001/api/books",e)},getBooks:function(){return N.a.get("/api/books")},deleteBook:function(e){return console.log(e),N.a.delete("/api/books/"+e)}};var x=function(e){return console.log("bookslistitems",e.books),o.a.createElement(o.a.Fragment,null,e.books.map(function(t){return o.a.createElement("li",{key:t.title},o.a.createElement("h3",{className:"book-title"},t.title),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",t.authors),o.a.createElement("div",{className:"row"},o.a.createElement("img",{src:t.image,alt:t.title,className:"col-sm-3"}),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("p",null,t.description),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"col-6 d-flex justify-content-center"},o.a.createElement("a",{href:t.link,target:"_blank",className:"info-btn text-center"},"More Info")),o.a.createElement("p",{className:"col-6 d-flex justify-content-center"},o.a.createElement("button",{onClick:function(){e.handleDeleteBook(t._id)},className:"info-btn"},"Remove from Saved"))))),o.a.createElement("hr",null))}))};var j=function(e){return console.log("list props",e),o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"results-list"},o.a.createElement(x,{books:e.books,handleDeleteBook:e.handleDeleteBook})))},B=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={books:[]},a.handleDeleteBook=function(e){w.deleteBook(e).then(function(e){return a.loadBooks()})},a.loadBooks=function(){w.getBooks().then(function(e){console.log("res",e.data),a.setState({books:e.data})}).catch(function(e){return console.log(e)})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadBooks()}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(I,{page:"saved"}),o.a.createElement(j,{books:this.state.books,handleDeleteBook:this.handleDeleteBook}))}}]),t}(o.a.Component);var S=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(B,null))};var y=function(){return o.a.createElement("h3",{className:"text-center mt-5 text-white"},"Your Saved Books")};var I=function(e){return console.log("bannerProps",e),"saved"===e.page?o.a.createElement("div",{className:"banner mb-5"},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("h1",{className:"text-center banner-header"},"Book Search Helper"),o.a.createElement(y,null))):o.a.createElement("div",{className:"banner mb-5"},o.a.createElement("div",{className:"header-wrapper"},o.a.createElement("h1",{className:"text-center banner-header"},"Book Search Helper"),o.a.createElement(k,null),o.a.createElement(g,{search:e.search,handleFormSubmit:e.handleFormSubmit,handleInputChange:e.handleInputChange})))},O=a(21);a(57);var F=function(e){return console.log(e.bookInfo),e.bookInfo.imageLinks?o.a.createElement("img",{src:e.bookInfo.imageLinks.thumbnail,alt:e.bookInfo.title,className:e.className}):o.a.createElement("span",{className:e.className}," No image available.")};a(58);var C=function(e){return console.log("list item props",e),o.a.createElement(o.a.Fragment,null,e.results.map(function(t,a){return o.a.createElement("li",{className:"results-list-item",key:t.id},o.a.createElement("h3",{className:"book-title"},t.volumeInfo.title," "),o.a.createElement("p",null,o.a.createElement("strong",null,"Author(s):")," ",t.volumeInfo.authors),o.a.createElement("div",{className:"row"},o.a.createElement(F,{bookInfo:t.volumeInfo,className:"col-sm-3"}),o.a.createElement("div",{className:"col-sm-9"},o.a.createElement("p",null,t.volumeInfo.description),o.a.createElement("div",{className:"row"},o.a.createElement("p",{className:"col-4 d-flex justify-content-center"},o.a.createElement("a",{href:t.volumeInfo.infoLink,target:"_blank",className:"info-btn text-center"},"More Info")),o.a.createElement("p",{className:"col-4 d-flex justify-content-center"},o.a.createElement("button",{onClick:function(t){e.handleSaveBook(t,a)},className:"info-btn"},"Save Book")),o.a.createElement("p",{className:"col-4 d-flex justify-content-center"},o.a.createElement("a",{href:t.volumeInfo.previewLink,target:"_blank",className:"info-btn text-center"},"Preview"))))),o.a.createElement("hr",null))}))};var L=function(e){return e.results?o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"results-list"},o.a.createElement(C,{results:e.results,handleSaveBook:e.handleSaveBook}))):o.a.createElement("h3",{className:"text-center"},"No Results")},D=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={search:"",results:[]},a.searchGoogle=function(e){w.search(e).then(function(e){return a.setState({results:e.data.items})}).catch(function(e){return console.log(e)})},a.handleSaveBook=function(e,t){e.preventDefault(),console.log(a.state);var n=Object.assign({},a.state.results[t].volumeInfo);n.authors=n.authors.reduce(function(e,t,a){return t+e},""),n.link=n.infoLink,n.image=n.imageLinks.thumbnail,n.preview=n.previewLink,console.log("preview",n.preview),w.saveBook(n)},a.handleInputChange=function(e){var t=e.target.name,n=e.target.value;a.setState(Object(O.a)({},t,n))},a.handleFormSubmit=function(e){e.preventDefault(),console.log(a.state.search),a.searchGoogle(a.state.search)},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(I,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),o.a.createElement(L,{results:this.state.results,handleSaveBook:this.handleSaveBook}))}}]),t}(o.a.Component);var A=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(D,null))};var W=function(){return o.a.createElement("span",null,"404")};a(59);var Q=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",null))},_=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(f.a,null,o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement(h.a,null,o.a.createElement(d.a,{exact:!0,path:"/",component:A}),o.a.createElement(d.a,{exact:!0,path:"/search",component:A}),o.a.createElement(d.a,{exact:!0,path:"/saved",component:S}),o.a.createElement(d.a,{component:W})),o.a.createElement(Q,null)))}}]),t}(n.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(o.a.createElement(_,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");M?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):R(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):R(e)})}}()}},[[24,1,2]]]);
//# sourceMappingURL=main.c2e8a02c.chunk.js.map