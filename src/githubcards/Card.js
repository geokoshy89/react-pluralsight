import './GitHubCard.scss';
import React from 'react';
export class Card extends React.Component{
        render(){
            const profile=this.props;
            return (
                <div className="github-profile" style={{margin:'1rem'}}>
                    <img alt="Notfound" src={profile.avatar_url} />
                    <div className="info" style={{display:'inline-block',marginLeft:10}}>
                        <div className="name"style={{fontSize:'125%'}}>{profile.name}</div>
                        <div className="company">{profile.company}</div>
                    </div>
              </div>);
        }
}