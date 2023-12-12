import React,{useState}from'react'

export const ConditionalRendering=()=>{
    const[value,setValue]=useState(true)
    if(value){
        return(
            <div>
            <p>True block</p>
            </div>
        )
    }
    else{
        return(
            <div>
                <p>False block</p>
            </div>
        )
    }
}
