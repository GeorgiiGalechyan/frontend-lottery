import React from 'react'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const routesData = createBrowserRouter([
  { path: '/', elem: null, id: '' },
  { path: '/a', elem: null, id: '' },
  { path: '/b', elem: null, id: '' },
  { path: '/c', elem: null, id: '' },
])

const createRoute = (routesData) => {
  const BrowserRoutes = routes.map((r) => createBrowserRouter({ path: r.path, element: r.elem }))

  return <RouterProvider router={BrowserRoutes} />

}

createRoute(routesData)

console.log(createRoute(routesData))

const setRoutes = (arrRoute) => {
  route = arrRoute.map((route) => 
}

;<RouterProvider router={router} />
