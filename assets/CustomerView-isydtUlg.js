import{_ as B}from"./NavBar-P0FwWkan.js";import{_ as E,r as m,f as T,g as i,h as F,i as o,c as v,a,j as s,o as r,d as _,q as b,u as A,m as C,F as L,k as j,t as g,l as N,p as M,b as P}from"./index-luPr5Kok.js";import{D as R}from"./index-7BozT64n.js";const k=d=>(M("data-v-2453212f"),d=d(),P(),d),$=k(()=>_("label",{class:"arc-text"},"VER CLIENTE",-1)),z=k(()=>_("br",null,null,-1)),G={class:"campo"},H={__name:"CustomerView",setup(d){const t=m(""),p=m(""),f=m(""),c=m(!1);T(()=>{if(i.getUserLogged().id=="")return F.push("/");i.getAllCustomersByUser().then(e=>{switch(e.status){case 200:f.value=e.data}}).catch(e=>{console.log(e.message)})});const U=()=>{i.getInvoicesForUserAndCustomer(t.value.idCustomer).then(u=>{p.value=u.data,c.value=!c.value}).catch(u=>{console.log(u.message)})};return(u,e)=>{const h=o("v-autocomplete"),n=o("v-text-field"),S=o("v-card-title"),w=o("v-card-subtitle"),x=o("v-btn"),I=o("v-card-actions"),V=o("v-card"),y=o("v-col"),D=o("v-row"),q=o("v-sheet");return r(),v("div",null,[a(B),a(q,{class:"mx-auto"},{default:s(()=>[$,z,_("div",G,[a(h,{modelValue:t.value,"onUpdate:modelValue":e[0]||(e[0]=l=>t.value=l),items:f.value,label:"Cliente",placeholder:"Seleccionar un cliente","item-title":"customerName","item-value":"idCustomer","return-object":""},null,8,["modelValue","items"])]),t.value?(r(),v("button",{key:0,onClick:U},"Ver Datos")):b("",!0),a(A(R),{class:"modal",visible:c.value,"onUpdate:visible":e[6]||(e[6]=l=>c.value=l)},{default:s(()=>[a(n,{modelValue:t.value.customerName,"onUpdate:modelValue":e[1]||(e[1]=l=>t.value.customerName=l),label:"Nombre",rules:[()=>!!u.customerName||"Se requiere este campo"],required:""},null,8,["modelValue","rules"]),a(n,{modelValue:t.value.cuit,"onUpdate:modelValue":e[2]||(e[2]=l=>t.value.cuit=l),label:"CUIT"},null,8,["modelValue"]),a(n,{modelValue:t.value.adress,"onUpdate:modelValue":e[3]||(e[3]=l=>t.value.adress=l),label:"Dirección",rules:[()=>!!u.adress||"Se requiere este campo"],required:""},null,8,["modelValue","rules"]),a(n,{modelValue:t.value.email,"onUpdate:modelValue":e[4]||(e[4]=l=>t.value.email=l),label:"Email"},null,8,["modelValue"]),a(n,{modelValue:t.value.phoneNumber,"onUpdate:modelValue":e[5]||(e[5]=l=>t.value.phoneNumber=l),label:"Teléfono"},null,8,["modelValue"])]),_:1},8,["visible"]),t.value?(r(),C(V,{key:1},{default:s(()=>[a(D,{dense:""},{default:s(()=>[a(y,null,{default:s(()=>[(r(!0),v(L,null,j(p.value,l=>(r(),C(V,{class:"card",color:"#385F73",theme:"dark",key:l.name,cols:"12",sm:"12",md:"6"},{default:s(()=>[a(S,{class:"text-h5"},{default:s(()=>[N(g(l.date),1)]),_:2},1024),a(w,null,{default:s(()=>[N("Total: "+g(l.total),1)]),_:2},1024),a(I,null,{default:s(()=>[a(x,{icon:"mdi-eye",variant:"plain",onClick:u.deleteProduct},null,8,["onClick"])]),_:1})]),_:2},1024))),128))]),_:1})]),_:1})]),_:1})):b("",!0)]),_:1})])}}},Q=E(H,[["__scopeId","data-v-2453212f"]]);export{Q as default};
