import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmark from './components/Bookmark/Bookmark'
import { useState } from 'react'
function App() {
  const [bookMark,setBookMark]=useState([])
  const handelBook = (blog)=>{
    const newBook = [...bookMark,blog];
    setBookMark(newBook)
  }


  return (
    <>
     <Header></Header>
     <div className='flex gap-4'>
     <Blogs handelBook={handelBook}></Blogs>
     <Bookmark bookMark={bookMark} ></Bookmark>
     </div>
    </>
  )
}

export default App
