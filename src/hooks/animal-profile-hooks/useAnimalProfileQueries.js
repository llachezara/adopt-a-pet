import { useEffect, useState } from "react";

import { getAllAnimalProfiles } from "../../api/animal-profile-api/animalProfile";


export function useGetAnimalProfiles() {
    const [animalProfilesState, setAnimalProfilesState] = useState({animalProfiles:[], loading: true, error: null});

    useEffect(() => {
        (async () => {
            const data = await getAllAnimalProfiles();
            if(data.error){
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