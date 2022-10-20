import React from 'react'

function ErrorBoundarys(movie) {
    if(movie = 'Darknight'){
        throw new Error ('Not a big fan')
    }
  return (
    <div>
        <h2>Error Boundarys</h2>
        Movie : {movie}
        </div>
  )
}

export default ErrorBoundarys