import{j as r}from"./index-DlYN8Jxj.js";import"./index-DUAV1Q2A.js";import{c as n,e as Y,B as Z}from"./FormFactory-C4wSxtBe.js";import{I as $}from"./Map-CKR1jYzf.js";import{T as ee}from"./ThemeProvider-D-ebdiKN.js";import"./index-CqVsPxxY.js";const oe=n(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-5h2zm4 0h-2v-3h2zm0-5h-2v-2h2zm4 5h-2V7h2z"}),"Analytics"),re=n(r.jsx("path",{d:"m14 12-2 2-2-2 2-2zm-2-6 2.12 2.12 2.5-2.5L12 1 7.38 5.62l2.5 2.5zm-6 6 2.12-2.12-2.5-2.5L1 12l4.62 4.62 2.5-2.5zm12 0-2.12 2.12 2.5 2.5L23 12l-4.62-4.62-2.5 2.5zm-6 6-2.12-2.12-2.5 2.5L12 23l4.62-4.62-2.5-2.5z"}),"Api"),ae=n(r.jsx("path",{d:"M21.5 14.98c-.02 0-.03 0-.05.01C21.2 13.3 19.76 12 18 12c-1.4 0-2.6.83-3.16 2.02C13.26 14.1 12 15.4 12 17c0 1.66 1.34 3 3 3l6.5-.02c1.38 0 2.5-1.12 2.5-2.5s-1.12-2.5-2.5-2.5M10 4.26v2.09C7.67 7.18 6 9.39 6 12c0 1.77.78 3.34 2 4.44V14h2v6H4v-2h2.73C5.06 16.54 4 14.4 4 12c0-3.73 2.55-6.85 6-7.74M20 6h-2.73c1.43 1.26 2.41 3.01 2.66 5h-2.02c-.23-1.36-.93-2.55-1.91-3.44V10h-2V4h6z"}),"CloudSync"),ne=n(r.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8 14H7v-4h4zm0-6H7V7h4zm6 6h-4v-4h4zm0-6h-4V7h4z"}),"Dataset"),te=n(r.jsx("path",{d:"M2 20h20v-4H2zm2-3h2v2H4zM2 4v4h20V4zm4 3H4V5h2zm-4 7h20v-4H2zm2-3h2v2H4z"}),"Storage"),ce=Y(),ue={title:"IconList/IconList",component:$,decorators:[X=>r.jsx(ee,{theme:ce,children:r.jsx(Z,{sx:{padding:2,maxWidth:500},children:r.jsx(X,{})})})],parameters:{layout:"centered"},argTypes:{title:{control:"text",description:"Title of the icon list"},maxWidth:{control:"number",description:"Maximum width of the icon list"},maxHeight:{control:"number",description:"Maximum height of the icon list"},theme:{control:"object",description:"Theme configuration for colors, elevation, etc.",table:{type:{summary:"icon list Theme",detail:`{
  header?: {
    backgroundColor?: string;
    textColor?: string;
  };
  card?: {
    backgroundColor?: string;
    borderColor?: string;
    elevation?: number;
  };
  content?: {
    backgroundColor?: string; 
  };
}`}}}}},o={database:r.jsx(ne,{}),cloud:r.jsx(ae,{}),api:r.jsx(re,{}),storage:r.jsx(te,{}),analytics:r.jsx(oe,{})},e={coral:"#E85A4F",golden:"#F4D35E",navy:"#2C3E50",teal:"#34495E"},K=()=>[{id:"postgres-db",name:"PostgreSQL Database",description:"Primary application database",active:!0,icon:o.database},{id:"cloud-storage",name:"Cloud Storage",description:"File and document storage",active:!1,icon:o.cloud},{id:"rest-api",name:"REST API",description:"External service integration",active:!0,icon:o.api},{id:"local-storage",name:"Local Storage",description:"Browser local storage",active:!1,icon:o.storage}],a=()=>[{id:"postgres-db",name:"PostgreSQL Database",description:"Primary application database",active:!0,icon:o.database,color:e.navy},{id:"cloud-storage",name:"Cloud Storage",description:"File and document storage",active:!1,icon:o.cloud,color:e.coral},{id:"rest-api",name:"REST API",description:"External service integration",active:!0,icon:o.api,color:e.golden},{id:"local-storage",name:"Local Storage",description:"Browser local storage",active:!1,icon:o.storage,color:e.teal}],t={args:{sources:K(),title:"Data Sources"}},c={args:{sources:[],title:"No Data Available"}},s={args:{sources:a(),title:"Atlas Brand Colors"}},i={args:{sources:a(),title:"Custom Themed icon list",theme:{header:{backgroundColor:e.navy,textColor:"#FFFFFF"},card:{backgroundColor:"#F8F9FA",elevation:12},content:{backgroundColor:"#FFFFFF"}}}},l={args:{sources:a(),title:"Atlas Brand Theme",theme:{header:{backgroundColor:e.coral,textColor:"#FFFFFF"},card:{backgroundColor:"#FFF8F6",borderColor:e.coral,elevation:6},content:{backgroundColor:"#FFFFFF"}}}},d={args:{sources:a(),title:"Minimal Theme",theme:{header:{backgroundColor:"#FAFAFA",textColor:e.navy},card:{backgroundColor:"#FFFFFF",borderColor:"#E0E0E0",elevation:1}}}},m={args:{sources:[{id:"failed-db",name:"Database Connection",description:"Connection failed",active:!1,icon:o.database,color:e.coral},{id:"maintenance-api",name:"API Service",description:"Under maintenance",active:!1,icon:o.api,color:e.golden}],title:"System Status",theme:{header:{backgroundColor:e.coral,textColor:"#FFFFFF"},card:{backgroundColor:"#FFF8F6",elevation:8},content:{backgroundColor:"#FFFFFF"}}}},F={args:{sources:[{id:"primary-db",name:"Primary Database",description:"MySQL cluster healthy",active:!0,icon:o.database,color:e.navy},{id:"backup-db",name:"Backup Database",description:"Replication in sync",active:!0,icon:o.database,color:e.teal},{id:"cdn",name:"CDN Network",description:"Global distribution active",active:!0,icon:o.cloud,color:e.golden},{id:"monitoring",name:"Monitoring Service",description:"All metrics collected",active:!0,icon:o.analytics,color:e.coral}],title:"Service Health",theme:{header:{backgroundColor:e.navy,textColor:"#FFFFFF"},card:{backgroundColor:"#F8F9FA",elevation:4}}}},u={args:{sources:a(),title:"Compact View",maxWidth:280,maxHeight:200,theme:{header:{backgroundColor:e.coral,textColor:"#FFFFFF"},card:{backgroundColor:"#FFF8F6",elevation:4}}}},g={args:{sources:K()}},p={args:{sources:a(),theme:{card:{backgroundColor:"#F8F9FA",borderColor:e.coral,elevation:2},content:{backgroundColor:"#FFFFFF"}}}};var h,C,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    sources: createMocksources(),
    title: 'Data Sources'
  }
}`,...(b=(C=t.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,v,A;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    sources: [],
    title: 'No Data Available'
  }
}`,...(A=(v=c.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var k,x,L;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    title: 'Atlas Brand Colors'
  }
}`,...(L=(x=s.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var T,O,y;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    title: 'Custom Themed icon list',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.navy,
        textColor: '#FFFFFF'
      },
      card: {
        backgroundColor: '#F8F9FA',
        elevation: 12
      },
      content: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
}`,...(y=(O=i.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};var f,z,H;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    title: 'Atlas Brand Theme',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF'
      },
      card: {
        backgroundColor: '#FFF8F6',
        borderColor: ATLAS_COLORS.coral,
        elevation: 6
      },
      content: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
}`,...(H=(z=l.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var D,I,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    title: 'Minimal Theme',
    theme: {
      header: {
        backgroundColor: '#FAFAFA',
        textColor: ATLAS_COLORS.navy
      },
      card: {
        backgroundColor: '#FFFFFF',
        borderColor: '#E0E0E0',
        elevation: 1
      }
    }
  }
}`,...(M=(I=d.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var R,E,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    sources: [{
      id: 'failed-db',
      name: 'Database Connection',
      description: 'Connection failed',
      active: false,
      icon: ICONS.database,
      color: ATLAS_COLORS.coral
    }, {
      id: 'maintenance-api',
      name: 'API Service',
      description: 'Under maintenance',
      active: false,
      icon: ICONS.api,
      color: ATLAS_COLORS.golden
    }],
    title: 'System Status',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF'
      },
      card: {
        backgroundColor: '#FFF8F6',
        elevation: 8
      },
      content: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var j,W,N;F.parameters={...F.parameters,docs:{...(j=F.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    sources: [{
      id: 'primary-db',
      name: 'Primary Database',
      description: 'MySQL cluster healthy',
      active: true,
      icon: ICONS.database,
      color: ATLAS_COLORS.navy
    }, {
      id: 'backup-db',
      name: 'Backup Database',
      description: 'Replication in sync',
      active: true,
      icon: ICONS.database,
      color: ATLAS_COLORS.teal
    }, {
      id: 'cdn',
      name: 'CDN Network',
      description: 'Global distribution active',
      active: true,
      icon: ICONS.cloud,
      color: ATLAS_COLORS.golden
    }, {
      id: 'monitoring',
      name: 'Monitoring Service',
      description: 'All metrics collected',
      active: true,
      icon: ICONS.analytics,
      color: ATLAS_COLORS.coral
    }],
    title: 'Service Health',
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.navy,
        textColor: '#FFFFFF'
      },
      card: {
        backgroundColor: '#F8F9FA',
        elevation: 4
      }
    }
  }
}`,...(N=(W=F.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var B,V,P;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    title: 'Compact View',
    maxWidth: 280,
    maxHeight: 200,
    theme: {
      header: {
        backgroundColor: ATLAS_COLORS.coral,
        textColor: '#FFFFFF'
      },
      card: {
        backgroundColor: '#FFF8F6',
        elevation: 4
      }
    }
  }
}`,...(P=(V=u.parameters)==null?void 0:V.docs)==null?void 0:P.source}}};var w,Q,G;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    sources: createMocksources()
  }
}`,...(G=(Q=g.parameters)==null?void 0:Q.docs)==null?void 0:G.source}}};var U,q,J;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    sources: createAtlasColoredsources(),
    theme: {
      card: {
        backgroundColor: '#F8F9FA',
        borderColor: ATLAS_COLORS.coral,
        elevation: 2
      },
      content: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};const ge=["Default","Emptysources","WithAtlasColors","WithCustomTheme","AtlasBrandTheme","MinimalTheme","WarningTheme","HealthDashboard","CompactSize","WithoutHeader","HeaderlessWithTheme"];export{l as AtlasBrandTheme,u as CompactSize,t as Default,c as Emptysources,p as HeaderlessWithTheme,F as HealthDashboard,d as MinimalTheme,m as WarningTheme,s as WithAtlasColors,i as WithCustomTheme,g as WithoutHeader,ge as __namedExportsOrder,ue as default};
