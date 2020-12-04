import './GitHubCard.scss';
import './GitHubCard.scss';
import React from 'react';
import { CardList } from './CardList';
import { Form } from './forms/Form';
export class GitHubCard extends React.Component{
    //simple class field syntax ,instead of using constructor
    state={
        profiles:[]
    }
    handleSubmit=(data)=>{
        console.log('App',data)
        this.setState(previousState=>{
        return {
            profiles:[...previousState.profiles,data]
        }})
    }
    render(){
        
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form onSubmit={this.handleSubmit}/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}