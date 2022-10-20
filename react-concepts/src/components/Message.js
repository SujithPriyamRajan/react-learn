
//State Comp

import React from "react";
import {Component} from "react";
export class Message extends Component
{
    constructor()
    {
        super()
        this.state =
        {
            message :'Please Subscribe'
        } 
    } 
    changeMessage()
        {
            this.setState
            ({
                    message : 'Thank you for Subscribing'
            })
        }
        render()
        {
            return(
            <div>
                <h4>{this.state.message}</h4>
                <button onClick={ () => this.changeMessage() }>Subscribe</button>
            </div>
            )
        }

}