import{j as e}from"./index-DlYN8Jxj.js";import{r as d}from"./index-DUAV1Q2A.js";import{F as n}from"./FormFactory-AMQ9np-W.js";import"./Map-Ckic9_Pp.js";import"./index-CqVsPxxY.js";const y={title:"form/FormWatcher",component:n,parameters:{layout:"centered"},argTypes:{},args:{fields:[{fields:[{type:"string",name:"name",label:"Name"},{type:"string",name:"street",label:"Street"}]}]}},r={render:o=>{const[l,i]=d.useState(""),c=(...m)=>{i(JSON.stringify(m,null,2))};return e.jsxs(e.Fragment,{children:[e.jsx(n,{fields:o.fields,onChange:c}),e.jsx("pre",{style:{backgroundColor:"#fafafa",padding:"16px"},children:l})]})}};var t,a,s;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState<string>('');
    const watcher: WatchObserver<Entity> = (...args) => {
      setValue(JSON.stringify(args, null, 2));
    };
    return <>
        <FormFactory<Entity> fields={args.fields as never as FormFields<Entity>} onChange={watcher} />
        <pre style={{
        backgroundColor: '#fafafa',
        padding: '16px'
      }}>{value}</pre>
      </>;
  }
}`,...(s=(a=r.parameters)==null?void 0:a.docs)==null?void 0:s.source}}};const x=["FormWatcher"];export{r as FormWatcher,x as __namedExportsOrder,y as default};
