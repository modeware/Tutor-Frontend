import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {Login} from '@components/forms'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'
import PublicRoute from './components/common/PublicRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute> <App /></ProtectedRoute>
  },
  {
    path: "/login",
    element:  <PublicRoute><Login/></PublicRoute>
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
