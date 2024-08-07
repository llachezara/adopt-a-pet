import { Navigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

import { isUserAnimalOwner } from "../api/animal-profile-api/animalProfile";
import { Loader } from "../components/Loader/Loader";

export default function AnimalOwnerGuard({ children }) {
    const currentUser = useContext(AuthContext);
    const { animalId } = useParams();
    const [ownerDataState, setOwnerDataState] = useState({ loading: true, isOwner: false, error: null});
    console.log("In OWNER GUARD");
    
    useEffect(() => {
        (async () => {
            const data = await isUserAnimalOwner(animalId, currentUser.id);
            if (data.error) {
                setOwnerDataState((oldState) => ({
                    ...oldState,
                    loading: false,
                    error: data.error,
                    isOwner: false
                }))
            }else{
                setOwnerDataState((oldState) => ({
                    ...oldState,
                    loading: false,
                    isOwner: data.isOwner,
                }))
            }
        })();
    }, []);

    if (ownerDataState.loading) {
        return <Loader/>
    }
    if (ownerDataState.error) {
       console.log(ownerDataState.error);
    }
    console.log("isOwner", ownerDataState.isOwner);
    
    if (!ownerDataState.isOwner) {
        return <Navigate to={"/not-found"} replace/>
    }
    if (ownerDataState.isOwner) {
        return (
            children
        )
    }

}