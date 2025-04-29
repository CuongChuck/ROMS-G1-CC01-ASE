import { Route, Routes, useLocation, useNavigate } from "react-router";
import { routes } from './Routes';
import NavBar from "./components/NavBar/NavBar";
import { useEffect } from "react";
import { AuthProvider } from "./content/AuthProvider";
import ProtectedRoute from "./content/ProtectedRoute";

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
    const paths1 = ['/rooms', '/room', '/room/register'];
    const paths2 = ['/login', '/f2a', '/account'];
    if (location.pathname === '/') state = 'home';
    else if (paths1.includes(location.pathname)) state = 'room';
    else if (paths2.includes(location.pathname)) state = 'account';

    return <NavBar state={state} />;
};

const AppInner = () => {
    return (
        <div>
            <BackButtonHandler />
            <NavBarWrapper />
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    if (index > 2 && index < 6) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute requiredRole={"guest"}>
                                        <Page />
                                    </ProtectedRoute>
                                }
                            />                
                        );
                    }
                    else if (index > 5 && index < 8) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute requiredRole={"user"}>
                                        <Page />
                                    </ProtectedRoute>
                                }
                            />                
                        );
                    }
                    else if (index > 8) {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <ProtectedRoute requiredRole={"lecture"}>
                                        <Page />
                                    </ProtectedRoute>
                                }
                            />
                        );
                    }
                    else return (
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

function App() {
    return (
        <AuthProvider>
            <AppInner />
        </AuthProvider>
    );
}

export default App
