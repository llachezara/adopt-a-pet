import { updateAnimalProfile } from "../../api/animal-profile-api/animalProfile";

export function useEditAnimalProfile(){
    const edit = async (animalId, data) => {
        const { error } = await updateAnimalProfile(animalId, data);

        if (error) {
            return error;
        }

        return null;
    }

    return {
        edit
    };
}