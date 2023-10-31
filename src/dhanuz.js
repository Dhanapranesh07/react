import React,{useState} from "react";
function dhanuz(){
    const[counts1,setCounts1]=useState(0);
    function myfunc()
    {
        setCounts1(count1+1)
    }
    function myfunc1()
    {
        setCounts1(counts1-1)
    }
    return(
        <>
    <button onClick={myfunc}>Increased</button>
    <span>{counts1}</span>
    <button onclick={myfunc}>Decrease</button>
    </>
    )
}
export default dhanuz