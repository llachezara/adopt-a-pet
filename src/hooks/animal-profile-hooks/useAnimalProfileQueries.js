import { useEffect, useState } from "react";

import { getAllAnimalProfiles } from "../../api/animal-profile-api/animalProfile";


export function useGetAnimalProfiles() {
    const [animaProfilesState, setAnimalProfilesState] = useState({animalProfiles:[], loading: true});
    console.log(animaProfilesState);
    

    useEffect(() => {
        (async () => {
            const data = await getAllAnimalProfiles();
            if(data.error){
                return console.log("ERORR in FETCHING ALL ANIMALS", data.error)
            }
            setAnimalProfilesState(() => ({ animalProfiles: data.animalProfiles, loading: false}));
        })();
    }, []);

    return {
        animaProfilesState
    }
}