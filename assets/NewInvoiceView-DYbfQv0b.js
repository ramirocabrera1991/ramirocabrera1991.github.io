import{_ as U,r as C,a as m,o as x,b as g,c as B,d as n,e as u,f as E,g as t,w as p,v as I,F as w,h as P,i as k,t as b,p as q,j as L}from"./index-i6v4TSru.js";import{N as T}from"./NavBar-tk1zE2nK.js";const r=h=>(q("data-v-f85101ff"),h=h(),L(),h),D={class:"formulario"},F={class:"campo"},M=r(()=>t("label",{for:"cliente"},"Cliente:",-1)),Q=["value"],z={class:"campo"},O=r(()=>t("label",{for:"articulo"},"Artículo:",-1)),j=["value"],J={class:"campo"},$=r(()=>t("label",{for:"cantidad"},"Cantidad:",-1)),G=r(()=>t("hr",null,null,-1)),H={class:"excel-table"},K=r(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,"DETALLE"),t("th")]),t("tr",null,[t("th",null,"Artículo"),t("th",null,"Cantidad"),t("th",null,"Borrar")])],-1)),R={class:"excel-cell"},W={class:"excel-cell"},X=["onClick"],Y={class:"campo"},Z=r(()=>t("label",{for:"total"},"Total:",-1)),ee=r(()=>t("label",{for:"totalQuantity"},"Cantidad TOTAL:",-1)),te={__name:"NewInvoiceView",setup(h){const _=C([]),f=C([]),v=m(""),i=m(""),l=m("1"),s=C([]),c=m(0),d=m(0);x(()=>{if(g.getUserLogged().id=="")return B.push("/");g.getAllCustomersByUser().then(e=>{switch(e.status){case 200:e.data.forEach(o=>{_.push(o)})}}).catch(e=>{console.log(e.message)}),g.getAllProducts().then(e=>{switch(e.status){case 200:e.data.forEach(o=>{f.push(o)})}}).catch(e=>{console.log(e.message)})});const N=()=>{if(i&&l.value>0){const a=f.find(o=>o.idProduct===i.value),e=s.find(o=>o.name==a.name);if(e)e.quantity+=l.value,c.value+=e.cost*l.value,d.value+=l.value;else{const o={product:a,name:a.name,unitPrice:a.unitPrice,cost:a.cost,quantity:l.value};c.value+=a.unitPrice*l.value,d.value+=Number(l.value),s.push(o),i.value="",l.value=1}}else alert("Por favor, complete todos los campos antes de agregar el producto.")},S=()=>{if(!v.value){alert("Por favor, seleccione un cliente.");return}if(s.length==0){alert("Debes cargar al menos 1 producto.");return}const a={user:{idUser:JSON.parse(localStorage.getItem("user")).id},customer:{idCustomer:_.find(e=>e.idCustomer===v.value).idCustomer},listItemsInvoice:s,total:c.value};g.newInvoice(a).then(e=>{switch(e.status){case 200:alert("Factura guardada con exito"),V()}}).catch(e=>{console.log(e.message)}),console.log("Productos finales:",a)},V=()=>{_.value="",f.value="",v.value="",i.value="",l.value="1",s.length=0},A=a=>{s.splice(a,1),c.value=0,d.value=0,s.forEach(e=>{c.value+=e.cost*e.quantity,d.value+=e.quantity})};return(a,e)=>(n(),u("div",null,[E(T),t("div",D,[t("div",F,[M,p(t("select",{id:"cliente","onUpdate:modelValue":e[0]||(e[0]=o=>v.value=o)},[(n(!0),u(w,null,P(_,o=>(n(),u("option",{key:o.idCustomer,value:o.idCustomer},b(o.customerName),9,Q))),128))],512),[[I,v.value]])]),t("div",z,[O,p(t("select",{id:"articulo","onUpdate:modelValue":e[1]||(e[1]=o=>i.value=o)},[(n(!0),u(w,null,P(f,o=>(n(),u("option",{key:o.idProduct,value:o.idProduct},b(o.name),9,j))),128))],512),[[I,i.value]])]),t("div",J,[$,p(t("input",{id:"cantidad","onUpdate:modelValue":e[2]||(e[2]=o=>l.value=o),type:"number",min:"1"},null,512),[[k,l.value,void 0,{number:!0}]])]),t("button",{onClick:N},"Agregar"),G,t("table",H,[K,t("tbody",null,[(n(!0),u(w,null,P(s,(o,y)=>(n(),u("tr",{key:y,class:"excel-row"},[t("td",R,b(o.product.name),1),t("td",W,b(o.quantity),1),t("td",null,[(n(),u("button",{key:y,onClick:oe=>A(y)},"Borrar",8,X))])]))),128))])]),t("div",Y,[Z,p(t("input",{class:"totales",id:"total","onUpdate:modelValue":e[3]||(e[3]=o=>c.value=o),disabled:""},null,512),[[k,c.value]]),ee,p(t("input",{class:"totales",id:"totalQuantity","onUpdate:modelValue":e[4]||(e[4]=o=>d.value=o),disabled:""},null,512),[[k,d.value]])]),t("button",{onClick:S},"Finalizar")])]))}},se=U(te,[["__scopeId","data-v-f85101ff"]]);export{se as default};
