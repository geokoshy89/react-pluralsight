import  React from 'react';
export class ConditionalStyle extends React.Component{
    render(){
        return (
            <div style={{color:Math.random()<0.5?'green':'red'}}>Click conditional style link to see the color change</div>
        )
    }
}