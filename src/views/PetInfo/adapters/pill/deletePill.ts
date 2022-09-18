import { API } from "services";

export const deletePill = async (petId: number, medicineId: number) => {
    await API.delete(`/pets/${petId}/medicines/${medicineId}`, {
        withCredentials: true,
    }).then((res) => {
        console.log(">>> [DELETE PILL] ✅ SUCCESS");
        window.location.reload();
    });
};
