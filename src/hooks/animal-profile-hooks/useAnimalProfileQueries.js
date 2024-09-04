import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { getAllAnimalProfiles, getAnimalProfilesCount, getOneAnimalProfile } from "../../api/animal-profile-api/animalProfile";

export function useGetAnimalProfiles() {
    const [animalProfilesState, setAnimalProfilesState] = useState({ animalProfiles: [], loading: true, error: null, count: undefined });

    useEffect(() => {
        (async () => {
            const data = await getAllAnimalProfiles();
            const count = await getAnimalProfilesCount();
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
                loading: false,
                count: count
            }));
        })();
    }, []);

    return {
        animalProfilesState
    }
}

export function useGetOneAnimalProfile() {
    const { animalId } = useParams();
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

    const getAnimalDetails = async () => {
        const isUserPresent = currentUser.isPresent;
        const data = await getOneAnimalProfile(animalId);

        if (data.error) {
            return setAnimalProfileState((oldState) => ({
                ...oldState,
                animalProfile: {},
                error: data.error,
                loading: false
            }));
        }

        const isOwner = currentUser.id == data.animalProfile.ownerId;
        const isUserAdopter = currentUser.id == data.animalProfile.adoptedFrom;

        setIsOwnerState(() => isOwner);
        setAnimalProfileState((oldState) => ({
            ...oldState,
            animalProfile: data.animalProfile,
            loading: false,
            isUserPresent: isUserPresent,
            isOwner: isOwner,
            isUserAdopter: isUserAdopter
        }));
    }

    useEffect(() => {
        getAnimalDetails();
    }, [currentUser]);

    return {
        animalProfileState,
        getAnimalDetails
    }
}