import { useState } from "react";
import "./App.css";
import Grid from "./components/Grid/Grid";
import Layout from "./components/Layout/Layout";
import { ThemeContext } from "./context/ThemeContext";

function App() {
    const [themeIndex, setThemeIndex] = useState(0);
    return (
        <ThemeContext.Provider value={{ themeIndex, setThemeIndex }}>
            <div className={!themeIndex ? "light" : "dark"}>
                <div className={"body"}>
                    <Layout>
                        <Grid trainPositions={trainPositions} />
                    </Layout>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

const trainPositions = [
    {
        TrainId: "100",
        TrainNumber: "301",
        CarCount: 6,
        DirectionNum: 1,
        CircuitId: 1234,
        DestinationStationCode: "A01",
        LineCode: "RD",
        SecondsAtLocation: 0,
        ServiceType: "Normal",
    },
    {
        TrainId: "200",
        TrainNumber: "XY1",
        CarCount: 20,
        DirectionNum: 2,
        CircuitId: 4321,
        DestinationStationCode: null,
        LineCode: "BL",
        SecondsAtLocation: 25,
        ServiceType: "Special",
    },
    {
        TrainId: "300",
        TrainNumber: "Z3M",
        CarCount: 12,
        DirectionNum: 2,
        CircuitId: 2604,
        DestinationStationCode: null,
        LineCode: "OR",
        SecondsAtLocation: 15,
        ServiceType: "NoPassengers",
    },
    {
        TrainId: "400",
        TrainNumber: "54P",
        CarCount: 5,
        DirectionNum: 2,
        CircuitId: 2626,
        DestinationStationCode: null,
        LineCode: "GR",
        SecondsAtLocation: 20,
        ServiceType: "Normal",
    },
    {
        TrainId: "500",
        TrainNumber: "H78",
        CarCount: 20,
        DirectionNum: 2,
        CircuitId: 2441,
        DestinationStationCode: null,
        LineCode: "YL",
        SecondsAtLocation: 10,
        ServiceType: "Special",
    },
    {
        TrainId: "600",
        TrainNumber: "503",
        CarCount: 32,
        DirectionNum: 2,
        CircuitId: 1969,
        DestinationStationCode: null,
        LineCode: "SV",
        SecondsAtLocation: 0,
        ServiceType: "Normal",
    },
];

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
