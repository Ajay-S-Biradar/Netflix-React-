import React from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from './Login'
import Header from './Header'

const AppLayout = ()=>{
  return(
    <>
    <Header/>
    <Outlet />
    </>
  )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children:[
          {
            path:'/',
            element:<Login />
          }
        ]
    }
])

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body