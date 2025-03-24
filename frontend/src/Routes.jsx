import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Register from "./pages/Register";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: LogIn},
    {path: '/register', component: Register}
];

export { routes };