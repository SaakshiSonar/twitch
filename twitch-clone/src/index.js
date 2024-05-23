import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Navbar from './components/Navbar';
import Signup from './components/Signup';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'element={<Navbar />} >
    <Route path='signup' element={<Signup />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
</React.StrictMode>
);

