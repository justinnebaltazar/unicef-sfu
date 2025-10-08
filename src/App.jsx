import React from "react"
import { Home } from "./components/Home"
import { Navbar } from "./components/Navbar";
import { InstagramFeed } from "./components/InstagramFeed";
import { Quote } from "./components/Quote";
import { About } from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          {/* home page */}
          <Route path="/" element={
            <>
              <Navbar/>
              <Home/>
              <Quote/>
              <InstagramFeed/>
            </>
          }>
          </Route>
          {/* about-us page */}
          <Route path="/about" element={
            <>
              <Navbar/>
              <About/>
            </>
          }>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;