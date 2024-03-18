import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmark from './components/Bookmark/Bookmark'
import { useState } from 'react'
import Count from './components/count/Count'
function App() {
  const [bookMark,setBookMark]=useState([])
  const [readTime,setReadTime]=useState(0)
  const handelBook = (blog)=>{
    const newBook = [...bookMark,blog];
    setBookMark(newBook)
  }
  const handelTime = (readTimes) =>{
    const newRed = readTime+readTimes.reading_time
    setReadTime(newRed);
    console.log(readTime)
  }


  return (
    <>
     <Header ></Header>
     <div className='flex gap-4 container mx-auto'>
     <Blogs handelBook={handelBook}handelTime={handelTime}></Blogs>
     <div className='flex w-1/3 flex-col'>
      <Count readTime={readTime}></Count>
      <Bookmark bookMark={bookMark} ></Bookmark>
     </div>
     
     </div>
    </>
  )
}

export default App
