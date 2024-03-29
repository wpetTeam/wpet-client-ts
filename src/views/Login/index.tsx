import React, { useState, useEffect, FC } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "assets/styles/theme";
import KAKAO_LOGO from "assets/images/Logo/kakao_login.png";
import { Header } from "components/modal/Header";
import { Frame } from "assets/styles/shared/modal.style";
import { Input } from "components/modal";
import { handleLogin } from "./adapters/handleLogin";
import { LProps, errMsg } from "./models";
import { User } from "models";
import "./styles/services.style.scss";

const CLIENT_ID = process.env.REACT_APP_KAKAO_KEY;
const REDIRECT_URI = "http://localhost:3000/kakao-login";
const KAKAO_URI = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`;

export const Login: FC<LProps> = (props: LProps) => {
    let navigate = useNavigate();
    const [user, setUser] = useState<User>({ email: "", pw: "" });
    const [errorMsg, setErrorMsg] = useState<errMsg>({ email: "", pw: "" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setUser({
            ...user,
            [e.target.name]: value,
        });
    }
    useEffect(() => {
        setErrorMsg({
            email: "",
            pw: "",
        });
    }, [user.email, user.pw]);

    const handleLoginBtn = () => {
        const userData: User = {
            email: user.email,
            pw: user.pw,
        };
        handleLogin(
            userData,
            errorMsg,
            props.setAuthEmail,
            setErrorMsg,
            props.setShowsLogin,
            props.setShowsAuth,
            navigate,
        );
    };
    const handleSignupBtn = () => {
        props.setShowsLogin(false);
        props.setShowsSignupModal(true);
    };
    const handlePwFindBtn = () => {
        props.setShowsLogin(false);
        props.setShowsFindPw(true);
    };
    const handleCloseBtn = () => {
        props.setShowsLogin(false);
        props.setIsBlur(false);
        props.setAuthEmail("");
    };
    return (
        <ThemeProvider theme={theme}>
            <div className="login-container">
                <Header handleCloseBtn={handleCloseBtn} />
                <Frame
                    className="col_frame_02"
                    visibility="visible"
                    background="#f4e7e3"
                >
                    <div className="login-header">
                        Welcome to
                        <span> wpet </span>!
                    </div>
                    <div className="login-main col">
                        <Input
                            name="email"
                            value={user.email}
                            onChange={handleChange}
                            placeholder="이메일"
                            isError={errorMsg.email !== "" ? true : false}
                        />
                        {errorMsg.email !== "" && (
                            <p className="text-error">{errorMsg.email}</p>
                        )}
                        <Input
                            name="pw"
                            value={user.pw}
                            onChange={handleChange}
                            placeholder="비밀번호"
                            password
                            isError={errorMsg.pw !== "" ? true : false}
                        />
                        {errorMsg.pw !== "" && (
                            <p className="text-error">{errorMsg.pw}</p>
                        )}

                        <button
                            className="btn_login_01"
                            onClick={handleLoginBtn}
                        >
                            Login
                        </button>
                        <p className="text-find" onClick={handlePwFindBtn}>
                            비밀번호를 잊어버렸나요?
                        </p>
                        <p className="text-or">or</p>

                        <a href={KAKAO_URI}>
                            <img
                                src={KAKAO_LOGO}
                                alt="카카오 로그인"
                                width={250}
                            />
                        </a>
                    </div>
                    <div className="login-footer">
                        계정이 없다면,
                        <button onClick={handleSignupBtn}> Join Us </button>
                        에서 생성하세요!
                    </div>
                </Frame>
            </div>
        </ThemeProvider>
    );
};
