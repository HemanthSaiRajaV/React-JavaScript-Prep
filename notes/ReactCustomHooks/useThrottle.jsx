import { useState, useEffect } from "react";

//"useThrottle delays updating a value so it only changes at a fixed interval, 
// helping reduce frequent updates and improve performance."

function useThrottle(value, delay) {
  const [throttledValue, setThrottledValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setThrottledValue(value); // update after delay
    }, delay);

    return () => clearTimeout(timer); // cleanup
  }, [value, delay]);

  return throttledValue;
}

export default useThrottle;

const throttledValue = useThrottle(inputValue, 500);