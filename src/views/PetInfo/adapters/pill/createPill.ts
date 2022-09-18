import { API } from "services";
import { PillInfo } from "../../models";

export const createPill = async (pillData: PillInfo) => {
    await API.post("/medicines", pillData, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [CREATE PILL] ✅ SUCCESS", res.data);
        })
        .catch((err) => {
            console.log(">>> [CREATE PILL] ❌ ERROR", err.response);
        });
};
