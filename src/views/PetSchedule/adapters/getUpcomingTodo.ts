import { API } from "services";

export const getUpcomingTodo = async (setUpcomingTodos: any) => {
    await API.get(`/users/auth/todolists`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [CHECKUP / GET UPCOMING TODOS] ✅ SUCCESS");
            setUpcomingTodos(res.data.result);
        })
        .catch((err) => console.log("error"));
};
