import React from 'react'
import ReactDOM from 'react-dom'//to create Portal import react DOM from react-dom
function PortalDemo() {
    //within return statement REACTDOM.createPortal(first Parameter JSX element,Second Parameter get element by id('id mentions in the index id'))
  return ReactDOM.createPortal(
    <div>
        <h1>Portal Demo</h1>    
    </div>,
    document.getElementById('portal-root')
  )
}

export default PortalDemo