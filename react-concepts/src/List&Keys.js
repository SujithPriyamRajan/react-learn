import React from 'react'
//import './List&Keys.css'

import ListandKeysIntro from './List & Keys/ListandKeysIntro'

import FormHandleing from './List & Keys/FormHandleing'
//Form Handleing

import CssStyleSheet from './List & Keys/CssStyleSheet'
//CSS Style Sheet Generally

import InlineCSS from './List & Keys/InlineCSS'
//CSS Style sheet inside the js File 

import './List & Keys/StyleInline.css'
//CSS Style sheet is imported in Inline CSS 

import StyleInline from './List & Keys/StyleInline.module.css'
//CSS file has imported with a component name because of .module.css file

import LifecycleMethod from './List & Keys/LifecycleMethod'
//Life Cycle method of components

import Fragments from './List & Keys/Fragments'
//Fragments <React.Fragment/> element

export default function ListandKeys() {
    return (
      <div>
          <ListandKeysIntro />
          <hr></hr>
         <FormHandleing />
         <hr></hr>
         <CssStyleSheet primary ={true}/>
         <hr></hr>
         <InlineCSS />
         <h3 className='error'>ERROR</h3>
         <h3 className={StyleInline.success}>SUCCESS</h3>
        <hr></hr>
        <LifecycleMethod />
        <hr></hr>
        <Fragments />
        <hr></hr>
        <h3>Pure Component</h3>
        {/*A regular Component render every time the 
        Component is called in index.js 
        where a pure Component is render only once in its life time of rendering 
        WHY WE USE THEM ??
        it help to avoid unnecessary  renders and helps in performance increase */}
        <h3>Memo Components</h3>
        {/* Memo  */}
     </div>
    )
  }