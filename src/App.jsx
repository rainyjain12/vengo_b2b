import { useState } from 'react'
import PrivateRoutes from "./PrivateRoutes.jsx";
import PublicRoute from "./PublicRoutes.jsx";
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const isAuthenticated = true;
  
   const router = createBrowserRouter([
    isAuthenticated ? PrivateRoutes() : {},
    ...PublicRoute(),
  ]);

  return <RouterProvider router={router} />;
}

export default App
