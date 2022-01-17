const baseUrl = `https://api.wmata.com`;

const headers = { api_key: "b3e90f95658b4ea995ac4857d53ee6e1" };

export const getTrainPositions = () => {
    return fetch(`${baseUrl}/TrainPositions/TrainPositions?contentType=json`, {
        method: "GET",
        headers,
    });
};
