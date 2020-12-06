import  { Utils } from './Utils';
import './StarMatch.css';
import { useEffect, useState } from 'react';
import { PlayNumber } from './PlayNumber';
import { StarDisplay } from './StarDisplay';
import { PlayAgain } from './PlayAgain';
export const Game = (props) => {
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
     
      // console.log('Done rendereing');
      // return ()=>console.log('Component is rerendering');
    });
    const candidatesAreWrong=Utils.sum(candidateNums)>stars;
    const gameStatus=availableNums.length===0?'won':
          secondsLeft===0?'lost':'active';

    // const resetGame=()=>{
    //   setStars(Utils.random(1,9));
    //   setAvailableNums(Utils.range(1,9));
    //   setCandidateNums([]);
    // }
    const numberStatus=(number)=>{
      if(!availableNums.includes(number)){
        return 'used';
      }
      if(candidateNums.includes(number)){
          return candidatesAreWrong?'wrong':'candidate';
      }
      return 'available'
    }
    const onNumberClick=(number,currentStatus)=>{
        if(gameStatus!=='active'||currentStatus==='used'){
          return;
        }
        const newCandidateNums=candidateNums.concat(number);
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
    };
    return (
      <div className="game">
        <div className="help">
          Pick 1 or more numbers that sum to the number of stars
        </div>
        <div className="body">
          <div className="left">
            {gameStatus!=='active'?(
               <PlayAgain onClick={props.startNewGame} gameStatus={gameStatus}/>
            ):(
              <StarDisplay count={stars}/>
            )}
           
          </div>
          <div className="right">
           {Utils.range(1,9).map(number=>
              <PlayNumber 
              key={number} 
              number={number}  
              numberStatus={numberStatus(number)}
              onNumberClick={onNumberClick}/>
            )}
          </div>
        </div>
           <div className="timer">Time Remaining: {secondsLeft}</div>
      </div>
    );
  };