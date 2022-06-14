import React, { FC, useState } from 'react';
import { useInterval } from 'utils';
import { Header } from 'components/modal';
import { Frame } from 'assets/styles/shared/modal.style';
import { compareAuth, sendAuth } from '../adapters';
import { authData, authEmail } from 'models';
import { AProps } from '../models/interfaces';

export const AuthModal: FC<AProps> = (props: AProps) => {
    const [authCode, setAuthCode] = useState('');
    const [isMatch, setIsMatch] = useState(false);
    const [count, setCount] = useState(10);
    const [isRunning, setIsRunning] = useState(true);
    const delay = 1000;
    useInterval(
        () => {
            if (count === 0) {
                setIsRunning(false);
            } else {
                setCount(count - 1);
            }
        },
        isRunning ? delay : null,
    );
    const handleAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value);
    };
    const handleResendBtn = () => {
        const resendEmail: authEmail = { email: props.email };
        console.log(props.email);
        sendAuth(resendEmail);
        setCount(10);
        setIsRunning(true);
    };
    const handleCompareBtn = () => {
        const authData: authData = {
            email: props.email,
            authCode: authCode,
        };
        compareAuth(authData, props.setShowsAuth, setIsMatch);
    };
    const handleCloseBtn = () => {
        props.setShowsSignupModal(false);
        props.setIsBlur(false);
        props.setNeedsAuth(false);
    };
    return (
        <div className="modal-auth">
            <Header handleCloseBtn={handleCloseBtn} />
            <Frame
                className="col_frame_02"
                background="#f4e7e3"
                visibility="visible"
            >
                <div className="header">
                    {props.needsAuth ? (
                        <p className="text-already">
                            이미 가입된 이메일입니다.
                        </p>
                    ) : (
                        <p className="text-title">본인 확인</p>
                    )}
                </div>
                <div className="main">
                    <p className="text-description">
                        이메일로 발송된 인증번호를 입력해주세요.
                    </p>
                    <div className="auth-container row">
                        <div className="row_input_01 container col">
                            <input
                                className="col_input_01"
                                type="text"
                                value={authCode}
                                onChange={handleAuth}
                            />
                            {authCode.length > 0 && isMatch && (
                                <p className="col_text_02">
                                    인증번호가 일치하지 않습니다.
                                </p>
                            )}
                        </div>
                        {authCode.length > 0 && (
                            <button
                                className="row_btn_02 compare"
                                onClick={handleCompareBtn}
                            >
                                확인
                            </button>
                        )}
                    </div>
                </div>
                <div className="footer row">
                    <p className="row_text_01 time">
                        남은 인증시간 : <span> {count} </span>초
                    </p>
                    {count === 0 && (
                        <button
                            className="row_btn_02 resend"
                            onClick={handleResendBtn}
                        >
                            재전송
                        </button>
                    )}
                </div>
            </Frame>
        </div>
    );
};
