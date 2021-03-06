import React from "react"

export default function Item  ({id, message, deleteNote}) {
    return ( 
    <div>
       <p>{message} | id= {id} </p>
       <button onClick={()=>deleteNote(id)}>Delete</button>
    </div>
    )
   }
