import React from 'react'
import { MemoizedChildOne } from './ChildOne'
import { useState } from 'react'

export const ParentOne = () => {
    
  const [num,setNum] = useState(10)
  const handleClick = () => setNum( num + 10 )

  const[name,setName] = useState('davide')

  console.log("Parent One Rendered");

  return (
    <div>
        <h2>Parent One</h2>
        <p> { num }</p>
        <button onClick={handleClick}>Click</button>
        <button onClick={ () => setName('dave')}>Change Name</button>
        <MemoizedChildOne name={name} />
    </div>
  )
}
