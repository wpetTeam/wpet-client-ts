import { useState } from "react";
import { Icon } from "@iconify/react";
import {
    updateEmail as handleUpdateEmail,
    sendAuth,
} from "views/MyAccount/adapters";
import { Box } from ".";
import "views/MyAccount/styles/boxs.style.scss";

export const EmailBox = ({
    info,
    updateEmail,
    setUpdateEmail,
    handleUpdateInfo,
}) => {
    const [isSend, setIsSend] = useState(false);
    const [authCode, setAuthCode] = useState("");
    const variants = {
        open: { opacity: 1, x: "105%", y: "-50%", scale: 1.02 },
        closed: { opacity: 1, x: 0, y: 0 },
    };
    return (
        <Box
            className="email-box col"
            isUpdate={updateEmail}
            animate={updateEmail ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8 }}
        >
            <div className="col_icon_01">
                {updateEmail && (
                    <Icon
                        className="icon-close"
                        icon="ep:circle-close-filled"
                        onClick={() => setUpdateEmail(false)}
                    />
                )}
                {updateEmail ? (
                    <div className="div-update row">
                        <Icon className="update" icon="dashicons:email-alt2" />
                        <p>이메일 변경</p>
                    </div>
                ) : (
                    <Icon
                        className="success"
                        icon="ic:baseline-mark-email-read"
                    />
                )}
            </div>
            <div className="col_input_02 row">
                <div className="row_input_01">
                    {updateEmail && <label>새로운 이메일</label>}
                    <input
                        className={
                            updateEmail ? "input-email update" : "input-email"
                        }
                        name="email"
                        value={info.email !== undefined && info.email}
                        onChange={handleUpdateInfo}
                        disabled={updateEmail ? false : true}
                    />
                </div>
                {updateEmail ? (
                    <button
                        className="row_btn_02"
                        style={{ marginTop: "4%" }}
                        onClick={() => sendAuth(info.email, setIsSend)}
                    >
                        인증
                    </button>
                ) : (
                    <button
                        className="row_btn_02"
                        onClick={() => setUpdateEmail(true)}
                    >
                        변경
                    </button>
                )}
            </div>
            {updateEmail ? (
                isSend && (
                    <div className="col_auth_03 auth-check">
                        <p className="text">
                            이메일로 발송된 인증번호를 입력해주세요.
                        </p>
                        <input
                            className="input-code"
                            value={authCode}
                            onChange={(e) => setAuthCode(e.target.value)}
                            placeholder="인증번호"
                        />
                        <button
                            className="btn-compare"
                            onClick={() =>
                                handleUpdateEmail(
                                    info.email,
                                    authCode,
                                    setIsSend,
                                )
                            }
                        >
                            확인
                        </button>
                    </div>
                )
            ) : (
                <p className="col_auth_03 auth-success">이메일 인증 완료</p>
            )}
        </Box>
    );
};
