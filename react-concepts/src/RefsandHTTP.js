import React, { Component } from 'react'
import './RefsandHTTP.css'

import RefsIntro from './Refs & HTTP Req/RefsIntro'
//Refs Intro

import Parent_of_RefsCC from './Refs & HTTP Req/Parent_of_RefsCC'
//Refs passing from a focus method without using componentDidMount

import Forwarding_href from './Refs & HTTP Req/Forwarding_href'
//Forwarding refs from child to parent by a click of a button
import PortalDemo from './Refs & HTTP Req/PortalDemo'
//How portal Work in Components in UI 

import ErrorBoundarys from './Refs & HTTP Req/ErrorBoundarys'
import errorBoundaryHandling from './Refs & HTTP Req/errorBoundaryHandling'


// Error Boundary helps to wrap up the element or Component
// that will cause the error thus the app does not crash 
// the error occuring element and the other element should be wrapped up indivially 
// so that the other element will not target and the app does not get crashed

import HOC_1_clickCounter from './Refs & HTTP Req/HigherOrder Compents/HOC_1_clickCounter'
//
import HOC_2_hoverCounter from './Refs & HTTP Req/HigherOrder Compents/HOC_2_hoverCounter'
export default function RefsandHTTP() {
  return (
    <div>   
            <RefsIntro />
            <hr></hr>
            <Parent_of_RefsCC />
            <hr></hr>
            <PortalDemo />
            <hr></hr>
            <Forwarding_href />
            <hr></hr>
            {/* <errorBoundaryHandling>
            <ErrorBoundarys movie='Titanic'/>
            </errorBoundaryHandling> 

            <errorBoundaryHandling>
            <ErrorBoundarys movie='Iron Man'/>
            </errorBoundaryHandling>  */}

            <errorBoundaryHandling>
            <ErrorBoundarys movie='Darknight'/>
            </errorBoundaryHandling> 

            <HOC_1_clickCounter car ='BMW'/>
            <hr></hr>
            <HOC_2_hoverCounter />
        </div>
  )
}
