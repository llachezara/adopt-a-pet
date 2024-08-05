import { useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

import { adoptAnAnimal } from "../../api/animal-profile-api/animalProfile";
import { updateUserAdoptedList } from "../../api/user-api/user";

export function useAdoptAnimalProfile(){
    const { animalId } = useParams();
    const currentUser = useContext(AuthContext);
    
    const adopt = async () => {
        const adoptedData = await adoptAnAnimal(animalId, currentUser.id);

        if (adoptedData.error) {
            return adoptedData.error;
        }

        const updateUserAdoptedListError = await updateUserAdoptedList(currentUser.id, animalId, "add");
        if (updateUserAdoptedListError) {
            return updateUserAdoptedListError;
        }
    }

    return {
        adopt
    }
}