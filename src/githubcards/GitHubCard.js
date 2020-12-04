import './GitHubCard.scss';
import './GitHubCard.scss';
import React from 'react';
import { CardList } from './CardList';
import { Form } from './forms/Form';
export class GitHubCard extends React.Component{

    constructor(props){
        super(props);
        this.state={
            profiles:[
                {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
            {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
              {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
            ]
        }
    }
    render(){
       
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <Form/>
                <CardList profiles={this.state.profiles}/>
            </div>
        );
    }
}