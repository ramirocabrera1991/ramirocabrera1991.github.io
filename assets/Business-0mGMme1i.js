import{_ as w,r as t,f as M,g as _,h as O,i as n,c as P,a as l,j as S,o as R,s as A,l as T,p as D,b as q,d as x}from"./index-Cf10pcfz.js";import{_ as H}from"./NavBar-gTDz9vQE.js";import{H as C}from"./index-NAHCySiJ.js";const g=d=>(D("data-v-423a6ec8"),d=d(),q(),d),j=g(()=>x("label",{class:"arc-text"},"MI EMPRESA",-1)),G=g(()=>x("br",null,null,-1)),L={__name:"Business",setup(d){const U=t(null),u=t(""),s=t(""),m=t(""),i=t(""),r=t(""),v=t(""),c=t(""),p=t(0),b=t(""),V=t("");M(()=>{if(_.getUserLogged().id=="")return O.push("/");_.getBusiness().then(e=>{switch(e.status){case C.Ok:U.value=e.data.idCompany,u.value=e.data.companyName,s.value=e.data.adress,m.value=e.data.phoneNumber,i.value=e.data.email,r.value=e.data.iibb,v.value=e.data.startActivities,c.value=e.data.cuit,p.value=e.data.pointSale,b.value=e.data.concept,V.value=e.data.category;break}}).catch(e=>{})});const y=()=>{if(u.value==""){alert("Por favor, complete el nombre de la empresa.");return}else if(s.value==""){alert("Por favor, complete la direccion de la empresa.");return}const f={idCompany:U.value,companyName:u.value,adress:s.value,phoneNumber:m.value,email:i.value,iibb:r.value,startActivities:v.value,cuit:c.value,pointSale:p.value,concept:b.value,category:V.value};_.setBusiness(f).then(e=>{switch(e.status){case C.Ok:alert("Empresa guardada con exito");break}}).catch(e=>{switch(e.response.status){case C.Conflict:alert("Error dando de alta a la empresa.");break}})};return(f,e)=>{const o=n("v-text-field"),I=n("v-combobox"),N=n("v-autocomplete"),k=n("v-btn"),B=n("v-form"),E=n("v-sheet");return R(),P("div",null,[l(H),l(E,{class:"mx-auto"},{default:S(()=>[j,G,l(B,{"fast-fail":"",onSubmit:e[10]||(e[10]=A(()=>{},["prevent"]))},{default:S(()=>[l(o,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=a=>u.value=a),label:"Nombre",rules:[()=>!!u.value||"Se requiere este campo"],required:""},null,8,["modelValue","rules"]),l(o,{modelValue:c.value,"onUpdate:modelValue":e[1]||(e[1]=a=>c.value=a),label:"CUIT"},null,8,["modelValue"]),l(o,{modelValue:s.value,"onUpdate:modelValue":e[2]||(e[2]=a=>s.value=a),label:"Dirección"},null,8,["modelValue"]),l(o,{modelValue:i.value,"onUpdate:modelValue":e[3]||(e[3]=a=>i.value=a),label:"Email"},null,8,["modelValue"]),l(o,{modelValue:m.value,"onUpdate:modelValue":e[4]||(e[4]=a=>m.value=a),label:"Teléfono"},null,8,["modelValue"]),l(o,{modelValue:r.value,"onUpdate:modelValue":e[5]||(e[5]=a=>r.value=a),label:"Ingresos Brutos"},null,8,["modelValue"]),l(o,{modelValue:v.value,"onUpdate:modelValue":e[6]||(e[6]=a=>v.value=a),label:"Inicio de Actividades"},null,8,["modelValue"]),l(o,{type:"number",modelValue:p.value,"onUpdate:modelValue":e[7]||(e[7]=a=>p.value=a),modelModifiers:{number:!0},min:"0",label:"Punto de Venta"},null,8,["modelValue"]),l(I,{modelValue:b.value,"onUpdate:modelValue":e[8]||(e[8]=a=>b.value=a),items:["1 - PRODUCTOS","2 - SERVICIOS","3 - PROD Y SERV"],label:"Concepto"},null,8,["modelValue"]),l(N,{modelValue:V.value,"onUpdate:modelValue":e[9]||(e[9]=a=>V.value=a),items:["Monotributo","Resp. Inscripto"],label:"Tipo Contribuyente"},null,8,["modelValue","items"]),l(k,{onClick:y,block:"",class:"mt-2"},{default:S(()=>[T("Guardar")]),_:1})]),_:1})]),_:1})])}}},z=w(L,[["__scopeId","data-v-423a6ec8"]]);export{z as default};
