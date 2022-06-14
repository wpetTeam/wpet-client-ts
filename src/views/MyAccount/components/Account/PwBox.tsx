import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Box } from '.';
import 'views/MyAccount/styles/boxs.style.scss';

export const PwBox = ({ updatePw, setUpdatePw }) => {
    const [pwData, setPwData] = useState({
        origin: '',
        new: '',
        newConfirm: '',
    });

    const handleChange = (e: any) => {
        setPwData({
            ...pwData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <Box className="pw-box col" isUpdate={updatePw}>
            {updatePw && (
                <Icon
                    className="icon-close"
                    icon="fa-solid:window-close"
                    onClick={() => setUpdatePw(false)}
                />
            )}
            {updatePw ? (
                <div className="div-update col">
                    <div className="col_div_01 title">
                        <Icon
                            className="col_icon_01"
                            icon="teenyicons:password-solid"
                        />
                        <p>비밀번호 변경</p>
                    </div>
                    <div className="col_input_02 origin-pw">
                        <label>기존 비밀번호</label>
                        <input
                            name="origin"
                            value={pwData.origin}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col_input_03 new-pw">
                        <label>새로운 비밀번호</label>
                        <input
                            name="new"
                            value={pwData.new}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col_input_04 new-pw-confirm">
                        <label>새로운 비밀번호 확인</label>
                        <input
                            name="newConfirm"
                            value={pwData.newConfirm}
                            onChange={handleChange}
                        />
                    </div>
                    {pwData.new.length > 0 &&
                        pwData.origin.length > 0 &&
                        pwData.newConfirm.length > 0 && (
                            <button
                                className="col_btn_05"
                                onClick={() =>
                                    updatePw(
                                        pwData.origin,
                                        pwData.new,
                                        setUpdatePw,
                                    )
                                }
                            >
                                변경하기
                            </button>
                        )}
                </div>
            ) : (
                <div className="div-not-update">
                    <Icon
                        className="col_icon_01"
                        icon="teenyicons:password-solid"
                    />
                    <p className="col_text_02">비밀번호 변경을 원하시나요?</p>
                    <button
                        className="col_btn_03"
                        onClick={() => setUpdatePw(true)}
                    >
                        네, 변경하고 싶습니다.
                    </button>
                </div>
            )}
        </Box>
    );
};
