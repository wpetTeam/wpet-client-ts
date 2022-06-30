import { API } from "services";

export const deleteUser = async (password: string, navigate: Function) => {
    await API.delete("/users/auth", {
        data: { pw: password },
        withCredentials: true,
    })
        .then((res) => {
            console.log(">>> [UPDATE EMAIL SEND CODE] ✅ SUCCESS");
            navigate("/");
        })
        .catch((err) =>
            console.log(">>> [UPDATE EMAIL SEND CODE] ❌ ERROR", err),
        );
};
