"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'

const page = () => {
 const [marks, setmarks] = useState(80)
 //here above we assigned variable
 const [editor, seteditor] = useState("prince")
 //<Header/>inside return is used to write header from return box
  return (
    <>
    <h1>my name is mayank and marks is {marks}</h1>
    <button onClick={()=>{
      setmarks(33) //here it is used for call variable
    }} id='mj'>update </button>
     
    <Header edit={editor}/> 
    
    </>
  )
}

export default page