//CLASS COMP
//MULTI LINE Import

import React,{Component} from "react";

//Single line import
// import React from "react";
// import {Component} from "react";
class Happy extends Component
{
    //render return either null or html tags or file
        render()
        {
            return (
            <div>
                <h1>{this.props.emoji}</h1>
                {/* {this.props.h1} */}
            <h6>Class Component  </h6>
            </div>)
        }
}
export default Happy