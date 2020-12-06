import './StarMatch.css';


export const PlayNumber=(props)=>{
    const colors = {
        available: 'lightgray',
        used: 'lightgreen',
        wrong: 'lightcoral',
        candidate: 'deepskyblue',
    };
    return (
        <button 
        className="number" 
        onClick={()=>props.onNumberClick(props.number,props.numberStatus)}
        style={{backgroundColor:colors[props.numberStatus]}}
        >{
        props.number}
        </button>
    );
}