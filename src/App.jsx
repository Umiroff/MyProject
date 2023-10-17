import { Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Liked from "./pages/Liked";


function App() {

  return (
    <>

      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path='/liked' element={<Liked />} />
    </Routes>
      
    </>
  )
}

export default App
