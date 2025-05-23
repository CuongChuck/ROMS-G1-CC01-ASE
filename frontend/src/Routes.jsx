import Account from "./pages/Account/Account";
import F2A from "./pages/F2A/F2A";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/LogIn";
import Register from "./pages/Register/Register";
import Room from "./pages/Room/Room";
import RoomList from "./pages/RoomList/RoomList";
import RoomRegister from "./pages/RoomRegister/RoomRegister";
import AccountEdit from "./pages/AccountEdit/AccountEdit";
import RoomEdit from "./pages/RoomAdjust/RoomEdit";

const routes = [
    {path: '/', component: Home},
    {path: '/room/:id', component: Room},
    {path: '/rooms', component: RoomList},
    {path: '/login', component: LogIn},
    {path: '/f2a', component: F2A},
    {path: '/register', component: Register},
    {path: '/account', component: Account},
    {path: '/profile', component: AccountEdit},
    {path: '/room/register/:id', component: RoomRegister},
    {path: '/room/adjust/:id', component: RoomEdit}
];

export { routes };