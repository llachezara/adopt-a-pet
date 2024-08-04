import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { getAllAnimalProfiles, getOneAnimalProfile } from "../../api/animal-profile-api/animalProfile";


export function useGetAnimalProfiles() {
    const [animalProfilesState, setAnimalProfilesState] = useState({ animalProfiles: [], loading: true, error: null });

    useEffect(() => {
        (async () => {
            const data = await getAllAnimalProfiles();
            if (data.error) {
                return setAnimalProfilesState((oldState) => ({
                    ...oldState,
                    error: data.error,
                    loading: false
                }));
            }
            setAnimalProfilesState((oldState) => ({
                ...oldState,
                animalProfiles: data.animalProfiles,
                loading: false
            }));
        })();
    }, []);

    return {
        animalProfilesState
    }
}

export function useGetOneAnimalProfile(animalId) {
    const currentUser = useContext(AuthContext);
    const [isOwnerState, setIsOwnerState] = useState(false);

    const initialState = {
        animalProfile: null,
        loading: true,
        error: null,
        isUserPresent: false,
        isOwner: isOwnerState,
        isUserAdopter: false
    }
    const [animalProfileState, setAnimalProfileState] = useState(initialState);

    useEffect(() => {
        (async () => {
            if (currentUser.loading == true) {
                return
            }
            const isUserPresent = currentUser.isPresent;
            const data = await getOneAnimalProfile(animalId);
            const isOwner = currentUser.id == data.animalProfile.ownerId;
            const isUserAdopter = currentUser.id == data.animalProfile.adoptedFrom;

            if (data.error) {
                return setAnimalProfileState((oldState) => ({
                    ...oldState,
                    error: data.error,
                    loading: false
                }));
            }

            setIsOwnerState(() => isOwner);
            setAnimalProfileState((oldState) => ({
                ...oldState,
                animalProfile: data.animalProfile,
                loading: false,
                isUserPresent: isUserPresent,
                isOwner: isOwner,
                isUserAdopter: isUserAdopter
            }));
        })();
    }, [currentUser]);

    return {
        animalProfileState
    }
}