import { useState } from "react";

export default function useLocalStorage(key, initialValue) {
    // Lazy initializer - it executes this function once
    // when it is first called in useState render
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            // if there is an item, parse to JSON
            // if not, use the initial value
            return item ? JSON.parse(item) : initialValue;
        } catch (err) {
            // error in access to localStorage (browser related)
            console.warn(`useLocalStorage: ${key} not read`, err);
            return initialValue;
        }
    });

    // wrap useState's setter
    // updates state and writes to localStorage
    const setValue = (value) => {
        try {
            // if the value is a function,
            // first pass it to Function
            // and continue with the returned value
            const valueToStore = value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);
            localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (err) {
            console.warn(`useLocalStorage: ${key} couldn't write`, err);
        }
    }

    return [storedValue, setValue];
}
