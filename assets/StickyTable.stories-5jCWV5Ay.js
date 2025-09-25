import{j as u}from"./index-BAINcZ39.js";import"./index-DQLiH3RP.js";import{f as r,a as q,b as H,d as K,B as Q}from"./FormFactory-EE-hfXZ2.js";import{S as z}from"./Map-vmRLmvhD.js";import{f as p}from"./index-D_Ss_HUe.js";import"./index-CJPVTaBz.js";const ne={title:"table/StickyTable",component:z,parameters:{layout:"centered"},argTypes:{},args:{columns:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],data:[{firstName:"John",lastName:"Doe"},{firstName:"Jane",lastName:"Doe"}]}},n={args:{}},t={args:{data:[]}},o={args:{data:[],noEntriesMessage:"Nothing here!"}},s={args:{isPending:!0},render:e=>u.jsx(Q,{sx:{width:200},children:u.jsx(z,{...e})})},m={args:{error:new Error("Something went wrong")}},i={args:{sx:{height:400},data:Array.from({length:100},(e,a)=>({firstName:`John ${a}`,lastName:`Doe ${a}`}))}},c={args:{onView:p()}},d={args:{onView:p(),onAdd:p(),onEdit:p()}},l={args:{columns:[{name:"item",label:"Item",format:e=>e.toUpperCase()},{name:"date",label:"Date",format:q},{name:"price",label:"Price",format:H},{name:"since",label:"Since",format:K},{name:"item",label:"Combined",format:(e,a,G)=>`${e} (${G.price})`}],data:[{item:"apple",date:r(new Date),price:1.23,since:r(new Date)},{item:"banana",date:r(new Date),price:2.345,since:r(new Date)}]}},g={args:{columns:[{name:"name",label:"Name",sortable:!0},{name:"age",label:"Age",sortable:!0},{name:"score",label:"Score",sortable:!0,sortFunction:(e,a)=>a-e},{name:"date",label:"Date",sortable:!0,format:q}],data:[{name:"Alice Johnson",age:28,score:95,date:"2024-01-15"},{name:"Bob Smith",age:34,score:87,date:"2024-02-20"},{name:"Charlie Brown",age:22,score:92,date:"2024-01-10"},{name:"Diana Prince",age:31,score:98,date:"2024-03-05"},{name:"Edward Norton",age:29,score:89,date:"2024-02-28"}]}};var b,f,S;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {}
}`,...(S=(f=n.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var h,w,D;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(D=(w=t.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var E,N,y;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    data: [],
    noEntriesMessage: 'Nothing here!'
  }
}`,...(y=(N=o.parameters)==null?void 0:N.docs)==null?void 0:y.source}}};var x,A,C;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(A=s.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var T,B,P;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    error: new Error('Something went wrong')
  }
}`,...(P=(B=m.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,$,F;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(F=($=i.parameters)==null?void 0:$.docs)==null?void 0:F.source}}};var I,J,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    onView: fn()
  }
}`,...(O=(J=c.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};var V,_,k;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    onView: fn(),
    onAdd: fn(),
    onEdit: fn()
  }
}`,...(k=(_=d.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var j,v,M;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'item',
      label: 'Item',
      format: (value: string) => value.toUpperCase()
    }, {
      name: 'date',
      label: 'Date',
      format: formatDateString
    }, {
      name: 'price',
      label: 'Price',
      format: formatCurrency
    }, {
      name: 'since',
      label: 'Since',
      format: formatDateTimeString
    }, {
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
}`,...(M=(v=l.parameters)==null?void 0:v.docs)==null?void 0:M.source}}};var U,L,R;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    columns: [{
      name: 'name',
      label: 'Name',
      sortable: true
    }, {
      name: 'age',
      label: 'Age',
      sortable: true
    }, {
      name: 'score',
      label: 'Score',
      sortable: true,
      // Custom sort function for descending score by default
      sortFunction: (a: number, b: number) => b - a
    }, {
      name: 'date',
      label: 'Date',
      sortable: true,
      format: formatDateString
    }],
    data: [{
      name: 'Alice Johnson',
      age: 28,
      score: 95,
      date: '2024-01-15'
    }, {
      name: 'Bob Smith',
      age: 34,
      score: 87,
      date: '2024-02-20'
    }, {
      name: 'Charlie Brown',
      age: 22,
      score: 92,
      date: '2024-01-10'
    }, {
      name: 'Diana Prince',
      age: 31,
      score: 98,
      date: '2024-03-05'
    }, {
      name: 'Edward Norton',
      age: 29,
      score: 89,
      date: '2024-02-28'
    }]
  }
}`,...(R=(L=g.parameters)==null?void 0:L.docs)==null?void 0:R.source}}};const te=["Table","Empty","CustomEmpty","Pending","WithError","Sticky","WithViewActions","WithEditActions","Formatter","WithSorting"];export{o as CustomEmpty,t as Empty,l as Formatter,s as Pending,i as Sticky,n as Table,d as WithEditActions,m as WithError,g as WithSorting,c as WithViewActions,te as __namedExportsOrder,ne as default};
