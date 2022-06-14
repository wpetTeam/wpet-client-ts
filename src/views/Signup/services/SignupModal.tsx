import { useState, FC } from 'react';
import { checkUserInfo, CheckPwDetail } from '../utils/validations';
import { handleSignup } from '../adapters';
import { Frame } from 'assets/styles/shared/modal.style';
import { Header } from 'components/modal/Header';
import { Email, Pw, PwConfirmation, Name, Picture } from '../components/inputs';
import { User, ErrMsg, PwErrCheck } from '../models/types';
import { newUser } from 'models';
import { SProps } from '../models/interfaces';
import { ConflictModal } from './ConflictModal';
import '../styles/services.style.scss';

export const SignupModal: FC<SProps> = (props: SProps) => {
    const [user, setUser] = useState<User>({
        nickName: '',
        email: '',
        pw: '',
        pwConfirm: '',
    });
    const [errMessage, setErrMessage] = useState<ErrMsg>({
        name: '',
        email: '',
        pw: '',
    });
    const [pwErrorCheck, setPwErrorCheck] = useState<PwErrCheck>({
        number: false,
        symbol: false,
        length: false,
    });
    const [profile, setProfile] = useState('');
    const [showsConflict, setShowsConflict] = useState(false);
    const [conflictMsg, setConflictMsg] = useState('');

    function handleChange(e) {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
        if (e.target.name === 'pw') {
            setPwErrorCheck({
                ...pwErrorCheck,
                number: CheckPwDetail(e.target.value, 0),
                symbol: CheckPwDetail(e.target.value, 1),
                length: CheckPwDetail(e.target.value, 2),
            });
        }
        setErrMessage({
            ...errMessage,
            name: '',
            email: '',
            pw: '',
        });
    }
    const handleButton = async () => {
        if (checkUserInfo(user.nickName, user.email, user.pw, setErrMessage))
            return;
        const userData: newUser = {
            nickName: user.nickName,
            email: user.email,
            pw: user.pw,
            photo: profile,
            location: '',
        };
        handleSignup(
            userData,
            props.setAuthEmail,
            setConflictMsg,
            setShowsConflict,
            props.setShowsAuth,
            props.setShowsSignupModal,
        );
    };
    const handleCloseBtn = () => {
        props.setShowsSignupModal(false);
        props.setIsBlur(false);
    };
    return (
        <div className="modal-signup">
            <Header
                showsConflict={showsConflict}
                handleCloseBtn={handleCloseBtn}
            />
            <Frame
                className="col_frame_02"
                background={showsConflict ? '#f3c5b620' : '#f4e7e3'}
                visibility="visible"
            >
                <div className="header">
                    <p className="text_title">
                        Welcome to <span>wpet </span>!
                    </p>
                    <p className="text_description">
                        반갑습니다. 반려견의 일상을 특별하게 기록해보세요.
                    </p>
                </div>
                <div className="main">
                    <div className="row_picture_01">
                        <Picture
                            type="signup"
                            profile={profile}
                            setProfile={setProfile}
                        />
                    </div>
                    <div className="row_input_02 col">
                        <div className="input-container_01">
                            <Name
                                user={user}
                                errMessage={errMessage}
                                handleChange={handleChange}
                                handleButton={handleButton}
                            />
                            <Email
                                user={user}
                                errMessage={errMessage}
                                handleChange={handleChange}
                                handleButton={handleButton}
                            />
                            <Pw
                                user={user}
                                errMessage={errMessage}
                                pwErrorCheck={pwErrorCheck}
                                handleChange={handleChange}
                                handleButton={handleButton}
                            />
                            <PwConfirmation
                                user={user}
                                handleChange={handleChange}
                                handleButton={handleButton}
                            />
                        </div>
                        <div className="btn-container_02">
                            <button className="btn_auth" onClick={handleButton}>
                                본인 인증하기
                            </button>
                        </div>
                    </div>
                </div>
            </Frame>
            {showsConflict && (
                <ConflictModal
                    conflictMsg={conflictMsg}
                    setShowsConflict={setShowsConflict}
                />
            )}
        </div>
    );
};
