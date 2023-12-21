import{ createBrowserRouter } from"react-router-dom"
import Main from "../Layouts/Main Layout/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Authentication/Registier";
import Login from "../Pages/Authentication/Login";

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
  ]);

  export default Routes;
