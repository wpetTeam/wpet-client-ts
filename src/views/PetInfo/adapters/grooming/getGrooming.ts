import { API } from "services";

export const getGrooming = async (petId: number, setGrooming: any) => {
    await API.get(`/pets/${petId}/beauties`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [CHECKUP / GET GROOMING] ✅ SUCCESS");
            setGrooming(res.data.result);
        })
        .catch((err) => console.log("error"));
};
