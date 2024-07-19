import React from 'react'

const Header = (props) => {
  return (
    <>
    <h1>jai shree Ram mitro</h1>
    <div className='flex bg-green-400 h-16 items-center justify-between'>
        <h2>{props.editor}</h2>
    <h1>Hello mitro</h1>
    <div className='flex gap-2 px-3'>
        <h4>About</h4>
        <h4>Career</h4>
        <h4>Blog</h4>
        <h4>Account</h4>
    </div>
    </div>
    </>
  )
}

export default Header