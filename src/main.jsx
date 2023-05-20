import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layoutes from './Components/Layoutes';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import AuthProvider from './Components/AuthProvider';
import AddToy from './Components/AddToy';
import AllToys from './Components/AllToys';
import MyToys from './MyToys';
import Blogs from './Components/Blogs';
import Private from './Components/Private';
import UpdateToy from './UpdateToy';
import ToyDetails from './Components/ToyDetails';
import ErrorPage from './Components/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layoutes></Layoutes>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/add",
        element: <Private><AddToy></AddToy></Private>,
      },
      {
        path: "/alltoys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/mytoys",
        element: <Private><MyToys></MyToys></Private>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/update/:id",
        element: <Private><UpdateToy></UpdateToy></Private>,
        loader: ({ params }) => fetch(`https://robo-house-server.vercel.app/toy/${params.id}`)
      },
      {
        path: "/details/:id",
        element: <Private><ToyDetails></ToyDetails></Private>,
        loader: ({ params }) => fetch(`https://robo-house-server.vercel.app/toy/${params.id}`)
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </React.StrictMode>,
)
