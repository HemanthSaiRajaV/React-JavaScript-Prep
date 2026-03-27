import { useEffect, useState } from 'react';

function useGetAPICall(path) {
    const [data, setData] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(path);
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error Fetching... data :', error);
            }
        };
        getData();
    }, [path]);

    return data;
}

export default useGetAPICall;