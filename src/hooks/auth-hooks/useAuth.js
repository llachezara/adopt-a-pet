import { useEffect, useState } from "react"
import { getUserAuthState } from "../../api/auth-api/auth";

export function useAuth() {
    const [authState, setAuthState] = useState({
        email: undefined,
        id: undefined,
        isPresent: false,
        loading: true
    });
    console.log(authState);

    const changeAuthState = (newState) => {
        setAuthState((oldState) => ({
            ...oldState,
            ...newState
        }))
    };

    useEffect(() => {
        const unsubscribe = getUserAuthState(changeAuthState);

        return () => {
            unsubscribe();
        };
    }, []);

    const authContextData = {
        ...authState,
        changeAuthState
    };

    return authContextData
}