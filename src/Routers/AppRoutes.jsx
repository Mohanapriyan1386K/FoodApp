import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Signup from "../Pages/Signup";
import Blogs from "../Pages/Blogs";
import Post from "../Pages/Post";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../Layout/Navbar";
import Login from "../Pages/Login";
import Home from "../Pages/Home";



const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Home />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Blogs />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/post"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <Post />
              </>
            </ProtectedRoute>
          }
        />

        {/* 404 Not Found */}
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
