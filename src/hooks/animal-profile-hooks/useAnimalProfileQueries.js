import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { adoptAnAnimal, getAllAnimalProfiles, getOneAnimalProfile } from "../../api/animal-profile-api/animalProfile";
import { updateUserAdoptedList } from "../../api/user-api/user";


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

    const getAnimalDetails = async () => {
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
    }
    useEffect(() => {
        getAnimalDetails();
    }, [currentUser]);


    const adopt = async (animalId) => {
        const adoptedData = await adoptAnAnimal(animalId, currentUser.id);

        if (adoptedData.error) {
            return adoptedData.error;
        }

        const updateUserAdoptedListError = await updateUserAdoptedList(currentUser.id, animalId);
        if (updateUserAdoptedListError) {
            return updateUserAdoptedListError;
        }
    }

    return {
        animalProfileState,
        getAnimalDetails,
        adopt
    }
}