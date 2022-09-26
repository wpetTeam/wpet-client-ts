import { API } from "services";

export const createTodo = async (
    petID: number,
    date: string,
    time: number,
    content: string,
    keyword: string,
) => {
    await API.post(
        "/todolists",
        {
            petID: petID,
            date: date,
            time: time,
            content: content,
            keyword: keyword,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log(">>> [CREATE TODOLIST] ✅ SUCCESS", res.data);
        })
        .catch((err) => {
            console.log(">>> [CREATE TODOLIST] ❌ ERROR", err.response);
        });
};
