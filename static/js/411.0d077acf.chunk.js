"use strict";(self.webpackChunkrent_a_car=self.webpackChunkrent_a_car||[]).push([[411],{6411:(e,a,s)=>{s.r(a),s.d(a,{default:()=>o});var r=s(5043),l=s(9616),t=s(8256);const n={form_details:"UpdateCar_form_details__FiHd1",update_car:"UpdateCar_update_car__NibrK",car_id:"UpdateCar_car_id__oeCaZ",right:"UpdateCar_right__E2yLj",spinner:"UpdateCar_spinner__QXTgA"};var i=s(4365),c=s(449),d=s(579);const o=()=>{let e;const[a,o]=(0,r.useState)(""),[h,u]=(0,r.useState)("true"),p=(0,r.lazy)((()=>s.e(830).then(s.bind(s,9830)))),{isLoading:_,error:j,sendRequest:x}=(0,t.A)(c.$G),m=e=>{o(e.target.value)},v=e=>{u(e.target.value)},b=()=>{if(a&&h&&+a>=100&&+a<=200&&c.PG.includes(h)){const e={url:"".concat(c.w$,"/").concat(a,"?isAvailable=").concat(h),method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"}};x(e)}};let g=[];const C=JSON.parse(localStorage.getItem(c.$G)||'""');return C&&(g=C.map((e=>e.id)).sort(((e,a)=>e>a?1:-1))),e=_?(0,d.jsx)("div",{className:n.spinner,children:(0,d.jsx)(i.A,{})}):j?(0,d.jsx)(r.Suspense,{fallback:(0,d.jsx)(i.A,{}),children:(0,d.jsx)(p,{message:j})}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Update an existing car"}),(0,d.jsxs)("form",{onSubmit:b,className:n.form_details,children:[(0,d.jsx)("div",{className:n.left,children:g.length>0?(0,d.jsxs)("div",{className:n.car_id,children:[(0,d.jsx)("label",{children:"Please Select Car ID:"}),(0,d.jsxs)("select",{onChange:m,children:[(0,d.jsx)("option",{value:"Please select",children:"Please select"}),g.map((e=>(0,d.jsx)("option",{value:e,children:e},e)))]})]}):(0,d.jsx)(l.A,{label:"Please Enter Car ID:",id:"id",type:"number",min:"100",max:"200",value:a,onChange:m,placeholder:"Please enter car id"})}),(0,d.jsxs)("div",{className:n.right,children:[(0,d.jsx)("label",{children:"Is Car Available?"}),(0,d.jsxs)("select",{required:!0,onChange:v,children:[(0,d.jsx)("option",{value:"true",children:"True"}),(0,d.jsx)("option",{value:"false",children:"False"})]})]}),(0,d.jsx)("div",{className:n.actions,children:(0,d.jsx)("button",{type:"submit",children:"Update"})})]})]}),(0,d.jsx)("div",{className:n.update_car,children:e})}},9616:(e,a,s)=>{s.d(a,{A:()=>t});s(5043);const r="Input_control__CBLWO";var l=s(579);const t=e=>{const{id:a,label:s,...t}=e;return(0,l.jsxs)("p",{className:r,children:[(0,l.jsx)("label",{htmlFor:a,children:s}),(0,l.jsx)("input",{id:a,name:a,required:!0,...t})]})}}}]);
//# sourceMappingURL=411.0d077acf.chunk.js.map