import React from 'react'
import { Children } from 'react'
import { useEffect } from 'react'

const One = (props) => {
   
    console.log("child reloaded")
    
  return (
    <div>
       {Children}
    </div>
    
   
  )
}

export default One
