import React, { useEffect, useState } from "react";
import Accordian from "../components/Accordian/Accordian";
import DoubleRange from "../components/DoubleRange/DoubleRange";
import DropdownButton from "../components/DropdownButton/DropdownButton";
import FiltersGrid from "../components/FiltersGrid/FiltersGrid";
import Grid from "../components/Grid/Grid";
import LineColor from "../components/LineColor/LineColor";
import PageHead from "../components/PageHead/PageHead";
import SelectGrid from "../components/SelectGrid/SelectGrid";
import useSearch from "../hooks/useSearch";

const Home = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [trains, setTrains] = useState([]);
    const [error, setError] = useState();
    const { filterArr, searchedArr } = useSearch({ resourceArr: trains, filters });

    useEffect(() => {
        const fetchTrainData = async () => {
            try {
                const response = await fetch(
                    `https://api.wmata.com/TrainPositions/TrainPositions?contentType=json`,
                    {
                        headers: {
                            api_key: "b3e90f95658b4ea995ac4857d53ee6e1",
                        },
                    }
                );
                const { TrainPositions } = await response.json();
                setTrains(TrainPositions);
            } catch (error) {
                setError(error);
            }
        };
        fetchTrainData();
    }, []);

    return (
        <>
            <PageHead
                title={"All Trains"}
                button={
                    <DropdownButton onClick={() => setFilterOpen((p) => !p)} isOpen={filterOpen}>
                        Filter Search
                    </DropdownButton>
                }
            >
                <Accordian isOpen={filterOpen}>
                    <FiltersGrid filters={filterArr} />
                </Accordian>
            </PageHead>
            <Grid trains={searchedArr} />
        </>
    );
};

const filters = [
    {
        label: "Filter by Line Color",
        type: "byValue",
        target: "LineCode",
        callback: ({ optionsSet, filterValues, onFilterChange }) => (
            <SelectGrid
                optionCallback={(value) => <LineColor linecolor={value} />}
                options={[...optionsSet]}
                filterValues={filterValues}
                onFilterChange={onFilterChange}
            />
        ),
    },
    {
        label: "Filter by Service Type",
        type: "byValue",
        target: "ServiceType",
        callback: ({ optionsSet, filterValues, onFilterChange }) => (
            <SelectGrid
                optionCallback={(value) => <>{value}</>}
                options={[...optionsSet]}
                filterValues={filterValues}
                onFilterChange={onFilterChange}
            />
        ),
    },
    {
        label: "Filter by Car Count",
        type: "range",
        target: "CarCount",
        callback: ({ minMax, filterValues, onFilterChange }) => (
            <DoubleRange
                minMax={minMax}
                filterValues={filterValues}
                onFilterChange={onFilterChange}
            />
        ),
    },
];

const dummyData = [
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
        LineCode: "RD",
        SecondsAtLocation: 0,
        ServiceType: "Normal",
    },
    {
        TrainId: "700",
        TrainNumber: "B11",
        CarCount: 6,
        DirectionNum: 1,
        CircuitId: 1234,
        DestinationStationCode: "A01",
        LineCode: "RD",
        SecondsAtLocation: 0,
        ServiceType: "Normal",
    },
    {
        TrainId: "800",
        TrainNumber: "SS2",
        CarCount: 20,
        DirectionNum: 2,
        CircuitId: 4321,
        DestinationStationCode: null,
        LineCode: "RD",
        SecondsAtLocation: 25,
        ServiceType: "Special",
    },
    {
        TrainId: "900",
        TrainNumber: "7GB",
        CarCount: 12,
        DirectionNum: 2,
        CircuitId: 2604,
        DestinationStationCode: null,
        LineCode: "GR",
        SecondsAtLocation: 15,
        ServiceType: "NoPassengers",
    },
    {
        TrainId: "1000",
        TrainNumber: "901",
        CarCount: 5,
        DirectionNum: 2,
        CircuitId: 2626,
        DestinationStationCode: null,
        LineCode: "BL",
        SecondsAtLocation: 20,
        ServiceType: "Normal",
    },
    {
        TrainId: "1100",
        TrainNumber: "Z89",
        CarCount: 20,
        DirectionNum: 2,
        CircuitId: 2441,
        DestinationStationCode: null,
        LineCode: "YL",
        SecondsAtLocation: 10,
        ServiceType: "Special",
    },
    {
        TrainId: "1200",
        TrainNumber: "R23",
        CarCount: 32,
        DirectionNum: 2,
        CircuitId: 1969,
        DestinationStationCode: null,
        LineCode: "OR",
        SecondsAtLocation: 0,
        ServiceType: "Normal",
    },
];

export default Home;
