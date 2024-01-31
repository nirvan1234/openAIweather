import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './header';
import Body from './Body';
import Footer from './footer';
import Error from './Error';
import About from './About';
import { createBrowserRouter, Outlet ,RouterProvider } from 'react-router-dom';

const AppLayout = () =>{
  return (
    <>
     <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    error:<Error />,
    children:[
      {
        path:"/",
        element:<Body />,
      },
      {
        path:"/about",
        element:<About />,
      }
    ]

  }
])



function App() {
  return (
    <React.StrictMode>
       <RouterProvider router={appRouter}/>
    </React.StrictMode>
   
      
   
  );
}

export default App;
