import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from './pages/signin/Signin'
import Login from './pages/login/Login'
import Dashboard from './pages/dashboard/Dashboard'


const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Signin/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "/dashboard",
      element: <Dashboard/>
    }
  ]);

  return (
    
      <RouterProvider router={router}> </RouterProvider>
    
  )
}

export default App