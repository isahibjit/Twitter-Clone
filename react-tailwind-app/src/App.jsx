import React,{ useState,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import Sidebar from './Components/Sidebar'

function App() {
  const pageRef = useRef(null)
  const [height, setHeight] = useState(0)


  useEffect(() => {
    const currentHeight = pageRef.current.offsetHeight;
    setHeight(currentHeight)
  }, [])

  return (
    <>
   <div ref={pageRef} className=" w-full  flex justify-center  text-white ">
    <Navbar />
    <Main />
    <Sidebar height = {height}  />
   </div>
    </>
  )
}

export default App
