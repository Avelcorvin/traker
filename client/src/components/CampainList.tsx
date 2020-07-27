import React from 'react'
import { Link } from 'react-router-dom'






export const CampainList = (props:{state:string[],addUrl:(e:string)=>{};}):JSX.Element => {
    const {state,addUrl}=props;
    console.log("CampainList:",props)
   if(state)
    return(
        <div className="main-left-block  indigo lighten-5">
            <ul className="collection">
                {state.map((e:string,n:number)=>
                <li key={n} className="collection-item">
                <Link
                    to={`?campaing=${e}`}
                    onClick={()=>{addUrl(e)}}
                    >
                    {e}
                </Link>
                </li>)}
            </ul>
        </div>                
    )
    return(
        <div className="main-left-block  indigo lighten-5">
            <div> Данных нет</div>
        </div>)
}
