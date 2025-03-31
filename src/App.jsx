import React from 'react'
import Content from './components/Content/Content'
import Navbar from './components/Navbar/Navbar'
import DateList from './components/Content/DateList'
import Footer from './components/Content/Footer'



const App = () => {
  return (
    <div> 
      <Navbar/>
      <br></br>
      <Content/>  
      <br></br>
      <DateList/>
      <br></br>
      <Footer/>
    </div>
  )
}

export default App
