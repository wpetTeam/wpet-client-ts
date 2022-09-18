import { API } from "services";

export const createGrooming = async (petID: number, cycleDay: number) => {
    await API.post(
        "/beauties",
        {
            petID: petID,
            cycleDay: cycleDay,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log(">>> [CREATE GROOMING] ✅ SUCCESS", res.data);
        })
        .catch((err) => {
            console.log(">>> [CREATE GROOMING] ❌ ERROR", err.response);
        });
};
