import  { Utils } from './Utils';
import './StarMatch.css';
import { PlayNumber } from './PlayNumber';
import { StarDisplay } from './StarDisplay';
import { PlayAgain } from './PlayAgain';
import { useGameState } from './GameState';
export const Game = (props) => {
    const {stars,setGameState,availableNums,candidateNums,secondsLeft}=useGameState();
    const candidatesAreWrong=Utils.sum(candidateNums)>stars;
    const gameStatus=availableNums.length===0?'won':
          secondsLeft===0?'lost':'active';
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
        setGameState(newCandidateNums);
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