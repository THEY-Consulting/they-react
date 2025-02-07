import"./index-emBAS5MX.js";import{M as ie}from"./Map-CzIIsY2_.js";import"./index-BaMepaDt.js";import"./index-RlH9riET.js";const e=[{name:"Bahnhof P1",city:"Amberg",street:"Kaiser-Ludwig-Ring",houseNumber:"",globalId:"1",latitude:49.446586,longitude:11.863333},{name:"Hauptbahnhof",city:"München",street:"Bahnhofsplatz",houseNumber:"2",globalId:null,latitude:48.139987,longitude:11.560857},{name:"Marienplatz",city:"München",street:"Am Rindermarkt",houseNumber:"16",globalId:"3",latitude:48.136283,longitude:11.574668},{name:"Hauptbahnhof",city:"Kiel",street:"Sophienhof",houseNumber:"32",globalId:null,latitude:54.316044,longitude:10.129132},{name:"Bahnhof",city:"Hamburg",street:"Brauhausstieg",houseNumber:"",globalId:"5",latitude:53.571767,longitude:10.060582},{name:"Hauptbahnhof",city:"Augsburg",street:"Viktoriastraße",houseNumber:"",globalId:null,latitude:48.365794,longitude:10.8867},{name:"City Parkhaus",city:"Passau",street:"Kollerwirtsgasse",houseNumber:"",globalId:"7",latitude:48.575084,longitude:13.454555},{name:"Bahnhof P1",city:"Lindau",street:"Bahnhof",houseNumber:"1e",globalId:null,latitude:47.543496,longitude:9.68095},{name:"Hauptbahnhof",city:"Regensburg",street:"Bahnhofstraße",houseNumber:"18",globalId:"9",latitude:49.012351,longitude:12.101488},{name:"Marienplatz",city:"München",street:"Am Rindermarkt",houseNumber:"16",globalId:"10",latitude:48.136283,longitude:11.574668},{name:"Bahnhof P1",city:"Würzburg",street:"Bahnhofsplatz",houseNumber:"",globalId:null,latitude:49.801156,longitude:9.936565},{name:"Hauptbahnhof",city:"Nürnberg",street:"Bahnhofsplatz",houseNumber:"9",globalId:"12",latitude:49.445616,longitude:11.082228},{name:"Segelmacherstraße",city:"Flensburg",street:"Segelmacherstraße",houseNumber:"2",globalId:"13",latitude:54.791724,longitude:9.432941},{name:"Bahnhof P1",city:"Bad Reichenhall",street:"Heilingbrunnerstraße",houseNumber:"1",globalId:null,latitude:47.724265,longitude:12.880418},{name:"Sophienhof",city:"Kiel",street:"Hopfenstraße",houseNumber:"32",globalId:null,latitude:54.316044,longitude:10.129132}],le=e.filter(a=>a.city==="München"),ce=e.filter(a=>a.latitude>52),pe=e.filter(a=>a.latitude<=52),me=e.filter(a=>["München","Nürnberg","Augsburg","Regensburg","Würzburg","Passau"].includes(a.city)),be={title:"Map/Map",component:ie,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{locations:{control:"object",description:"Array of location objects to display on the map"},enableClustering:{control:"boolean",description:"Enable marker clustering for better visualization with many markers"},mapHeight:{control:"text",description:"Height of the map container"},clusterOptions:{control:"object",description:"Configuration options for marker clustering"}}},r={args:{locations:e,mapHeight:"400px"}},t={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{chunkedLoading:!0,maxClusterRadius:100,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0}}},o={args:{locations:le,mapHeight:"400px"}},s={args:{locations:e,mapHeight:"800px"}},n={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:50,spiderfyOnMaxZoom:!0}}},u={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:200,spiderfyOnMaxZoom:!1}}},i={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{chunkedLoading:!0,maxClusterRadius:150,spiderfyOnMaxZoom:!0,showCoverageOnHover:!1,zoomToBoundsOnClick:!0}}},l={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{chunkedLoading:!0,maxClusterRadius:120,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0}}},c={args:{locations:ce,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:100,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0}}},p={args:{locations:pe,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:100,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0}}},m={args:{locations:me,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:80,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0}}},g={args:{locations:e,mapHeight:"200px"}},d={args:{locations:e,mapHeight:"1000px"}},h={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:300,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!1}}},C={args:{locations:e,enableClustering:!0,mapHeight:"400px",clusterOptions:{maxClusterRadius:80,spiderfyOnMaxZoom:!0,showCoverageOnHover:!0,zoomToBoundsOnClick:!0,chunkedLoading:!1}}};var b,x,O;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '400px'
  }
}`,...(O=(x=r.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var f,H,M;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    }
  }
}`,...(M=(H=t.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var y,v,L;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    locations: munichLocations,
    mapHeight: '400px'
  }
}`,...(L=(v=o.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};var R,k,B;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '800px'
  }
}`,...(B=(k=s.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var S,Z,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true
    }
  }
}`,...(w=(Z=n.parameters)==null?void 0:Z.docs)==null?void 0:w.source}}};var N,z,I;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 200,
      spiderfyOnMaxZoom: false
    }
  }
}`,...(I=(z=u.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var T,A,P;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 150,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true
    }
  }
}`,...(P=(A=i.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var D,E,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      chunkedLoading: true,
      maxClusterRadius: 120,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true
    }
  }
}`,...(G=(E=l.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var K,W,j;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    locations: northernLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true
    }
  }
}`,...(j=(W=c.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var _,F,V;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    locations: southernLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 100,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true
    }
  }
}`,...(V=(F=p.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var q,J,Q;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    locations: bavarianLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 80,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true
    }
  }
}`,...(Q=(J=m.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '200px'
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var $,ee,ae;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '1000px'
  }
}`,...(ae=(ee=d.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,oe;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 300,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: false
    }
  }
}`,...(oe=(te=h.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var se,ne,ue;C.parameters={...C.parameters,docs:{...(se=C.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    enableClustering: true,
    mapHeight: '400px',
    clusterOptions: {
      maxClusterRadius: 80,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: true,
      zoomToBoundsOnClick: true,
      chunkedLoading: false
    }
  }
}`,...(ue=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:ue.source}}};const xe=["Default","WithClustering","MunichArea","TallMap","DenseClusteringMap","SparseClusteringMap","CustomClusterOptions","ClusterCoverageMap","NorthernGermanyMap","SouthernGermanyMap","BavarianMap","CompactMap","ExtraLargeMap","AggressiveClusteringMap","DetailedClusterMap"];export{h as AggressiveClusteringMap,m as BavarianMap,l as ClusterCoverageMap,g as CompactMap,i as CustomClusterOptions,r as Default,n as DenseClusteringMap,C as DetailedClusterMap,d as ExtraLargeMap,o as MunichArea,c as NorthernGermanyMap,p as SouthernGermanyMap,u as SparseClusteringMap,s as TallMap,t as WithClustering,xe as __namedExportsOrder,be as default};
