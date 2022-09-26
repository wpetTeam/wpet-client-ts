import { newPet } from "models";
import { API } from "services";

export const createPet = async (petData: newPet) => {
    await API.post("/pets", petData, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [CREATE PET] ✅ SUCCESS", res.data.petName);
        })
        .catch((err) => {
            console.log(">>> [CREATE PET] ❌ ERROR", err.response);
        });
};
