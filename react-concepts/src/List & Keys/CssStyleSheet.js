import React from 'react'

import './Stylesheet.css'

/*Different options to style the react components
1.CSS Stylesheet
2.Inline Styling
3.CSS Modules
4.CSS in JS Libaries (Recommended)*/
function CssStyleSheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
<h1 className= {`${className} font-xl`}>CssStyleSheet</h1>

        </div>
  )
}

export default CssStyleSheet