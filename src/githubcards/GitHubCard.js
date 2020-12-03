import './GitHubCard.scss';
import './GitHubCard.scss';
import React from 'react';
import { CardList } from './CardList';
export class GitHubCard extends React.Component{
    render(){
        return (
            <div>
                <div className="header">{this.props.title}</div>
                <CardList />
            </div>
        );
    }
}