import { useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

import { createAnimalProfile } from "../../api/animal-profile-api/animalProfile"

export function useCreateAnimalProfile(){
    const user = useContext(AuthContext);

    const create = async (data) => {
        const animalDocRef = await createAnimalProfile(data, user.id);
        console.log(animalDocRef);
    }

    return {
        create
    }
}