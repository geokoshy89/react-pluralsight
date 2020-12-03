import './App.css';
import { Display } from './Display';
import { Button} from './Button';
import { DateText } from './DateText';
import { useState } from 'react';

export const Incrementer=()=>{
    const [increment,setIncrement]=useState(0);
    const handleClick=(by)=>setIncrement(increment+by);
    return (<div className="App">
     <Button incrementBy={1} handleClick={handleClick}/>
     <Button incrementBy={2} handleClick={handleClick}/>
     <Button incrementBy={3} handleClick={handleClick}/>
     <Button incrementBy={4} handleClick={handleClick}/>
     <Button incrementBy={5} handleClick={handleClick}/>
     <Display increment={increment}/>
     <DateText />
     </div>)
}