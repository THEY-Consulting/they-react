import{j as l}from"./index-DlYN8Jxj.js";import"./index-DUAV1Q2A.js";import{f as r,a as L,b as R,d as q,B as z}from"./FormFactory-C4wSxtBe.js";import{S as M}from"./Map-CKR1jYzf.js";import{f as d}from"./index-cNkFZXRj.js";import"./index-CqVsPxxY.js";const Z={title:"table/StickyTable",component:M,parameters:{layout:"centered"},argTypes:{},args:{columns:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],data:[{firstName:"John",lastName:"Doe"},{firstName:"Jane",lastName:"Doe"}]}},a={args:{}},t={args:{data:[]}},n={args:{data:[],noEntriesMessage:"Nothing here!"}},s={args:{isPending:!0},render:e=>l.jsx(z,{sx:{width:200},children:l.jsx(M,{...e})})},o={args:{error:new Error("Something went wrong")}},m={args:{sx:{height:400},data:Array.from({length:100},(e,g)=>({firstName:`John ${g}`,lastName:`Doe ${g}`}))}},i={args:{onView:d()}},c={args:{onView:d(),onAdd:d(),onEdit:d()}},p={args:{columns:[{name:"item",label:"Item",format:e=>e.toUpperCase()},{name:"date",label:"Date",format:L},{name:"price",label:"Price",format:R},{name:"since",label:"Since",format:q},{name:"item",label:"Combined",format:(e,g,U)=>`${e} (${U.price})`}],data:[{item:"apple",date:r(new Date),price:1.23,since:r(new Date)},{item:"banana",date:r(new Date),price:2.345,since:r(new Date)}]}};var u,f,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {}
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var w,S,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(b=(S=t.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,x,D;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    data: [],
    noEntriesMessage: 'Nothing here!'
  }
}`,...(D=(x=n.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var E,N,T;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isPending: true
  },
  render: args => {
    return <Box sx={{
      width: 200
    }}>
        <StickyTable {...args} />
      </Box>;
  }
}`,...(T=(N=s.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var A,C,$;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    error: new Error('Something went wrong')
  }
}`,...($=(C=o.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var I,O,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    sx: {
      height: 400
    },
    data: Array.from({
      length: 100
    }, (_, i) => ({
      firstName: \`John \${i}\`,
      lastName: \`Doe \${i}\`
    }))
  }
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,W,_;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onView: fn()
  }
}`,...(_=(W=i.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var k,F,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onView: fn(),
    onAdd: fn(),
    onEdit: fn()
  }
}`,...(j=(F=c.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var B,J,v;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    columns: [
    // @ts-expect-error we change the data structure for this story
    {
      name: 'item',
      label: 'Item',
      format: (value: string) => value.toUpperCase()
    },
    // @ts-expect-error we change the data structure for this story
    {
      name: 'date',
      label: 'Date',
      format: formatDateString
    },
    // @ts-expect-error we change the data structure for this story
    {
      name: 'price',
      label: 'Price',
      format: formatCurrency
    },
    // @ts-expect-error we change the data structure for this story
    {
      name: 'since',
      label: 'Since',
      format: formatDateTimeString
    },
    // @ts-expect-error we change the data structure for this story
    {
      name: 'item',
      label: 'Combined',
      format: (item: string, _: TFunction, row: FormattingTableEntity) => \`\${item} (\${row.price})\`
    }],
    data: [{
      item: 'apple',
      date: formatISO(new Date()),
      price: 1.23,
      since: formatISO(new Date())
    }, {
      item: 'banana',
      date: formatISO(new Date()),
      price: 2.345,
      since: formatISO(new Date())
    }]
  }
}`,...(v=(J=p.parameters)==null?void 0:J.docs)==null?void 0:v.source}}};const ee=["Table","Empty","CustomEmpty","Pending","WithError","Sticky","WithViewActions","WithEditActions","Formatter"];export{n as CustomEmpty,t as Empty,p as Formatter,s as Pending,m as Sticky,a as Table,c as WithEditActions,o as WithError,i as WithViewActions,ee as __namedExportsOrder,Z as default};
