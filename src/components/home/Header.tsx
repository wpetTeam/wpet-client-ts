import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillPatchPlusFill as DropDownIcon } from "react-icons/bs";
import LOGO_IMAGE from "assets/images/Logo/text-icon.png";
import { getAuth } from "views/Home/adapters/getAuth";
import { Dropdown } from "./Dropdown";
import { UserData } from "models";
import "./Header.style.scss";

export const Header = () => {
    const [user, setUser] = useState<UserData>();
    const [showsDropdown, setShowsDropdown] = useState(false);

    useEffect(() => {
        getAuth(setUser);
    }, []);

    return (
        <div className="home-header-container row">
            <Link to="/home" style={{ textDecoration: "none" }}>
                <div className="row_logo_01">
                    <img src={LOGO_IMAGE} alt="로고" width={55} height={55} />
                    wpet
                </div>
            </Link>
            <div className="row_nav_02">
                <nav>
                    <Link
                        to="/diarys/read"
                        style={{ textDecoration: "none", color: "gray" }}
                    >
                        <p>다이어리</p>
                    </Link>
                </nav>
                <nav>
                    <Link
                        to="/pet/info"
                        style={{ textDecoration: "none", color: "gray" }}
                    >
                        나의 반려견
                    </Link>
                </nav>
                <nav>
                    <Link
                        to="/pet-schedule"
                        style={{ textDecoration: "none", color: "gray" }}
                    >
                        반려견 일정
                    </Link>
                </nav>
                <nav>
                    <Link
                        to="/user"
                        style={{ textDecoration: "none", color: "gray" }}
                    >
                        나의 계정
                    </Link>
                </nav>
            </div>
            <div className="row_profile_03">
                <img
                    className="img_profile"
                    src={user !== undefined ? user.photo : LOGO_IMAGE}
                    alt="프로필"
                    width={40}
                    height={40}
                />
                <p className="text_name">
                    <span>{user !== undefined && user.nickName}</span>
                    {"    "}님
                </p>
                <button
                    onClick={() => setShowsDropdown(!showsDropdown)}
                    className="btn_dropdown"
                    id="touch"
                >
                    <DropDownIcon
                        size={16}
                        className={
                            showsDropdown
                                ? "icon_dropdown show"
                                : "icon_dropdown"
                        }
                    />
                </button>
            </div>
            {showsDropdown && <Dropdown />}
        </div>
    );
};
