import { API } from 'services';
import { authEmail, newUser } from 'models';
import { SetStateAction, Dispatch } from 'react';
import { sendAuth } from './sendAuth';

// Signup -> [POST] /users
export const handleSignup = async (
    userData: newUser,
    setAuthEmail: Dispatch<SetStateAction<string>>,
    setConflictMsg: Dispatch<SetStateAction<string>>,
    setShowsConflict: Dispatch<SetStateAction<boolean>>,
    setShowsAuth: Dispatch<SetStateAction<boolean>>,
    setShowsSignupModal: Dispatch<SetStateAction<boolean>>,
) => {
    setAuthEmail(userData.email);
    await API.post('/users', userData)
        .then((res) => {
            console.log('>>> [SIGNUP] ✅ SUCCESS');
            setShowsSignupModal(false);
            setShowsAuth(true);
        })
        .catch((err) => {
            console.log('>>> [SIGNUP] ❌ ERROR :', err);
            if (err.response.status === 409) {
                var errMsg = err.response.data.errorMessage;
                setShowsConflict(true);
                if (errMsg === 'DUPLICATE EMAIL') {
                    setConflictMsg('이메일');
                } else if (errMsg === 'DUPLICATE NICKNAME') {
                    setConflictMsg('닉네임');
                } else {
                    setConflictMsg('닉네임과 이메일');
                }
            } else if (err.response.status === 403) {
                const authEmail: authEmail = {
                    email: userData.email,
                };
                sendAuth(authEmail);
                setShowsSignupModal(false);
                setShowsAuth(true);
            }
        });
};
