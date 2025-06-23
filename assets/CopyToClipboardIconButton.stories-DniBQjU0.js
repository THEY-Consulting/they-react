import{j as V}from"./index-DlYN8Jxj.js";import"./index-DUAV1Q2A.js";import"./FormFactory-C4wSxtBe.js";import{a as j}from"./Map-CKR1jYzf.js";import{P as H}from"./Pets-BzyWSK1C.js";import"./index-CqVsPxxY.js";const Y={title:"Clipboard/CopyToClipboardIconButton",component:j,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]},fontSize:{control:"select",options:["small","medium","large"]}},args:{value:"Hello, world!",hoverMessage:"Copy to clipboard",progressMessage:"Copying...",successMessage:"Copied!"}},e={args:{size:"small",fontSize:"small"}},r={args:{size:"medium",fontSize:"medium"}},s={args:{size:"large",fontSize:"large"}},o={args:{value:void 0}},a={args:{children:V.jsx(H,{})}},t={args:{hoverMessage:"You should copy this!"}},n={args:{value:async()=>new Promise(b=>{setTimeout(()=>{b("This took a while to generate!")},2e3)})}};var c,m,i;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: 'small',
    fontSize: 'small'
  }
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var l,u,p;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    fontSize: 'medium'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var d,g,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'large',
    fontSize: 'large'
  }
}`,...(S=(g=s.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var z,h,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: undefined
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var f,y,C;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: <PetsIcon />
  }
}`,...(C=(y=a.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var M,T,I;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    hoverMessage: 'You should copy this!'
  }
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var w,x,P;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    value: async () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('This took a while to generate!');
        }, 2000);
      });
    }
  }
}`,...(P=(x=n.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};const _=["Small","Medium","Large","NoValue","CustomIcon","CustomHover","AsyncValue"];export{n as AsyncValue,t as CustomHover,a as CustomIcon,s as Large,r as Medium,o as NoValue,e as Small,_ as __namedExportsOrder,Y as default};
