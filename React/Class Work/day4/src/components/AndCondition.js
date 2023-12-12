import React,{useState} from 'react'
export const AndCondition = () => {
    const[err,useStste]=useState(true)
  return (
    <div>
        <form>
            <input type='text' placeholder='Username'/>
            {err&& <p>Please enter valid username</p>}
        </form>
    </div>
  )
}