import { Route, Routes, useLocation, useNavigate } from "react-router";
import { routes } from './Routes';
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";

const BackButtonHandler = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handlePopState = () => {
            console.log('Back button pressed!');
            navigate(-1);
        };

        window.addEventListener('popstate', handlePopState);

        return () => {
            window.removeEventListener('popstate', handlePopState);
        };
    }, [navigate]);

    return null;
};

const NavBarWrapper = () => {
    const location = useLocation();
    let state = '';
    if (location.pathname === '/') state = 'home';
    else if (location.pathname === '/room') state = 'room';
    else if (location.pathname === '/login' || location.pathname === '/account') state = 'account';

    return <NavBar state={state} />;
};

const App = () => {
    return (
        <div>
            <BackButtonHandler />
            <NavBarWrapper />
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<Page />}
                        />                
                    );
                })}
            </Routes>
        </div>
    )
}

export default App
