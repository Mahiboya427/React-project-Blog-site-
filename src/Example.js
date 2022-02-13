import React,{useState,useEffect} from "react";

const Example =()=>{
    const [count,setCount]=useState(0);

    //useEffect( ()=>{
      //  console.log("useeffect ran")
    //} )
    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
    )
}
export default Example;