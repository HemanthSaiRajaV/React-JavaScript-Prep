import { useState, useEffect } from 'react';

function useDebounce(value, delay) {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => {
            clearTimeOut(handler)
        }
    }, [value, delay]);
    return debounceValue;
}


export default useDebounce;