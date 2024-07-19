"use client"
import React, { useState } from 'react'
import Header from '@/Components/Header'
import axios from 'axios'

const page = () => {
 const [marks, setmarks] = useState(80)
 //here above we assigned variable
 const [editor, seteditor] = useState("prince")
 const [Images, setImages] = useState([])
 const getimages = async ()=>{
  try {
    const response = await axios.get("https://picsum.photos/v2/list")
    const data = respose.data;
    setImages(data)
  } catch (error) {
    console.error("Error Fetching images");
  }
 } //this is for APIs and axios
 //<Header/>inside return is used to write header from return box
  return (
    <>
    <h1>my name is mayank and marks is {marks}</h1>
    <button onClick={()=>{
      setmarks(33) //here it is used for call variable
    }} id='mj'>update </button>
     
    <Header edit={editor}/> 
    <div>
     <h2>now we will learn routing</h2>
     <h1>This is Home page</h1>
     <a href='/Courses'>Courses</a>
     <a href='/Seekhtehai'>Seekhte hai</a>
     <a href='/Mazzaaayega'>Mazza aayega</a>
    </div>

    <div>
      <h2 className='ml-5'>now we will learn fetching APIs and axios</h2>
       <button onClick={getimages} className='px-5 py-3 bg-green-600 text-white font-bold'>Get Images</button>
       <div className="p-10">
       {Images.map((elem,i)=>{
        return <img
         key={i}
         src={elem.download_url}

         />
       })}
       </div>
    </div>
    </>
  )
}

export default page