import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import Home from './Component/Home';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserDetails from './UserDetails';
import Post from './Post';
import PostDtls from './PostDtls';
import Navber from './Component/Navber';


const router = createBrowserRouter([
  // {
  
  //   path: "/",
  //   element: <div className='text-center'>Hello world!</div>,
  // },
  // {
  //   path:'a',
  //   element: <div>i am in the about page</div>
  // },
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
        path: '/about',
        element: <Navber></Navber>
      },
      
      
      
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users></Users>
      },
      {
        path: '/user/:userId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users${params.userId}`),
        element: <UserDetails></UserDetails>
      },
      {
        path: '/posts',
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
     
        element:<Post></Post>
      },
      {
        path: '/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element: <PostDtls></PostDtls>
      }
    ]
  }
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
