import { Route, Routes } from "react-router";
import { routes } from './Routes';
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div>
            <Routes>
                {routes.map((route, index) => {
                    const Page = route.component;
                    let navState = '';
                    if (index == 0) navState = 'home';
                    else if (index == 1) navState = 'account';
                    else if (index == 3) navState = 'account';
                    else if (index > 3) navState = 'room';
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={<>
                                <NavBar state={navState} />
                                <Page />
                            </>}
                        />                
                    );
                })}
            </Routes>
        </div>
    )
}

export default App
