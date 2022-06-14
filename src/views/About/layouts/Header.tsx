import { useState, Dispatch, SetStateAction, FC } from 'react';
import LOGO_IMAGE from 'assets/images/Logo/text-icon.png';
import { Button } from '../components/Button';
import { Login } from 'views/Login';
import { Signup } from 'views/Signup';
import '../styles/layouts.style.scss';
import { FindPassword } from 'views/Login/services/FindPw';
import { ReAuth } from 'views/Login/services/Reauth';

interface IProps {
    setIsBlur: Dispatch<SetStateAction<boolean>>;
}

export const Header: FC<IProps> = (props: IProps) => {
    const [showsLogin, setShowsLogin] = useState(false);
    const [showsFindPw, setShowsFindPw] = useState(false);
    const [showsAuth, setShowsAuth] = useState(false);
    const [showsSignupModal, setShowsSignupModal] = useState(false);

    const [authEmail, setAuthEmail] = useState('');

    const handleLoginBtn = () => {
        setShowsLogin(true);
        props.setIsBlur(true);
    };
    const handleSignupBtn = () => {
        setShowsSignupModal(true);
        props.setIsBlur(true);
    };

    return (
        <div className="header-container row">
            <div className="col_logo_01">
                <img src={LOGO_IMAGE} alt="logo" width={60} height={60} />
                <p>
                    반려견의 일상을 기록하는
                    <br />
                    특별한 일기장
                </p>
            </div>
            <div className="col_btn-container_02">
                <Button
                    text="Login"
                    hoverText="Login"
                    onClick={handleLoginBtn}
                    disabled={showsSignupModal || showsLogin ? true : false}
                    isStop={showsLogin ? true : false}
                />
                <Button
                    text="Join Us"
                    hoverText=" Welcome 🐾"
                    onClick={handleSignupBtn}
                    disabled={showsSignupModal || showsLogin ? true : false}
                    isStop={showsSignupModal ? true : false}
                />
            </div>
            {showsLogin && (
                <Login
                    setIsBlur={props.setIsBlur}
                    setAuthEmail={setAuthEmail}
                    setShowsLogin={setShowsLogin}
                    setShowsSignupModal={setShowsSignupModal}
                    setShowsFindPw={setShowsFindPw}
                    setShowsAuth={setShowsAuth}
                />
            )}
            {showsSignupModal && (
                <Signup
                    setIsBlur={props.setIsBlur}
                    setAuthEmail={setAuthEmail}
                    setShowsSignupModal={setShowsSignupModal}
                    setShowsLogin={setShowsLogin}
                    setShowsAuth={setShowsAuth}
                />
            )}
            {showsFindPw && (
                <FindPassword
                    setIsBlur={props.setIsBlur}
                    setShowsFindPw={setShowsFindPw}
                    setShowsLogin={setShowsLogin}
                />
            )}
            {showsAuth && (
                <ReAuth
                    email={authEmail}
                    setIsBlur={props.setIsBlur}
                    setShowsAuth={setShowsAuth}
                />
            )}
        </div>
    );
};
