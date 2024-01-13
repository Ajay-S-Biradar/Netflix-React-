import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Login from './Login'

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<Login />
    }
])

const Body = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}

export default Body