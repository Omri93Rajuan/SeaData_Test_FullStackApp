import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AddUserPage from "../pages/AddUserPage";
const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainPage />} />
      <Route path={"mainPage"} element={<MainPage />} />
      <Route path={"addUserPage"} element={<AddUserPage/>} />


    </Routes>
  );
};

export default Router;
