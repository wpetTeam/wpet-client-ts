import { API } from "services";

export const getShower = async (petId: number, setShower: any) => {
    await API.get(`/pets/${petId}/showers`, {
        withCredentials: true,
    }).then((res) => {
        console.log(">>> [CHECKUP / GET SHOWER] ✅ SUCCESS");
        setShower(res.data.result);
    });
};
