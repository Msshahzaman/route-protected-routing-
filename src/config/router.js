import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Dashboard from "../Dashboard";
import Footer from '../Footer'
import Header from '../Header'
import Login from '../Login'
import Signup from '../Signup'
import Detail from "../Detail";
import { Outlet } from "react-router-dom";







  const router = createBrowserRouter([
    // {
    //   path: "/",
    //   element: <Dashboard/>,
    // },
    // {
    //     path: "/footer",
    //     element: <Footer/>,
    //   },
    //   {
    //     path: "/header",
    //     element: <Header/>,
    //   },
      // {
      //   path: "/login",
      //   element: <Login/>,
      // },
      // {
      //   path: "/signup",
      //   element: <Signup/>,
      // },
      // {
      //   path: "/detail",
      //   element: <Detail/>,
      // },


{path : '/',
element : <Layout/>,



children : [

  {
   path: "/",
    element: <Dashboard/>,
  },
 
      {
        path: "/header",
        element: <Header/>,
      },

 {
        path: "/footer",
        element: <Footer/>,
      },





  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/detail",
    element: <Detail/>,
  },

]} ]);

  function Router(){

    return <RouterProvider router={router} />
     
   }
   
   export default Router;

function Layout() {

  return <div>
<Header/>
<Outlet/>
<Footer/>

  </div>

}