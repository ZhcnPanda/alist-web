import{j as c,R as a,aj as m,ak as r,s as i,I as d,am as o,an as g,ao as h,ap as C,aq as v,ar as E,as as b,at as s,au as y}from"./vendor.c7e6ce0a.js";import{L as f}from"./index.5e724299.js";const O=e=>{var l;const{t}=c();return a.createElement(m,{shadow:"md",p:"2",rounded:"lg",isRequired:e.required},a.createElement(r,null,t(e.label)," ",e.onDelete&&a.createElement(i,{color:"red.300",boxSize:6,_hover:{cursor:"pointer"},as:f,onClick:e.onDelete})),e.type==="string"?a.createElement(d,{isReadOnly:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}):e.type==="text"?a.createElement(o,{isReadOnly:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}}):e.type==="bool"?a.createElement(g,{isReadOnly:e.readOnly,isChecked:e.value,onChange:()=>{e.onChange&&e.onChange()}}):e.type==="select"?a.createElement(h,{isDisabled:e.readOnly,value:e.value,onChange:n=>{e.onChange&&e.onChange(n.target.value)}},a.createElement("option",{value:""},t("select")),(l=e.values)==null?void 0:l.map(n=>a.createElement("option",{key:n,value:n},t(n)))):e.type==="number"?a.createElement(C,{defaultValue:e.value,onChange:(n,u)=>{e.onChange&&e.onChange(u)}},a.createElement(v,null),a.createElement(E,null,a.createElement(b,null),a.createElement(s,null))):null,(e.description||e.onDelete)&&a.createElement(y,null,t(e.description?e.description:"")," ",e.onDelete&&t("Deprecated")))};export{O as F};
