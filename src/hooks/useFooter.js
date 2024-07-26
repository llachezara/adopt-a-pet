import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useFooter() {
    const location = useLocation();
    const defaultFooterState = {
        renderFooter: false,
        renderBigFooter: false
    };
    const [footerState, setFooterState] = useState(defaultFooterState);

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setFooterState({
                    renderFooter: true,
                    renderBigFooter: true
                })
                break;

            default:
                setFooterState(defaultFooterState)
                break;
        }
    }, [location.pathname])

    return footerState;

}