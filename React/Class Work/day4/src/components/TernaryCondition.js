import React,{useState}from 'react'
export const TernaryCondition= () =>{
    const[isLoggedin,setisLoggedIn]=useState(false)
    const handleClick=()=>{
        setisLoggedIn(!isLoggedin);
    }
    return(
        <div>
            {isLoggedin?
            <p>Home Page</p>:
            <p>login Page</p>
            }
            <button onClick={handleClick}>Change state</button>
        </div>
    )
}
