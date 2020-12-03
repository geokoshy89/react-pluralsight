const { useState } = require("react")

export const DateText=()=>{
const [date,setDate]=useState(new Date().toLocaleTimeString());
setInterval(()=>setDate(new Date().toLocaleTimeString()),1000);
return (<div>{date}</div>)
}