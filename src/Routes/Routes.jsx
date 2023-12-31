import{ createBrowserRouter } from"react-router-dom"
import Main from "../Layouts/Main Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Registier";
import Login from "../Pages/Authentication/Login";
import Dashboard from "../Layouts/Dashboard Layout/Dashboard";
import Tasks from "../Pages/Tasks/Tasks";
import Protection from "../Protection/Protection";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
      ]
    },
    {
        path: "/dashboard",
        element: <Protection><Dashboard></Dashboard></Protection>,
        children: [
            {
                path: '/dashboard',
                element: <Protection><Tasks></Tasks></Protection>,
            }
        ]
    }
  ]);

  export default Routes;
