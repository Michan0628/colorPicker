import React from 'react'

export default function FactCard(props) {
    
    // let FactToRender;
    // if(props.fact){
    //     FactToRender = `<p>${props.fact}</p>`
            
    // }


    return (
        <div className="app__factCard">
        {props.fact}
        </div>
    )
}
