/* eslint-disable react-hooks/exhaustive-deps */
import  { useState, useEffect } from 'react';

function UseDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value] 
  );

  return debouncedValue;
}
export default UseDebounce;