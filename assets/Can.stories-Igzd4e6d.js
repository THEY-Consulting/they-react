import{j as t}from"./index-DlYN8Jxj.js";import"./index-DUAV1Q2A.js";import{T as m,A as i}from"./FormFactory-CKFXnh9Y.js";import{C as u}from"./Map-BL7i9kxN.js";import"./index-CqVsPxxY.js";const A={title:"auth/Can",component:u,decorators:d=>t.jsx(i,{rules:[{subject:"post",action:"read"}],children:t.jsx(d,{})}),parameters:{layout:"centered"},argTypes:{I:{options:["read","create","update","delete","manage"],control:{type:"select"}},a:{options:["post","comment"],control:{type:"select"}}},args:{children:t.jsx(m,{children:"Access granted"})}},e={args:{I:"read",a:"post"}},r={args:{I:"create",a:"post"}};var s,a,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  // @ts-expect-error how can we provide the correct auth subject?
  args: {
    I: 'read',
    a: 'post'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  // @ts-expect-error how can we provide the correct auth subject?
  args: {
    I: 'create',
    a: 'post'
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const y=["AccessGranted","AccessDenied"];export{r as AccessDenied,e as AccessGranted,y as __namedExportsOrder,A as default};
