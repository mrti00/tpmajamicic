import{r as n,u as c,j as e,L as i}from"./index-BTh1CBmY.js";const x=()=>{const[t,a]=n.useState(5),s=c();return n.useEffect(()=>{const r=setInterval(()=>{a(l=>l-1)},1e3);return t===0&&s("/"),()=>clearInterval(r)},[t,s]),e.jsxs("div",{className:"flex min-h-screen flex-grow flex-col items-center justify-center text-center",children:[e.jsx("h2",{className:"mb-4 text-4xl font-bold",children:"Stranica nije pronađena"}),e.jsxs("h3",{className:"mb-4 text-2xl",children:["Bićete preusmereni na"," ",e.jsx(i,{to:"/",className:"text-blue-500 underline",children:"Početnu"})," ","stranicu za ",e.jsx("span",{className:"font-bold",children:t})," sekundi."]}),e.jsx("p",{className:"text-lg text-gray-500",children:"Hvala na strpljenju!"})]})};export{x as default};
