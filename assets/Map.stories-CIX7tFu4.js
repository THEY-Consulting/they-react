import"./index-DUAV1Q2A.js";import"./FormFactory-CKFXnh9Y.js";import{M as T}from"./Map-BL7i9kxN.js";import"./index-DlYN8Jxj.js";import"./index-CqVsPxxY.js";const e=[{name:"Bahnhof P1",city:"Amberg",street:"Kaiser-Ludwig-Ring",houseNumber:"",globalId:"1",latitude:49.446586,longitude:11.863333},{name:"Hauptbahnhof",city:"München",street:"Bahnhofsplatz",houseNumber:"2",globalId:null,latitude:48.139987,longitude:11.560857},{name:"Marienplatz",city:"München",street:"Am Rindermarkt",houseNumber:"16",globalId:"3",latitude:48.136283,longitude:11.574668},{name:"Hauptbahnhof",city:"Kiel",street:"Sophienhof",houseNumber:"32",globalId:null,latitude:54.316044,longitude:10.129132},{name:"Bahnhof",city:"Hamburg",street:"Brauhausstieg",houseNumber:"",globalId:"5",latitude:53.571767,longitude:10.060582},{name:"Hauptbahnhof",city:"Augsburg",street:"Viktoriastraße",houseNumber:"",globalId:null,latitude:48.365794,longitude:10.8867},{name:"City Parkhaus",city:"Passau",street:"Kollerwirtsgasse",houseNumber:"",globalId:"7",latitude:48.575084,longitude:13.454555},{name:"Bahnhof P1",city:"Lindau",street:"Bahnhof",houseNumber:"1e",globalId:null,latitude:47.543496,longitude:9.68095},{name:"Hauptbahnhof",city:"Regensburg",street:"Bahnhofstraße",houseNumber:"18",globalId:"9",latitude:49.012351,longitude:12.101488},{name:"Marienplatz",city:"München",street:"Am Rindermarkt",houseNumber:"16",globalId:"10",latitude:48.136283,longitude:11.574668},{name:"Bahnhof P1",city:"Würzburg",street:"Bahnhofsplatz",houseNumber:"",globalId:null,latitude:49.801156,longitude:9.936565},{name:"Hauptbahnhof",city:"Nürnberg",street:"Bahnhofsplatz",houseNumber:"9",globalId:"12",latitude:49.445616,longitude:11.082228},{name:"Segelmacherstraße",city:"Flensburg",street:"Segelmacherstraße",houseNumber:"2",globalId:"13",latitude:54.791724,longitude:9.432941},{name:"Bahnhof P1",city:"Bad Reichenhall",street:"Heilingbrunnerstraße",houseNumber:"1",globalId:null,latitude:47.724265,longitude:12.880418},{name:"Sophienhof",city:"Kiel",street:"Hopfenstraße",houseNumber:"32",globalId:null,latitude:54.316044,longitude:10.129132}],w=e.filter(a=>a.city==="München"),D=e.filter(a=>a.latitude>52),W=e.filter(a=>a.latitude<=52),_=e.filter(a=>["München","Nürnberg","Augsburg","Regensburg","Würzburg","Passau"].includes(a.city)),Q={title:"Map/Map",component:T,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{locations:{control:"object",description:"Array of location objects to display on the map"},center:{control:"object",description:"Center coordinates of the map as [latitude, longitude]"},mapHeight:{control:"text",description:"Height of the map container"}}},t={args:{locations:e}},o={args:{locations:w,center:[48.137154,11.576124],mapHeight:"400px"}},r={args:{locations:e,mapHeight:"800px"}},n={args:{locations:D,mapHeight:"400px"}},s={args:{locations:W,mapHeight:"400px"}},i={args:{locations:_,center:[48.7904,11.4979],mapHeight:"400px"}},c={args:{locations:e,mapHeight:"200px"}},l={args:{locations:e,mapHeight:"1000px"}},u={args:{locations:e,center:[49.4521,11.0767],mapHeight:"400px"}};var p,m,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations
  }
}`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,d,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    locations: munichLocations,
    center: [48.137154, 11.576124],
    mapHeight: '400px'
  }
}`,...(b=(d=o.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};var f,y,H;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '800px'
  }
}`,...(H=(y=r.parameters)==null?void 0:y.docs)==null?void 0:H.source}}};var M,x,N;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    locations: northernLocations,
    mapHeight: '400px'
  }
}`,...(N=(x=n.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var L,I,S;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    locations: southernLocations,
    mapHeight: '400px'
  }
}`,...(S=(I=s.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var B,A,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    locations: bavarianLocations,
    center: [48.7904, 11.4979],
    mapHeight: '400px'
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var z,P,R;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '200px'
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};var k,v,G;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    mapHeight: '1000px'
  }
}`,...(G=(v=l.parameters)==null?void 0:v.docs)==null?void 0:G.source}}};var K,j,E;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    locations: sampleLocations,
    center: [49.4521, 11.0767],
    mapHeight: '400px'
  }
}`,...(E=(j=u.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};const U=["Default","MunichArea","TallMap","NorthernGermanyMap","SouthernGermanyMap","BavarianMap","CompactMap","ExtraLargeMap","CustomCenter"];export{i as BavarianMap,c as CompactMap,u as CustomCenter,t as Default,l as ExtraLargeMap,o as MunichArea,n as NorthernGermanyMap,s as SouthernGermanyMap,r as TallMap,U as __namedExportsOrder,Q as default};
