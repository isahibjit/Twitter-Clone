import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'

function App() {
  

  return (
    <>
   <div className=" w-full  flex justify-center  text-white ">
    <Navbar />
    <Main />
    <Sidebar />
   </div>
    </>
  )
}

export default App
