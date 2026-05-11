import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./AdminSide/Dashboard";
import Flashcards from "./AdminSide/Flashcards";
import Notes from "./AdminSide/Notes";
import Sessions from "./AdminSide/Sessions";
import Settings from "./AdminSide/Settings";
import Sidebar from "./AdminSide/Sidebar";
import Users from "./AdminSide/Users";
import Landing from "./Landing";
import Login from "./Login";
import Registration from "./Registration";

const router = createBrowserRouter([
    {path:"/", element:<Landing />},
    {path:"/Sidebar", element:<Sidebar />},
    {path:"/Dashboard", element:<Dashboard/>},
    {path:"/Flashcards", element:<Flashcards />},
    {path:"/Notes", element:<Notes />},
    {path:"/Sessions", element:<Sessions />},
    {path:"/Settings", element:<Settings />},
    {path:"/Sidebar", element:<Sidebar />},
    {path:"/Users", element:<Users />},
    {path:"/Login", element:<Login />},
    {path:"/Registration", element:<Registration />}
])

export default router;