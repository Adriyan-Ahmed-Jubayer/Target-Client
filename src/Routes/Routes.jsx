import{ createBrowserRouter } from"react-router-dom"
import Main from "../Layouts/Main Layout/Main";
import Home from "../Pages/Home/Home";

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        }
      ]
    },
  ]);

  export default Routes;
