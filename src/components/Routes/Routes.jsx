import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Recipes from "../Recipes/Recipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../Home/Services/Services";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://awesome-chef-server-md-toybur-rahman.vercel.app/chef'),
                children: [
                    {
                        path: '/',
                        element: <Services></Services>,
                        loader: () => fetch('https://awesome-chef-server-md-toybur-rahman.vercel.app/service')
                    }
                ]
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://awesome-chef-server-md-toybur-rahman.vercel.app/chef/${params.id}`)
            }
        ],
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: '/register',
        element: <SignUp></SignUp>,
    },
    {
        path: '/login',
        element: <Login></Login>
    }
])


export default router;