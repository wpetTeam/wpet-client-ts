import { API } from "services";

export const deleteGrooming = async (petId: number, beautyId: number) => {
    await API.delete(`/pets/${petId}/beauties/${beautyId}`, {
        withCredentials: true,
    }).then((res) => {
        console.log(">>> [DELETE GROOMING] ✅ SUCCESS");
    });
};
