import { newDiary } from "models";
import { API } from "services";

export const createDiary = async (diaryData: newDiary, navigate: Function) => {
    console.log(diaryData);
    await API.post("/diarys", diaryData, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [DIARY CREATE] ✅ SUCCESS");
            navigate("/diarys");
        })
        .catch((err) => console.log(">>> [DIARY CREATE] ❌ ERROR", err));
};
