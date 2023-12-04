import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import App from "../App";
import { useState } from "react";
import { useSelector } from "react-redux";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

function Router() {
  const [message, setMessage] = useState([]);
  const shop = useSelector((state) => state.message);
  // console.log("편집샵들앱", shop);
  return (
    <BrowserRouter>
      <Routes>
        {/* //들어가는 페이지들 */}
        <Route
          path="/"
          element={<App message={message} setMessage={setMessage} />}
        />
        <Route
          path="/detail/:letterid"
          element={<Detail message={message} setMessage={setMessage} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
