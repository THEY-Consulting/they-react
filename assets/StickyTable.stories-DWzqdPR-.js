import{j as x}from"./index-BWfIisTF.js";import"./index-YTOF1_EJ.js";import{S as K,B as ae}from"./StickyTable-C4CbpaO1.js";import{f as h}from"./index-B5ZI-g0m.js";import"./index-B3O5BJN8.js";const $=Symbol.for("constructDateFrom");function oe(e,t){return typeof e=="function"?e(t):e&&typeof e=="object"&&$ in e?e[$](t):e instanceof Date?new e.constructor(t):new Date(t)}function se(e,t){return oe(e,e)}function n(e,t){const r=e<0?"-":"",a=Math.abs(e).toString().padStart(t,"0");return r+a}function s(e,t){const r=se(e);if(isNaN(+r))throw new RangeError("Invalid time value");let a="",S="";const y="-",Q=":";{const o=n(r.getDate(),2),w=n(r.getMonth()+1,2);a=`${n(r.getFullYear(),4)}${y}${w}${y}${o}`}{const o=r.getTimezoneOffset();if(o!==0){const b=Math.abs(o),re=n(Math.trunc(b/60),2),ne=n(b%60,2);S=`${o<0?"+":"-"}${re}:${ne}`}else S="Z";const w=n(r.getHours(),2),D=n(r.getMinutes(),2),X=n(r.getSeconds(),2),ee=a===""?"":"T",te=[w,D,X].join(Q);a=`${a}${ee}${te}${S}`}return a}const ce=(e,t)=>t("format.currency",{value:e}),ie=(e,t)=>{try{return t("format.date",{value:new Date(e)})}catch{return console.error(`Could not format date: ${e}`),""}},me=(e,t)=>{try{const r=t("format.dateTime",{date:new Date(e)});return r.startsWith("01.01.0001")?"":r}catch{return console.error(`Could not format date: ${e}`),""}},he={title:"table/StickyTable",component:K,parameters:{layout:"centered"},argTypes:{},args:{columns:[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"}],data:[{firstName:"John",lastName:"Doe"},{firstName:"Jane",lastName:"Doe"}]}},c={args:{}},i={args:{data:[]}},m={args:{data:[],noEntriesMessage:"Nothing here!"}},u={args:{isPending:!0},render:e=>x.jsx(ae,{sx:{width:200},children:x.jsx(K,{...e})})},d={args:{error:new Error("Something went wrong")}},p={args:{sx:{height:400},data:Array.from({length:100},(e,t)=>({firstName:`John ${t}`,lastName:`Doe ${t}`}))}},f={args:{onView:h()}},g={args:{onView:h(),onAdd:h(),onEdit:h()}},l={args:{columns:[{name:"item",label:"Item",format:e=>e.toUpperCase()},{name:"date",label:"Date",format:ie},{name:"price",label:"Price",format:ce},{name:"since",label:"Since",format:me}],data:[{item:"apple",date:s(new Date),price:1.23,since:s(new Date)},{item:"banana",date:s(new Date),price:2.345,since:s(new Date)}]}};var E,N,O;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {}
}`,...(O=(N=c.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var T,A,C;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,F,M;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    data: [],
    noEntriesMessage: 'Nothing here!'
  }
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var W,j,P;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(P=(j=u.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var V,k,_;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    error: new Error('Something went wrong')
  }
}`,...(_=(k=d.parameters)==null?void 0:k.docs)==null?void 0:_.source}}};var B,J,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(z=(J=p.parameters)==null?void 0:J.docs)==null?void 0:z.source}}};var L,R,U;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    onView: fn()
  }
}`,...(U=(R=f.parameters)==null?void 0:R.docs)==null?void 0:U.source}}};var Z,H,Y;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    onView: fn(),
    onAdd: fn(),
    onEdit: fn()
  }
}`,...(Y=(H=g.parameters)==null?void 0:H.docs)==null?void 0:Y.source}}};var q,v,G;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(G=(v=l.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};const Se=["Table","Empty","CustomEmpty","Pending","WithError","Sticky","WithViewActions","WithEditActions","Formatter"];export{m as CustomEmpty,i as Empty,l as Formatter,u as Pending,p as Sticky,c as Table,g as WithEditActions,d as WithError,f as WithViewActions,Se as __namedExportsOrder,he as default};
