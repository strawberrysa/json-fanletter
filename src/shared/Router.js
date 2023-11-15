import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Minji from "../pages/Minji";
import Haerin from "../pages/Haerin";
import Hanni from "../pages/Hanni";
import Danielle from "../pages/Danielle";
import Hyein from "../pages/Hyein";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="read" element={<Read/>}/>
        <Route path="hanni" element={<Hanni/>}/>
        <Route path="danielle" element={<Danielle/>}/>
        <Route path="hyein" element={<Hyein/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router