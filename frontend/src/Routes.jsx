import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Room from "./pages/Room/Room";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: LogIn},
    {path: '/register', component: Register},
    {path: '/account', component: Account},
    {path: '/room', component: Room}
];

export { routes };