import { useState, useEffect } from "react";

function About(){



    const [name, setName] = useState("")
    
    useEffect(()=>{ // runs on page load for anything you might need to display onload
        setName("Robby") 
}, [])

    function click(){
        setName( "Alex")
    }

    return (
        <>
        <h2>This is the About page.</h2>
        <h2 className="turtle">My name is {name}. I like turtles. </h2>
        <button onClick={click}>Click</button>
        </>
    )
}


export default About;