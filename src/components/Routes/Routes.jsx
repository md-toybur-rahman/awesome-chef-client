import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Recipes from "../Recipes/Recipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Services from "../Home/Services/Services";
import MyBlog from "../MyBlog/MyBlog";
import ChifContainer from "../ChefContainer/ChifContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://awesome-chef-server-md-toybur-rahman.vercel.app/bangladesh'),
                children: [
                    {
                        path: '/',
                        element: <Services></Services>,
                        loader: () => fetch('https://awesome-chef-server-md-toybur-rahman.vercel.app/service')
                    },
                    {
                        path: '/:country',
                        element: <ChifContainer></ChifContainer>,
                        loader: ({ params }) => fetch(`https://awesome-chef-server-md-toybur-rahman.vercel.app/${params.country}`)
                    }
                ]
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://awesome-chef-server-md-toybur-rahman.vercel.app/chef/${params.id}`)
            },
            {
                path: '/blog',
                element: <MyBlog></MyBlog>
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