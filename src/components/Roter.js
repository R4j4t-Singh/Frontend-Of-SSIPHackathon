import React, { useEffect,useState } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./Login";
import SignUpIssuer from "./signupIssuer";
import SignUpuser from "./signupuser";
import Issuerdash from "./IssuerDash";
import Userdash from "./UserDash";
import Coursedash from "./CourseDash";

import PrivateRoutes from './Privateroutes'

function Routerapp() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route element={<PrivateRoutes/>}>
                <Route element={<Issuerdash/>} path="/issuerdash" exact/>
                <Route element={<Userdash/>} path="/userdash" exact/>
                <Route element={<Coursedash/>} path="/coursedash" exact/>
            </Route>

        <Route exact path="/" element = {<Login />}>  </Route>
        <Route  path="/Signupasissuer" element={<SignUpIssuer />} />
        <Route  path="/Signupasuser" element={<SignUpuser />} />
          </Routes>
      </Router>
    </div>
  );
}


export default Routerapp;
