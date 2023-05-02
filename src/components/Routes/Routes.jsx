import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import Recipes from "../Recipes/Recipes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://awesome-chef-server-md-toybur-rahman.vercel.app/chef')
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/chef/:id',
                element: <Recipes></Recipes>,
                loader: ({ params }) => fetch(`https://awesome-chef-server-md-toybur-rahman.vercel.app/chef/${params.id}`)
            }
        ]
    }
])


export default router;