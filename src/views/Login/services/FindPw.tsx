import { useState } from 'react';
import { Dispatch, SetStateAction, FC } from 'react';
import { Header, Input } from 'components/modal';
import { sendPw } from '../adapters/sendPw';
import { Frame } from 'assets/styles/shared/modal.style';

interface IProps {
    setIsBlur: Dispatch<SetStateAction<boolean>>;
    setShowsLogin: Dispatch<SetStateAction<boolean>>;
    setShowsFindPw: Dispatch<SetStateAction<boolean>>;
}
export const FindPassword: FC<IProps> = (props: IProps) => {
    const [email, setEmail] = useState('');
    const handleCloseBtn = () => {
        props.setShowsFindPw(false);
        props.setIsBlur(false);
    };
    return (
        <div className="findpw-modal">
            <Header handleCloseBtn={handleCloseBtn} type="findPw" />
            <Frame
                className="col_frame_02"
                visibility="visible"
                background="#f4e7e3"
            >
                <div className="header">
                    <p>비밀번호를 잊어버렸나요?</p>
                </div>
                <div className="main">
                    <p className="text-description">
                        가입하신 이메일로 임시 비밀번호를 발급해드립니다.
                    </p>
                    <Input
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일"
                    />
                </div>
                <div className="footer">
                    <button
                        onClick={() =>
                            sendPw(
                                email,
                                props.setShowsFindPw,
                                props.setShowsLogin,
                            )
                        }
                    >
                        확인
                    </button>
                </div>
            </Frame>
        </div>
    );
};
