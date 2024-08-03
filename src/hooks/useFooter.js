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
            case "/dashboard":
                setFooterState({
                    renderFooter: true,
                    renderBigFooter: true
                })
                break;
            case "/auth/login":
                setFooterState({
                    renderFooter: true,
                    renderBigFooter: false
                })
                break;
            default:
                setFooterState(defaultFooterState)
                break;
        }
    }, [location.pathname])

    return footerState;

}