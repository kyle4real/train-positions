import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
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

// const [trainPositions, setTrainPositions] = useState([]);
// const [error, setError] = useState();

// useEffect(() => {
//     const fetchTrainData = async () => {
//         try {
//             const response = await fetch(
//                 `https://api.wmata.com/TrainPositions/TrainPositions?contentType=json`,
//                 {
//                     headers: {
//                         api_key: "b3e90f95658b4ea995ac4857d53ee6e1",
//                     },
//                 }
//             );
//             const { trainPositions } = await response.json();
//             setTrainPositions(trainPositions);
//         } catch (error) {
//             setError(error);
//         }
//     };
//     fetchTrainData();
// }, []);

// console.log(trainPositions);

export default App;
