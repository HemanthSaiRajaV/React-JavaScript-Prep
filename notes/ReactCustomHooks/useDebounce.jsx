import { useState, useEffect } from 'react';

//"Debounce delays execution until the user stops triggering events,
// while throttle limits execution to once per interval during continuous events."

function useDebounce(value, delay) {

    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(handler);
    }, [value, delay]);
    return debounceValue;
}


export default useDebounce;