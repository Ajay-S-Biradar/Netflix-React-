import React from 'react'
import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom"
import Login from './Login'
import Header from './Header'
import Browse from './Browse'
import Tvshows from './Tvshows'

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
          },
          {
            path:'/browse',
            element:<Browse />
          },
          {
            path:'tvshows',
            element:<Tvshows />
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