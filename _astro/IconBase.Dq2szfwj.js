import{r as i,R as u}from"./index.Bs6cAnji.js";const j=i.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var R=Object.defineProperty,a=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(r,l,e)=>l in r?R(r,l,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[l]=e,m=(r,l)=>{for(var e in l||(l={}))v.call(l,e)&&g(r,e,l[e]);if(a)for(var e of a(l))d.call(l,e)&&g(r,e,l[e]);return r},w=(r,l)=>{var e={};for(var t in r)v.call(r,t)&&l.indexOf(t)<0&&(e[t]=r[t]);if(r!=null&&a)for(var t of a(r))l.indexOf(t)<0&&d.call(r,t)&&(e[t]=r[t]);return e};const h=i.forwardRef((r,l)=>{const e=r,{alt:t,color:n,size:o,weight:c,mirrored:p,children:b,weights:x}=e,y=w(e,["alt","color","size","weight","mirrored","children","weights"]),s=i.useContext(j),{color:O="currentColor",size:f,weight:z="regular",mirrored:C=!1}=s,E=w(s,["color","size","weight","mirrored"]);return u.createElement("svg",m(m({ref:l,xmlns:"http://www.w3.org/2000/svg",width:o??f,height:o??f,fill:n??O,viewBox:"0 0 256 256",transform:p||C?"scale(-1, 1)":void 0},E),y),!!t&&u.createElement("title",null,t),b,x.get(c??z))});h.displayName="IconBase";const I=h;export{I as b};
