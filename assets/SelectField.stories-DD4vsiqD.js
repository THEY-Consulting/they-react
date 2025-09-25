import{j as f}from"./index-BAINcZ39.js";import"./index-DQLiH3RP.js";import{F as v}from"./FormFactory-EE-hfXZ2.js";import"./Map-vmRLmvhD.js";import{P as h}from"./Pets-8M9RJObW.js";import"./index-CJPVTaBz.js";const B={title:"form/SelectField",component:v,parameters:{layout:"centered"},argTypes:{},args:{fields:[{fields:[{type:"select",name:"choice",label:"Choose",options:[{value:"cats",label:"Cats"},{value:"dogs",label:"Dogs"},{value:"birds",label:"Birds"}],sx:{width:200}}]}]}},e={},s={args:{fields:[{fields:[{type:"select",name:"choice",label:"Choose",options:[{value:"cats",label:"Cats"},{value:"dogs",label:"Dogs"},{value:"birds",label:"Birds"}],startAdornment:f.jsx(h,{}),sx:{width:200}}]}]}},a={args:{fields:[{fields:[{type:"select",name:"choice",label:"Choose",options:[{value:"cats",label:"Cats"},{value:"dogs",label:"Dogs"},{value:"birds",label:"Birds"}],sx:{width:200},autocomplete:!0}]}]}},l={args:{formData:{multi:["cats","birds"]},fields:[{fields:[{type:"select",name:"multi",label:"Choose multiple",options:[{value:"cats",label:"Cats"},{value:"dogs",label:"Dogs"},{value:"birds",label:"Birds"}],sx:{width:200},multiple:!0}]}]}};var t,o,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:"{}",...(n=(o=e.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};var r,i,c;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    fields: [{
      fields: [{
        type: 'select',
        name: 'choice',
        label: 'Choose',
        options: [{
          value: 'cats',
          label: 'Cats'
        }, {
          value: 'dogs',
          label: 'Dogs'
        }, {
          value: 'birds',
          label: 'Birds'
        }],
        startAdornment: <PetsIcon />,
        sx: {
          width: 200
        }
      }]
    }]
  }
}`,...(c=(i=s.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    fields: [{
      fields: [{
        type: 'select',
        name: 'choice',
        label: 'Choose',
        options: [{
          value: 'cats',
          label: 'Cats'
        }, {
          value: 'dogs',
          label: 'Dogs'
        }, {
          value: 'birds',
          label: 'Birds'
        }],
        sx: {
          width: 200
        },
        autocomplete: true
      }]
    }]
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,b,g;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    formData: {
      multi: ['cats', 'birds']
    },
    fields: [{
      fields: [{
        type: 'select',
        name: 'multi',
        label: 'Choose multiple',
        options: [{
          value: 'cats',
          label: 'Cats'
        }, {
          value: 'dogs',
          label: 'Dogs'
        }, {
          value: 'birds',
          label: 'Birds'
        }],
        sx: {
          width: 200
        },
        multiple: true
      }]
    }]
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const A=["SelectField","StartAdornment","Autocomplete","Multiple"];export{a as Autocomplete,l as Multiple,e as SelectField,s as StartAdornment,A as __namedExportsOrder,B as default};
