import { useEffect, useState } from "react";

export function useShowLoader(dataLoadingState){
    const [timerLoadingState, setTimerLoadingState] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setTimerLoadingState(() => false), 1000);
        return () => clearTimeout(timer);
    }, []);

    const showLoader = dataLoadingState || timerLoadingState;

    return {
        showLoader
    }
}