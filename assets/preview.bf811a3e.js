import{a as c,c as h,f as v,L as f,o as n,g as r,F as g,G as w,y as C,l as o,x as i,j as x,T as N,k as y,u as k,D as l}from"./@vue.e79d2345.js";/* empty css                                                            */import{_ as D}from"./index.a61b3eea.js";const S={class:"pre-code-box"},V={key:0,class:"language-html"},b=l("        "),B={class:"language-html"},T=l(`
      `),q={__name:"preview",props:{compName:{type:String,default:"",require:!0},demoName:{type:String,default:"",require:!0}},setup(d){const s=d,e=c(!1),t=c(""),u=h(()=>["iconfont",e.value?"icon-arrow-up-filling":"icon-arrow-down-filling"]),p=()=>{e.value=!e.value},m=async()=>{t.value=await fetch(`/vben-ui/components/${s.compName}/doc/${s.demoName}.vue`).then(a=>a.text())};return v(()=>{m()}),(a,$)=>{const _=f("highlight");return n(),r("div",S,[g(N,{name:"slide-fade"},{default:w(()=>[e.value?C((n(),r("pre",V,[b,o("code",B,i(t.value),1),T])),[[_]]):x("",!0)]),_:1}),o("div",{class:"showCode",onClick:p},[o("i",{class:y(k(u))},null,2),o("span",null,i(e.value?"\u9690\u85CF\u4EE3\u7801":"\u663E\u793A\u4EE3\u7801"),1)])])}}};var F=D(q,[["__scopeId","data-v-ba343786"]]);export{F as p};