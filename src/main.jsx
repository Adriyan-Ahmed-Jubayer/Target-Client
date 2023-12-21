import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom"
import 'react-toastify/dist/ReactToastify.css';
import Routes from './Routes/Routes';
import './Styles/Style.css'
import AuthenticationProvider from './Context/AuthenticationProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthenticationProvider>
      <RouterProvider router={Routes} />
    </AuthenticationProvider>
  </React.StrictMode>,
)
