import Posts from "../pages/Posts";
import Error from "../pages/Error";
import About from "../pages/About";
import PostIdPage from "../pages/PostIdPage";
import LoginPage from "../pages/LoginPage";

export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/error', component: Error},
    {path: '/posts', component: Posts},
    {path: '/posts/:id', component: PostIdPage},
]

export const publicRoutes = [
    {path: '/login', component: LoginPage},
]