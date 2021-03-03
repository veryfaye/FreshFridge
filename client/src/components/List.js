import React, { Component } from "react";
// import seed from "../scripts/"

export default function List() {
    return (
        <>
            <div className="auth-wrapper">
                <div className="auth-inner">
                    <div>
                        <div className="row">
                            <div className="col-sm-6"><h1>List</h1>
                                <input></input><button>Add</button>
                                <ul className="list-group">
                                    <li className="list-group-item">One</li>
                                    <li className="list-group-item">One</li>
                                    <li className="list-group-item">One</li>
                                    <li className="list-group-item">One</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}