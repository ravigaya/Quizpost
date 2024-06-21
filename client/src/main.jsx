import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Newleave from '../components/Newleave.jsx'
import {Dashboard} from '../components/Dashboard.jsx'


import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/createnewleave",
    element: <Newleave/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
  // {
  //   path: "/update",
  //   element: <Update/>,
  // },
  // {
  //   path: "/delete",
  //   element: <Delete/>,
  // },
  // {
  //   path: "/read",
  //   element: <Read/>,
  //},
]);
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Approuter} />

  </React.StrictMode>,
)
