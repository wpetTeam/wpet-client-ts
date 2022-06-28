import { useNavigate } from "react-router-dom";
import { API } from "services";
import "./Dropdown.style.scss";

export const Dropdown = () => {
    const navigate = useNavigate();
    const logoutHandler = async () => {
        await API.post(
            "/logout",
            {},
            {
                withCredentials: true,
            },
        )
            .then((res) => {
                console.log(">>> [LOGOUT] ✅ SUCCESS", res);
                navigate("/");
            })
            .catch((err) => console.log(">>> [LOGOUT] ❌ ERROR", err));
    };
    const myAccountHandler = () => {
        navigate("/my-account");
    };
    return (
        <div className="dropdown-list">
            <button className="dropdown__item" onClick={myAccountHandler}>
                나의 계정
            </button>
            <button className="dropdown__item" onClick={logoutHandler}>
                로그아웃
            </button>
        </div>
    );
};
