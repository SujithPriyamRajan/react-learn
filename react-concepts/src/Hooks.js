import React from 'react'
import './Hooks.css'
//SetState Hooks with Class Components
import CounterIncrement from './Hooks/CounterIncrement'

//SetState Hooks with Function Components
import CounterIncrementFun from './Hooks/CounterIncrementFun'

//setstate Hook  with Previous state 
import FullCounter from './Hooks/FullCounter'

//usestate Hooks in objects
import ObjectHooks from './Hooks/ObjectHooks'

//usestate Hooks in arrays
import ArrayHooks from './Hooks/ArrayHooks'

//Use Effect in class
import UseEffectIntro from './Hooks/UseEffectIntro'

//Use Effect Run only one by Class Comp
import CourserValues from './Hooks/CourserValues'

//Use Effect Run only one by Class Comp by Did mounting
import HooksCursor from './Hooks/HooksCursor'

//Use Effect Run only one by Class Comp by UN mounting
import HooksCursorUM from './Hooks/HooksCursorUM'

//Use USEEFFECT() to fetch data with axion
export default function Hooks() {
  return (
    <div>
        <h1>Hooks </h1>
        < CounterIncrement />
        <hr></hr>
        <CounterIncrementFun />
        <hr></hr>
        <FullCounter />
        <hr></hr>
        <ObjectHooks />
        <hr></hr>
        <ArrayHooks />
        <hr></hr>
        <UseEffectIntro />
        <hr></hr>
        <CourserValues />
        <hr></hr>
        <HooksCursor />
        <hr></hr>
        <HooksCursorUM />
        </div>
  )
}

