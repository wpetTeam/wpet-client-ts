import React, { useState, useEffect } from 'react';
import { Dispatch, SetStateAction, FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { AuthModal, SignupModal } from './services';
import './styles/services.style.scss';

interface IProps {
    setIsBlur: Dispatch<SetStateAction<boolean>>;
    setAuthEmail: Dispatch<SetStateAction<string>>;
    setShowsSignupModal: Dispatch<SetStateAction<boolean>>;
    setShowsLogin: Dispatch<SetStateAction<boolean>>;
    setShowsAuth: Dispatch<SetStateAction<boolean>>;
}

export const Signup: FC<IProps> = (props: IProps) => {
    const [showsSignup, setShowsSignup] = useState(true);

    useEffect(() => {}, [showsSignup]);

    return (
        <ThemeProvider theme={theme}>
            <div className="signup-container">
                {showsSignup && (
                    <SignupModal
                        setIsBlur={props.setIsBlur}
                        setShowsSignupModal={props.setShowsSignupModal}
                        setShowsLogin={props.setShowsLogin}
                        setShowsSignup={setShowsSignup}
                        setShowsAuth={props.setShowsAuth}
                        setAuthEmail={props.setAuthEmail}
                    />
                )}
            </div>
        </ThemeProvider>
    );
};
