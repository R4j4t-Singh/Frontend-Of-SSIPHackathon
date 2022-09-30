import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import SignUpIssuer from "./signupIssuer";
import SignUpuser from "./signupuser";

function Routerapp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signupasissuer" element={<SignUpIssuer />} />
          <Route path="/Signupasuser" element={<SignUpuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routerapp;
