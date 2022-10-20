import React from 'react'

const headingText ={
    fontSize: '70px',
    color : 'gold',
    textAlign : 'center'
}

function InlineCSS() {
  return (
    <div>
        <h1 style={headingText}>Inline CSS</h1>
        <h3 className='error'>ERROR form Inline CSS</h3>
        </div>
  )
}

export default InlineCSS