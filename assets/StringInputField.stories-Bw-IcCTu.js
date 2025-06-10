import{j as t}from"./index-DlYN8Jxj.js";import"./index-DUAV1Q2A.js";import{c as x,F as I}from"./FormFactory-CKFXnh9Y.js";import"./Map-BL7i9kxN.js";import"./index-CqVsPxxY.js";const j=x(t.jsx("path",{d:"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"}),"Home"),F=x(t.jsx("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5"}),"Place"),H={title:"form/StringInputField",component:I,parameters:{layout:"centered"},argTypes:{},args:{fields:[{fields:[{type:"string",name:"name",label:"Name"}]}]}},e={},a={args:{formData:{name:"This can be cleared"},fields:[{fields:[{type:"string",name:"name",label:"Name",clearable:!0}]}]}},n={args:{fields:[{fields:[{type:"string",name:"name",label:"Address",startAdornment:t.jsx(j,{})}]}]}},r={args:{fields:[{fields:[{type:"string",name:"name",label:"Location",endAdornment:t.jsx(F,{})}]}]}},s={args:{fields:[{fields:[{type:"string",name:"name",label:"Name",disabled:!0}]}]}};var o,m,d;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var l,c,i;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    formData: {
      name: 'This can be cleared'
    },
    fields: [{
      fields: [{
        type: 'string',
        name: 'name',
        label: 'Name',
        clearable: true
      }]
    }]
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    fields: [{
      fields: [{
        type: 'string',
        name: 'name',
        label: 'Address',
        startAdornment: <HomeIcon />
      }]
    }]
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,b,y;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    fields: [{
      fields: [{
        type: 'string',
        name: 'name',
        label: 'Location',
        endAdornment: <PlaceIcon />
      }]
    }]
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var S,A,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    fields: [{
      fields: [{
        type: 'string',
        name: 'name',
        label: 'Name',
        disabled: true
      }]
    }]
  }
}`,...(h=(A=s.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const L=["StringInputField","Clearable","StartAdornment","EndAdornment","Disabled"];export{a as Clearable,s as Disabled,r as EndAdornment,n as StartAdornment,e as StringInputField,L as __namedExportsOrder,H as default};
