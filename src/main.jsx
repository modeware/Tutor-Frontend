import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sidebar from './components/common/Sidebar.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import ProtectedRoute from './components/common/ProtectedRoute.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute> <App /></ProtectedRoute>
  },
  {
    path: "/login",
    element:  "login"
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
