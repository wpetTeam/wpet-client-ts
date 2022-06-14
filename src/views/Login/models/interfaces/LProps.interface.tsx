import { Dispatch, SetStateAction } from 'react';

export interface LProps {
    setIsBlur: Dispatch<SetStateAction<boolean>>;
    setAuthEmail: Dispatch<SetStateAction<string>>;
    setShowsLogin: Dispatch<SetStateAction<boolean>>;
    setShowsSignupModal: Dispatch<SetStateAction<boolean>>;
    setShowsFindPw: Dispatch<SetStateAction<boolean>>;
    setShowsAuth: Dispatch<SetStateAction<boolean>>;
}
