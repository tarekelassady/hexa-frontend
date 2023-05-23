import{RouterProvider,Outlet, createBrowserRouter} from "react-router-dom";
import WriteProject from "./pages/write_project";
import Error404 from "./pages/error404";
import Home from "./pages/home";
import Login from "./pages/login";
import Projects from "./pages/projects";
import Register from "./pages/register";
import SingleProject from "./pages/single_project";
import {NavBar,Slider,Footer} from "./components";
import {Header,Services} from "./sections";
import "./App.css";

const Layout=()=>{
    return(
        <>
            <NavBar />
            <Outlet />
            <Footer />
        
        </>
    )
}

const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout />,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/projects",
                element:<Projects/>
            },
            {
                path:"/project/:id",
                element:<SingleProject/>
            },
            {
                path:"/write-project",
                element:<WriteProject/>
            }
        ]
    },
    {
        path:"/register",
        element:<Register/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"*",
        element:<Error404/>
    }
    
])
const App=()=>{ 

    return(
        <div className="App gradient_bg">
            <div className="App gradient_bg">
                <RouterProvider router={router}/>
            </div>
        </div>
    )
}

export default App;