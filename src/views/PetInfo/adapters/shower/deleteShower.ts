import { API } from "services";

export const deleteShower = async (petId: number, showerId: number) => {
    await API.delete(`/pets/${petId}/showers/${showerId}`, {
        withCredentials: true,
    }).then((res) => {
        console.log(">>> [DELETE SHOWER] ✅ SUCCESS");
    });
};
