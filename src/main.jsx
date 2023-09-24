import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import { router } from './Routes/router.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <Toaster
      toastOptions={{
        position: "bottom-left",
        style: {
          background: "#283046",
          color: 'white'
        }
      }}
    />
  </React.StrictMode>,
)
