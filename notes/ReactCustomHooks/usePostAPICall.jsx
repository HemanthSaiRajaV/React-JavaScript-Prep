import { useState, useEffect } from 'react';
import axios from 'axios';

function usePostAPICall(path, payload) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        const postData = async () => {
            try {
                const response = await axios.post(path, payload);
                setResponse(response);
            } catch (error) {
                console.error("Error posting data:", error);
            }
        };

        postData();
    }, [path, payload]);

    return response;
}

export default usePostAPICall;