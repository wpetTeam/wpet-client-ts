import { Dispatch, SetStateAction } from 'react';

export interface SProps {
    setIsBlur: Dispatch<SetStateAction<boolean>>;
    setShowsSignupModal: Dispatch<SetStateAction<boolean>>;
    setShowsLogin: Dispatch<SetStateAction<boolean>>;
    setShowsSignup: Dispatch<SetStateAction<boolean>>;
    setShowsAuth: Dispatch<SetStateAction<boolean>>;
    setAuthEmail: Dispatch<SetStateAction<string>>;
}
