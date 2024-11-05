import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import {Home} from './pages/home/Home.tsx'
import {Register} from './pages/register/Register.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Login} from './pages/login/Login.tsx'
import {AuthContextProvider} from './store/AuthContext.tsx'

const router = createBrowserRouter([
  {
    path : "/",
    element: <Home/>
  },
  {
    path : "/register",
    element: <Register/>
  },
  {
    path : "/login",
    element: <Login/>
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider><RouterProvider router={router} /></AuthContextProvider>    
  </StrictMode>,
)
