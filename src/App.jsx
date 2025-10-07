import React from "react"
import { About } from "./components/About"
import { Navbar } from "./components/Navbar";
import { Quote } from "./components/Quote";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Navbar/>
              <About/>
              <Quote/>
              {/* <Instagram/> */}
            </>
          }>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;