export const useDebounceValue = (value, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debouncedValue;
};


// useage example
// const debouncedSearch = useDebounceValue(search, 500);

// useEffect(() => {
//     if (debouncedSearch) {
//         apiGet("/search", { q: debouncedSearch });
//     }
// }, [debouncedSearch]);
