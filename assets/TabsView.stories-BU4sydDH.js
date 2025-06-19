import{j as e}from"./index-DlYN8Jxj.js";import{r as k}from"./index-DUAV1Q2A.js";import{c as w,e as A,I as y,g as H,T as W}from"./FormFactory-C4wSxtBe.js";import{T as _}from"./Map-Nj_KxIjO.js";import{f as F}from"./index-cNkFZXRj.js";import{T as O}from"./ThemeProvider-D-ebdiKN.js";import"./index-CqVsPxxY.js";const R=w(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),q=w(e.jsx("path",{d:"M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"}),"Menu"),G=A(),Y={title:"tabs/TabsView",component:_,decorators:[t=>e.jsx(O,{theme:G,children:e.jsx(t,{})})],parameters:{layout:"centered"},argTypes:{},args:{tabs:[{index:"tab1",label:"Tab 1",content:e.jsx("div",{children:"Tab 1 content"})},{index:"tab2",label:"Tab 2",content:e.jsx("div",{children:"Tab 2 content"})},{index:"tab3",label:"Tab 3",content:e.jsx("div",{children:"Tab 3 content"})}],onChange:F()}},s={args:{}},n={args:{initial:"tab2"}},r={args:{active:"tab3"}},o={args:{tabViewToggle:e.jsx(y,{children:e.jsx(q,{})})}},c={args:{aside:e.jsx(y,{children:e.jsx(R,{})})}},m=()=>{const[t,z]=k.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx(H,{variant:"outlined",onClick:()=>z(t+1),children:"Click me"}),e.jsxs(W,{children:["Clicked ",t," times"]})]})},a={args:{autoDismount:!0,tabs:[{index:"tab1",label:"Tab 1",content:e.jsx(m,{})},{index:"tab2",label:"Tab 2",content:e.jsx(m,{})}]}},i={args:{...a.args,autoDismount:!1}};var u,l,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,b,g;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    initial: 'tab2'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var x,T,h;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    active: 'tab3'
  }
}`,...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var j,f,I;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    tabViewToggle: <IconButton>
        <MenuIcon />
      </IconButton>
  }
}`,...(I=(f=o.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var v,S,C;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    aside: <IconButton>
        <CloseIcon />
      </IconButton>
  }
}`,...(C=(S=c.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var D,E,B;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    autoDismount: true,
    tabs: [{
      index: 'tab1',
      label: 'Tab 1',
      content: <Panel />
    }, {
      index: 'tab2',
      label: 'Tab 2',
      content: <Panel />
    }]
  }
}`,...(B=(E=a.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var P,M,V;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...AutoDismount.args,
    autoDismount: false
  }
}`,...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};const Z=["Tabs","Initial","Controlled","PrefixElement","SuffixElement","AutoDismount","WithoutDismount"];export{a as AutoDismount,r as Controlled,n as Initial,o as PrefixElement,c as SuffixElement,s as Tabs,i as WithoutDismount,Z as __namedExportsOrder,Y as default};
