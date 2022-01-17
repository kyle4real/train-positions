import { useEffect, useState } from "react";

const useFetchInterval = ({ request, intervalMS }) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const sendRequest = async () => {
            setLoading(true);
            try {
                const response = await request();
                const data = await response.json();
                setData(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        sendRequest();
        const interval = setInterval(() => sendRequest(), intervalMS);
        return () => clearInterval(interval);
    }, [intervalMS, request]);

    return { data, error, loading };
};

export default useFetchInterval;
