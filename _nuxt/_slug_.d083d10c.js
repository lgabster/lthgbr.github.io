import h from"./ContentRenderer.a36f2aff.js";import{S as f,b as x,U as y,w,o as t,q as s,u as a,M as o,N as n,R as k,O as g,P as v,W as N}from"./entry.b26d9fbc.js";import{u as C,q as b}from"./query.68c16d3f.js";import"./ContentRendererMarkdown.58b0efa5.js";import"./index.a6ef77ff.js";import"./utils.4d87fdeb.js";const O={class:"min-h-screen w-screen bg-white dark:bg-primary"},q={key:0,class:"container prose mx-auto py-20 dark:text-white"},B={class:"flex flex-col"},R={class:"text-6xl text-medium dark:text-white mb-2"},V={class:"text-sm"},$={key:0,class:"flex flex-wrap"},A=["src"],D={key:1,class:"container prose mx-auto py-20"},E={class:"dark:text-white"},j={__name:"[slug]",async setup(S){let r,c;const{locale:i}=f(),{path:T,params:m}=x(),{data:e,refresh:u}=([r,c]=y(async()=>C("references",async()=>await b(`/${i.value}/references`,m.slug).findOne())),r=await r,c(),r);return w(()=>i.value,()=>{u()}),(d,F)=>{var l;const p=h;return t(),s("div",O,[a(e).title?(t(),s("article",q,[o("header",B,[o("h1",R,n(a(e).title),1),o("p",V,n(a(e).date),1)]),k(p,{value:a(e)},null,8,["value"]),(l=a(e).images)!=null&&l.length?(t(),s("div",$,[(t(!0),s(g,null,v(a(e).images,_=>(t(),s("img",{key:_,src:_},null,8,A))),128))])):N("",!0)])):(t(),s("div",D,[o("p",E,n(d.$t("error.NO_CONTENT")),1)]))])}}};export{j as default};