import { API } from "services";

export const createShower = async (petID: number, cycleDay: number) => {
    await API.post(
        "/showers",
        {
            petID: petID,
            cycleDay: cycleDay,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log(">>> [CREATE SHOWER] ✅ SUCCESS", res.data);
        })
        .catch((err) => {
            console.log(">>> [CREATE SHOWER] ❌ ERROR", err.response);
        });
};
