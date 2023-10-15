import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Beranda from './pages/beranda'
import Kontak from './pages/kontak'
import Tentang from './pages/tentang'



const router = createBrowserRouter([
  {
    path: "/",
    element:<Beranda />
  },
  {
    path: "/beranda",
    element: <Beranda />
  },
  {
    path: "/kontak",
    element: <Kontak />
  },
  {
    path: "/tentang",
    element: <Tentang />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
