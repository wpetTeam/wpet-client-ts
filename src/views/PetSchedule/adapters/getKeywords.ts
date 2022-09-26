import { API } from "services";

export const getKeywords = async (setKeywords: any) => {
    await API.get(`/todolist-keyword`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [CHECKUP / GET GROOMING] ✅ SUCCESS");
            setKeywords(res.data.result);
        })
        .catch((err) => console.log("error"));
};
