import { useEffect, useState } from 'react';
import { Utils } from './Utils';

export const useGameState=()=>{
    const [stars,setStars]=useState(Utils.random(1,9));
    const [availableNums,setAvailableNums]=useState(Utils.range(1,9));
    const [candidateNums,setCandidateNums]=useState([]);
    const [secondsLeft,setSecondsLeft]=useState(10);

    //This function is invoked everytime the parent
    //component renders itself
    useEffect(()=>{
      if(secondsLeft>0 && availableNums.length>0){
        const timerId=setTimeout(()=>setSecondsLeft(secondsLeft-1),1000);
        return ()=>clearTimeout(timerId);
      } 
    });
    const setGameState=(newCandidateNums)=>{
        if(Utils.sum(newCandidateNums)!==stars){
            setCandidateNums(newCandidateNums);
        }else{
        const newAvailableNums=availableNums.filter(
            n=>!newCandidateNums.includes(n)
        );
        setStars(Utils.randomSumIn(newAvailableNums,9));
        setAvailableNums(newAvailableNums);
        setCandidateNums([]);
        }
    }
    return {setGameState,availableNums,candidateNums,secondsLeft,stars};
}