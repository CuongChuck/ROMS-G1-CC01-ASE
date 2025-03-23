import { Route, Routes } from "react-router";
import { routes } from './Routes';
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    return (
                        <Route
                            key={index}
                            element={<Page />}
                            path={route.path}
                        />                
                    );
                })}
            </Routes>
        </div>
    )
}

export default App
