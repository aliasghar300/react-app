import React from "react";
import "./hello.css"

function Hello({firstname}){
    return (
        <p className="myname"> 
        This is a Paragraph in Hello.js by {firstname}
        </p>
    )
}

export default Hello