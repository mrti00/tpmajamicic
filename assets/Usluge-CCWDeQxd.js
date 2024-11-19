import{G as o,r as l,j as e,P as m}from"./index-DSJs8J4a.js";import{d as x,e as d,f as j,g as u,F as h,h as p,i as v,j as g,k as b}from"./index-DhL_rQUN.js";import{T as k,a as N,b as f}from"./index-BzdQWh5F.js";const n="/assets/boxes_boxes-DGEqqi8L.jpg";function y(a){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"m3 2 2.01 18.23C5.13 21.23 5.97 22 7 22h10c1.03 0 1.87-.77 1.99-1.77L21 2H3zm9 17c-1.66 0-3-1.34-3-3 0-2 3-5.4 3-5.4s3 3.4 3 5.4c0 1.66-1.34 3-3 3zm6.33-11H5.67l-.44-4h13.53l-.43 4z"},child:[]}]})(a)}function w(a){return o({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M17 17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523 19 19V4H5V15H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17Z"},child:[]}]})(a)}function F(a){return o({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M248.49,39.51l-32-32a12,12,0,0,0-18.55,15L147,60.77l-37.33,7.46a12.09,12.09,0,0,0-6.14,3.28L20.2,154.83a28,28,0,0,0,0,39.6L61.57,235.8a28,28,0,0,0,39.6,0l83.32-83.31a12.09,12.09,0,0,0,3.28-6.14L195.23,109l38.23-51a12,12,0,0,0,15-18.55ZM112,191,65,144l31-31,47,47ZM81.37,220a4,4,0,0,1-2.83-1.17L37.17,177.46a4,4,0,0,1,0-5.66L48,161l47,47L84.2,218.83A4,4,0,0,1,81.37,220Zm93-123.2a12,12,0,0,0-2.17,4.85L165,138.08,160,143,113,96l5-5,36.43-7.28a12,12,0,0,0,4.85-2.17l55.67-41.76,1.29,1.29Z"},child:[]}]})(a)}function z(){const[a,r]=l.useState(null),t=s=>{r(a===s?null:s)},c=[{question:"Šta je reciklaža sekundarnih sirovina?",answer:"Reciklaža sekundarnih sirovina uključuje proces obrade materijala koji bi inače završio na deponijama. To obuhvata materijal koji se obrađuje i ponovo koristi u proizvodnji novih proizvoda."},{question:"Koje vrste materijala prihvatate?",answer:"Prihvatamo širok spektar materijala, uključujući karton, plastiku, papir, staklene ambalaže, plastične flaše, streč foliju, polietilensku foliju i najlon. Naša svrha je da produžimo životni vek ovih materijala i smanjimo njihov uticaj na životnu sredinu."},{question:"Kako mogu da stupim u kontakt sa vama?",answer:"Možete nas kontaktirati putem naše kontakt forme na sajtu, ili nam se obratiti direktno putem e-maila ili telefona. Detalje pronađite na stranici Kontakt."},{question:"Da li nudite procenu materijala?",answer:"Da, nudimo besplatnu procenu materijala. Kontaktirajte nas za više informacija i dogovorite sastanak sa našim stručnjacima."}];return e.jsx("section",{className:"py-16",children:e.jsxs("div",{className:"container mx-auto px-4",children:[e.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center",children:"Često Postavljana Pitanja"}),e.jsx("div",{className:"space-y-4",children:c.map((s,i)=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md cursor-pointer relative",onClick:()=>t(i),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-xl font-semibold text-gray-700 flex-1",children:s.question}),e.jsxs("div",{className:"relative w-6 h-6 flex-shrink-0",children:[e.jsx("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${a===i?"opacity-0":"opacity-100"}`,children:e.jsx(x,{className:"text-gray-600"})}),e.jsx("div",{className:`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${a===i?"opacity-100":"opacity-0"}`,children:e.jsx(d,{className:"text-gray-600"})})]})]}),e.jsx("div",{className:`overflow-hidden transition-max-height duration-300 ease-in-out ${a===i?"max-h-screen opacity-100":"max-h-0 opacity-0"}`,children:e.jsx("p",{className:"mt-4 text-gray-600",children:s.answer})})]},i))})]})})}const P=[{name:"Karton",icon:e.jsx(v,{className:"text-3xl text-gray-800"})},{name:"Plastiku",icon:e.jsx(y,{className:"text-3xl text-gray-800"})},{name:"Papir",icon:e.jsx(w,{className:"text-3xl text-gray-800"})},{name:"Staklene ambalaže",icon:e.jsx(F,{className:"text-3xl text-gray-800"})},{name:"Plastične flaše",icon:e.jsx(g,{className:"text-3xl text-gray-800"})},{name:"Streč foliju",icon:e.jsx(N,{className:"text-3xl text-gray-800"})},{name:"Polietilensku foliju",icon:e.jsx(f,{className:"text-3xl text-gray-800"})},{name:"Najlon",icon:e.jsx(b,{className:"text-3xl text-gray-800"})}],S=()=>{const[a,r]=l.useState(!1);return l.useEffect(()=>{const t=new Image;t.src=n,t.onload=()=>{r(!0)}},[]),a?e.jsx("main",{children:e.jsxs("section",{children:[e.jsx("h2",{className:"mb-6 text-center text-3xl font-bold text-gray-800 md:text-4xl",children:"Usluge"}),e.jsxs("div",{className:"relative mb-12 rounded-lg border border-gray-300 p-4 shadow-lg",children:[e.jsxs("div",{className:"relative",children:[e.jsx("img",{src:n,alt:"Kartonske kutije",className:"h-[300px] w-full object-cover shadow-md md:h-[400px]"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70",children:e.jsxs("h2",{className:"flex flex-col items-center whitespace-nowrap text-center text-2xl text-white md:flex-row md:text-3xl",children:[e.jsx("span",{children:"Prodaja kutija za "}),e.jsx("span",{className:"ml-2",children:e.jsx(k,{options:{strings:["maline.","kupine.","višnje.","borovnice."],autoStart:!0,loop:!0,delay:1,deleteSpeed:1}})})]})})]}),e.jsxs("div",{className:"relative mt-12",children:[e.jsxs("div",{className:"mb-6 flex items-center",children:[e.jsx(j,{className:"mr-4 text-3xl text-gray-800"}),e.jsx("h3",{className:"text-2xl text-gray-800",children:"Prodaja"})]}),e.jsx("p",{className:"mb-4",children:"Nudimo visokokvalitetne polovne kutije za prihvat različitih vrsta voća. Naša ponuda uključuje kutije za maline, kupine, višnje, borovnice i druge vrste voća. Svi naši proizvodi su pažljivo pregledani i pripremljeni kako bi zadovoljili vaše potrebe."})]})]}),e.jsxs("div",{className:"mb-6 flex flex-col items-center",children:[e.jsx("h2",{className:"text-xl font-bold text-gray-800 md:text-2xl",children:"Otkup sekundarnih sirovina, Požega"}),e.jsx(u,{className:"text-center text-3xl"})]}),e.jsxs("div",{className:"mb-10 rounded-lg border border-gray-300 p-4 shadow-lg",children:[e.jsxs("div",{className:"mb-6 flex items-center",children:[e.jsx(h,{className:"mr-4 text-3xl text-gray-800"}),e.jsx("h3",{className:"text-2xl text-gray-800",children:"Otkup"})]}),e.jsx("p",{className:"mb-4",children:"Naša firma se bavi otkupom različitih vrsta sekundarnih materijala širom Srbije. Otkupljujemo:"}),e.jsx("div",{className:"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4",children:P.map(t=>e.jsxs("div",{className:"hover: flex transform items-center space-x-4 rounded-lg border border-gray-300 bg-white p-4 shadow-md transition duration-300 ease-in-out hover:scale-105",children:[t.icon,e.jsx("p",{className:"text-lg text-gray-800",children:t.name})]},t.name))})]}),e.jsxs("div",{className:"mt-10",children:[e.jsx("p",{className:"mb-2",children:"Naš cilj je da doprinosimo očuvanju životne sredine reciklažom ovih materijala."}),e.jsx("p",{className:"mb-2",children:"Ako imate materijale koje želite da prodate, slobodno nas kontaktirajte. Nudimo konkurentne cene i brzu obradu."}),e.jsx("p",{className:"mb-12",children:"Takođe, obezbeđujemo preuzimanje materijala sa vaše lokacije širom Srbije, čime štitimo vaš prostor i olakšavamo proces reciklaže."}),e.jsx("hr",{className:"mt-5 h-1 border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE] md:mt-10"}),e.jsxs("div",{className:"mt-6 flex items-center justify-center",children:[e.jsx(p,{className:"mr-4 text-3xl text-gray-800"}),e.jsx("p",{children:"Brza i efikasna dostava širom Srbije."})]}),e.jsx("hr",{className:"mt-5 h-1 border-t-2 border-transparent bg-gradient-to-r from-[#F0F7EE] via-white to-[#F0F7EE]"})]}),e.jsx(z,{})]})}):e.jsx(m,{})};export{S as default};