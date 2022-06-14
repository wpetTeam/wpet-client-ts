import { useRef, useEffect, useCallback } from 'react';

export function useInterval(callback: any, delay: number | null) {
    const savedCallback = useRef<any>();
    const intervalIdRef = useRef<any>();

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            intervalIdRef.current = setInterval(tick, delay);
        }
        const id = intervalIdRef.current;
        return () => {
            clearInterval(id);
        };
    }, [delay]);

    useEffect(() => {
        const id = intervalIdRef.current;
        return () => {
            clearInterval(id);
        };
    }, []);

    const resetInterval = useCallback(() => {
        clearInterval(intervalIdRef.current);
        if (delay !== null) {
            intervalIdRef.current = setInterval(savedCallback.current, delay);
        }
    }, [delay]);

    return resetInterval;
}
