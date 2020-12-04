import './GitHubCard.scss';
import './GitHubCard.scss';
import React from 'react';
import { CardList } from './CardList';
import { Form } from './forms/Form';
export class GitHubCard extends React.Component{
    //simple class field syntax ,instead of using constructor
    state={
        profiles:[
            {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
        {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
          {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
        ]
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