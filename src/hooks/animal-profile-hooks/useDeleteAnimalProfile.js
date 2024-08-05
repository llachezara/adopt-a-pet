import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { deleteAnimalProfile } from "../../api/animal-profile-api/animalProfile";
import { updateUserAdoptedList, updateUserCreatedAnimalsList } from "../../api/user-api/user";

export function useDeleteAnimalProfile(){
    const currentUser = useContext(AuthContext);

    const deleteProfile = async (animalId, animalOwnerId) => {
        const deleteProfileData = await deleteAnimalProfile(animalId);
        if (deleteProfileData.error) {
            return deleteAnimalProfile.error;
        }

        const updateUserCreatedAnimalListError = await updateUserCreatedAnimalsList(currentUser.id, animalId, "remove");  
        if (updateUserCreatedAnimalListError) {
            return updateUserCreatedAnimalListError;
        }
        
        const updateUserAdoptedListError = await updateUserAdoptedList(animalOwnerId, animalId, "remove");
        
        if (updateUserAdoptedListError) {
            return updateUserAdoptedListError;
        }
    }

    return {
        deleteProfile
    }
}