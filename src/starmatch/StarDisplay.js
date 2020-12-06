import  { Utils } from './Utils';

export const StarDisplay=(props)=>{
    return (<>
        {Utils.range(1,props.count).map(id=>
            <div key={id} className="star" />
        )}
    </>)
};