import{j as s}from"./index-BaMepaDt.js";import"./index-emBAS5MX.js";import{C as m,T as i,A as u}from"./Map-CzIIsY2_.js";import"./index-RlH9riET.js";const j={title:"auth/Can",component:m,decorators:d=>s.jsx(u,{rules:[{subject:"post",action:"read"}],children:s.jsx(d,{})}),parameters:{layout:"centered"},argTypes:{I:{options:["read","create","update","delete","manage"],control:{type:"select"}},a:{options:["post","comment"],control:{type:"select"}}},args:{children:s.jsx(i,{children:"Access granted"})}},e={args:{I:"read",a:"post"}},r={args:{I:"create",a:"post"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const A=["AccessGranted","AccessDenied"];export{r as AccessDenied,e as AccessGranted,A as __namedExportsOrder,j as default};
