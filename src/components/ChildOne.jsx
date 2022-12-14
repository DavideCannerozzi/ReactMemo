import React from 'react'

export const ChildOne = ({ name }) => {
    console.log("Child One Rendered")
  return (
    <div>
    ChildOne
    <p>Name: { name }</p>
    </div>
  )
}

export const MemoizedChildOne = React.memo(ChildOne)
