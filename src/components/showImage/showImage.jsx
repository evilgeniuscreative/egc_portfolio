import React from 'react'

const showImage = (props) => {
    const {image, message} = props
  return (
    
    <div>
        <h1>{message}</h1>
        <img src={image} alt="image" />
    </div>
  )
}

export default showImage