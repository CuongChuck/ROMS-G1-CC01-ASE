import Account from "./pages/Account/Account";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Room from "./pages/Room/Room";
import RoomList from "./pages/RoomList/RoomList";
import RoomRegister from "./pages/RoomRegister/RoomRegister";

const routes = [
    {path: '/', component: Home},
    {path: '/login', component: LogIn},
    {path: '/register', component: Register},
    {path: '/account', component: Account},
    {path: '/room', component: Room},
    {path: '/rooms', component: RoomList},
    {path: '/room/register', component: RoomRegister}
];

export { routes };