import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Box } from ".";
import "views/MyAccount/styles/boxs.style.scss";
import { deleteUser } from "views/MyAccount/adapters/user/deleteUser";

export const DateBox = ({ info }) => {
    let navigate = useNavigate();
    const [isDelete, setIsDelete] = useState(false);
    const [confirmsDelete, setConfirmsDelete] = useState(false);
    const [pw, setPw] = useState("");

    const variants = {
        open: { opacity: 1, x: "-112%", y: "-50%", scale: 1.05 },
        closed: { opacity: 1, x: 0 },
    };

    const handleDeleteUser = () => {
        deleteUser(pw, navigate);
        console.log(pw);
    };
    return (
        <Box
            className="date-box col"
            isUpdate={isDelete}
            animate={isDelete ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8 }}
        >
            {isDelete ? (
                <header className="delete-header">
                    <Icon className="col_icon_01" icon="gridicons:sign-out" />{" "}
                    회원 탈퇴
                </header>
            ) : (
                <Icon className="col_icon_01" icon="uil:calender" />
            )}

            {isDelete ? (
                <main className="delete-main">
                    {confirmsDelete ? (
                        <p>탈퇴를 위한 비밀번호를 입력해주세요</p>
                    ) : (
                        <p>
                            <span>{info.nickName}</span> 님의 모든 개인 정보,
                            반려견 정보가 함께 삭제됩니다. <br />
                            진행하시겠습니까?
                        </p>
                    )}

                    <div className="btn-container">
                        {confirmsDelete ? (
                            <>
                                <input
                                    type="password"
                                    placeholder="비밀번호"
                                    value={pw}
                                    onChange={(e) => setPw(e.target.value)}
                                />
                                <button onClick={handleDeleteUser}>확인</button>
                            </>
                        ) : (
                            <>
                                <button onClick={() => setConfirmsDelete(true)}>
                                    네, <br />
                                    탈퇴하겠습니다
                                </button>
                                <button onClick={() => setIsDelete(false)}>
                                    아니요, <br /> 조금 더 생각해 볼께요
                                </button>
                            </>
                        )}
                    </div>
                </main>
            ) : (
                <>
                    <p className="col_text_02">
                        {info.joinDate} 부터 wpet과 함께하고 있습니다.
                    </p>
                    <p
                        className="col_text_03 delete"
                        onClick={() => setIsDelete(true)}
                    >
                        탈퇴하고 싶어요
                    </p>
                </>
            )}
        </Box>
    );
};
