import { Card } from "./Card"

export const CardList=(props)=>{
    return (
        <div>
            {props.profiles.map(profile=><Card {...profile}/>)}
        </div>
    )
}