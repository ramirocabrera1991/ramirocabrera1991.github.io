import{_ as C,r as l,f as N,g as d,h as b,i as r,c as S,a as t,d as f,j as _,F as I,o as R,s as k,l as q,p as y,b as j}from"./index-KQTsTaLX.js";import{_ as A}from"./NavBar-N9hffaWG.js";const w=n=>(y("data-v-8a24e634"),n=n(),j(),n),B=w(()=>f("label",{class:"arc-text"},"NUEVO MATERIAL",-1)),E=w(()=>f("br",null,null,-1)),L={__name:"NewRawMaterial",setup(n){const o=l(""),u=l(0),i=l(1),s=l(""),m=l([]),c=l(""),V=l([]);N(()=>{if(d.getUserLogged().id=="")return b.push("/");d.getMeasurementUnit().then(e=>{switch(e.status){case 200:V.value=e.data}}).catch(e=>{console.log(e.message)}),d.getAllProviders().then(e=>{switch(e.status){case 200:m.value=e.data,m.value.length==0&&(alert("Debe agregar primero proveedores."),b.push("/newProvider"))}}).catch(e=>{console.log(e.message)})});const U=()=>{if(o.value==""){alert("Por favor, complete la descripción del material.");return}else if(s.value==""){alert("Por favor, seleccione un proveedor.");return}const v={idRawMaterial:null,name:o.value.toUpperCase(),quantity:u.value,cost:i.value,provider:s.value,measurementUnit:c.value.toLocaleUpperCase(),input:null};d.newRawMaterial(v).then(e=>{switch(e.status){case 200:alert("Material guardado con exito"),h()}}).catch(e=>{console.log(e.message)})},h=()=>{o.value="",u.value=0,i.value=1,s.value=""};return(v,e)=>{const p=r("v-text-field"),g=r("v-autocomplete"),M=r("v-btn"),x=r("v-form"),P=r("v-sheet");return R(),S(I,null,[t(A),f("div",null,[t(P,{class:"mx-auto"},{default:_(()=>[B,E,t(x,{"fast-fail":"",onSubmit:e[5]||(e[5]=k(()=>{},["prevent"]))},{default:_(()=>[t(p,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),label:"Descripción",rules:[()=>!!o.value||"Se requiere este campo"],required:""},null,8,["modelValue","rules"]),t(p,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a),type:"number",min:"0",label:"Cantidad"},null,8,["modelValue"]),t(p,{modelValue:i.value,"onUpdate:modelValue":e[2]||(e[2]=a=>i.value=a),type:"number",min:"1",label:"Costo"},null,8,["modelValue"]),t(g,{modelValue:s.value,"onUpdate:modelValue":e[3]||(e[3]=a=>s.value=a),items:m.value,label:"Proveedor",placeholder:"Seleccionar un Proveedor","item-title":"providerName","item-value":"idProvider","return-object":""},null,8,["modelValue","items"]),t(g,{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=a=>c.value=a),items:V.value,label:"Unidad de Medida",placeholder:"Seleccionar una unidad de medida","item-title":"measurementUnit","item-value":"description","return-object":""},null,8,["modelValue","items"]),t(M,{onClick:U,block:"",class:"mt-2"},{default:_(()=>[q("Guardar")]),_:1})]),_:1})]),_:1})])],64)}}},T=C(L,[["__scopeId","data-v-8a24e634"]]);export{T as default};
