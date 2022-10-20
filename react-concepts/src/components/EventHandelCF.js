
import React, { Component } from 'react'

export class EventHandelCF extends Component
{
    EventHandelClassComp()
    {
        console.log('Clicked by the class Comp')
    }
    render()
    {
        return (   
              <div>
                <h6>Class Comp of the Event</h6> 
                <button onClick={this.EventHandelClassComp}>Click Here !</button><p>For class Event</p>
                {/* {this.Methodname} where *this* MANDATORY  */}
                </div>
        )
    }
} 