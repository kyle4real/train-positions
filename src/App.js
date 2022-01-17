import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
    const [themeIndex, setThemeIndex] = useState(0);
    return (
        <ThemeContext.Provider value={{ themeIndex, setThemeIndex }}>
            <div className={!themeIndex ? "light" : "dark"}>
                <div className={"body"}>
                    <Layout>
                        {/* Routes */}
                        <Home />
                    </Layout>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
