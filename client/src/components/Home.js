import React, { Component } from "react";
import List from "./List"
import Fridge from "./Fridge"

export default function Home () {
 return (
   
    <div className="auth-wrapper">
        
         <div className="row">
         <div className="col-sm-2"></div>
             <div className="col-sm-4"> <List/></div>
             <div className="col-sm-4"> <Fridge/> </div>
             <div className="col-sm-2"></div>
         </div>
         
  </div>
  
 )

}