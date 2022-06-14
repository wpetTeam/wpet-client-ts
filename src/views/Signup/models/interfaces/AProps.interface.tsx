import { Dispatch, SetStateAction } from 'react';

export interface AProps {
    email: string;
    needsAuth: boolean;
    setNeedsAuth: Dispatch<SetStateAction<boolean>>;
    setShowsAuth: Dispatch<SetStateAction<boolean>>;
    setShowsWelcome: Dispatch<SetStateAction<boolean>>;
    setShowsSignupModal: Dispatch<SetStateAction<boolean>>;
    setIsBlur: Dispatch<SetStateAction<boolean>>;
}
