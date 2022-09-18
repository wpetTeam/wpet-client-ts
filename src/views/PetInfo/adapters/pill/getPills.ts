import { API } from "services";

export const getPills = async (petId: number, setPillInfo: any) => {
    await API.get(`/pets/${petId}/medicines`, {
        withCredentials: true,
    }).then((res) => {
        console.log(">>> [CHECKUP / GET PILLS] ✅ SUCCESS");
        setPillInfo(res.data.result);
    });
};
