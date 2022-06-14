import { Dispatch, SetStateAction } from 'react';

export interface AProps {
    email: string;
    setShowsAuth: Dispatch<SetStateAction<boolean>>;
    setIsBlur: Dispatch<SetStateAction<boolean>>;
}
