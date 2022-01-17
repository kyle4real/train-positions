import { useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

const initialThemeIndex = JSON.parse(localStorage.getItem("themeIndex"));

function App() {
    const [themeIndex, setThemeIndex] = useState(initialThemeIndex);

    const themeToggleHandler = () => {
        setThemeIndex((p) => {
            const newIndex = !p ? 1 : 0;
            localStorage.setItem(`themeIndex`, newIndex);
            return newIndex;
        });
    };

    return (
        <ThemeContext.Provider value={{ themeIndex, themeToggleHandler }}>
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
