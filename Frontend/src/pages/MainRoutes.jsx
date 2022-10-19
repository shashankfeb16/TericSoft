import React from "react";
import { Route, Routes } from "react-router-dom";
import Bmi from "./Bmi";
import Login from "./Login";
import Signup from "./Signup";
const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Signup></Signup>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/checkbmi" element={<Bmi></Bmi>}></Route>
    </Routes>
  );
};

export default MainRoutes;
