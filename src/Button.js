export const Button=({incrementBy,handleClick})=>{
const handleClickInc=()=>handleClick(incrementBy);
return (<button onClick={handleClickInc}>+{incrementBy}</button>)
}