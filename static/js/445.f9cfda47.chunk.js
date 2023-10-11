"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[445],{5445:function(n,e,t){t.r(e),t.d(e,{default:function(){return U}});var r,a,i,s,c=t(2791),o=t(9434),l=t(4270),d=t(168),x=t(6487),u=x.ZP.ul(r||(r=(0,d.Z)(["\n\ndisplay:flex;\nflex-wrap:wrap;\n  padding: 10px;\nmargin-left:auto;\nmargin-right:auto;\nwidth: 100%;\n  font-size: 20px;\n"]))),m=x.ZP.li(a||(a=(0,d.Z)(["\n\n\n  padding: 10px;\n  width: 380px;\n  margin-bottom: 5px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  font-size: 20px;\n"]))),h=t(208),f=t(4554),p=t(493),j=t(4852),Z=t(653),g=t(6259),v=t(3044),b=t(3400),w=t(1889),y=t(7247),C=t(8619),P=t(184),k=function(n){var e=n.contact,t=(0,o.I0)();return(0,P.jsx)(f.Z,{sx:{flexGrow:1,maxWidth:752},children:(0,P.jsx)(w.ZP,{item:!0,xs:12,md:6,children:(0,P.jsxs)(p.Z,{children:[(0,P.jsxs)(j.ZP,{secondaryAction:(0,P.jsx)(b.Z,{edge:"end","aria-label":"delete",onClick:function(){return t((0,h.GK)(e.id))},children:(0,P.jsx)(y.Z,{})}),children:[(0,P.jsx)(Z.Z,{children:(0,P.jsx)(v.Z,{children:(0,P.jsx)(C.Z,{})})}),(0,P.jsx)(g.Z,{primary:e.name+" : "+e.number})]}),","]})})})},A=x.ZP.section(i||(i=(0,d.Z)(["\n  margin: 0 auto;\n  width:1200 px;\n"]))),z=x.ZP.h2(s||(s=(0,d.Z)(["\nmargin-top:20px;\nmargin-bottom:20px;\n  text-align: center;\n  font-size: 36px;\n  letter-spacing: 2px;\n"]))),L=function(n){var e=n.children;return(0,P.jsxs)(A,{children:[(0,P.jsx)(z,{children:"Your Contacts"}),e]})},W=t(6916),q=function(n){return n.contacts.items},F=function(n){return n.contacts.isLoading},I=(0,W.P1)([q,function(n){return n.filter}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),_=function(){var n=(0,o.v9)(I);return(0,P.jsx)(L,{children:(0,P.jsx)(u,{children:n.map((function(n){return(0,P.jsx)(m,{children:(0,P.jsx)(k,{contact:n})},n.id)}))})})},D=t(1686),N=t.n(D),Y=t(4294),G=t(4708),K=t(6335),T=t(890),V=t(9164),B=t(7107),E=t(4507),J=t(1556),M=(0,B.Z)(),R=function(){var n=(0,o.I0)(),e=(0,o.v9)(q);return(0,P.jsx)(E.Z,{theme:M,children:(0,P.jsxs)(V.Z,{component:"main",maxWidth:"xs",children:[(0,P.jsx)(G.ZP,{}),(0,P.jsxs)(f.Z,{sx:{marginTop:-17,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,P.jsx)(v.Z,{sx:{m:1,bgcolor:"secondary.main"},children:(0,P.jsx)(J.Z,{})}),(0,P.jsx)(T.Z,{component:"h1",variant:"h5",children:"Add Your Contact"}),(0,P.jsxs)(f.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=t.target,a={name:r.elements.name.value,number:r.elements.number.value},i=a.name;e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()}))?N().Notify.failure("".concat(a.name," is already in contacts")):n((0,h.uK)(a)),r.reset()},noValidate:!0,sx:{mt:1},children:[(0,P.jsx)(K.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",autoFocus:!0}),(0,P.jsx)(K.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone",type:"tel",id:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,P.jsx)(Y.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},children:"Add Contact"})]})]})]})})},S=t(533),$=t(8663),H=(0,B.Z)();function O(n){n.preventDefault()}var Q=function(){var n=(0,o.v9)(q);return(0,P.jsxs)(E.Z,{theme:H,children:[(0,P.jsx)(G.ZP,{}),(0,P.jsx)(v.Z,{sx:{mt:10,bgcolor:"secondary.main"},children:(0,P.jsx)($.Z,{})}),(0,P.jsx)(T.Z,{component:"p",variant:"h4",children:n.length}),(0,P.jsx)(T.Z,{color:"text.secondary",sx:{flex:1},children:"Total contacts"}),(0,P.jsx)("div",{children:(0,P.jsx)(S.Z,{color:"primary",href:"#",onClick:O,children:"View all contacts"})})]})};function U(){var n=(0,o.I0)(),e=(0,o.v9)(F);return(0,c.useEffect)((function(){n((0,h.yF)())}),[n]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(l.q,{children:(0,P.jsx)("title",{children:"Your contacts"})}),(0,P.jsx)(Q,{}),(0,P.jsx)(R,{}),(0,P.jsx)("div",{children:e&&"Request in progress..."}),(0,P.jsx)(_,{})]})}}}]);
//# sourceMappingURL=445.f9cfda47.chunk.js.map