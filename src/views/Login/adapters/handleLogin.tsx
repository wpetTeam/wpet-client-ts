import { API } from 'services';
import { authEmail, User } from 'models';
import { errMsg } from '../models';
import { Dispatch, SetStateAction } from 'react';
import { sendAuth } from 'views/Signup/adapters';

export const handleLogin = async (
    userData: User,
    errorMsg: errMsg,
    setAuthEmail: Dispatch<SetStateAction<string>>,
    setErrorMsg: Dispatch<SetStateAction<errMsg>>,
    setShowsLogin: Dispatch<SetStateAction<boolean>>,
    setShowsAuth: Dispatch<SetStateAction<boolean>>,
) => {
    setAuthEmail(userData.email);

    await API.post('/login', userData, {
        withCredentials: true,
    })
        .then(async (res) => {
            console.log('>>> [LOGIN] ✅ SUCCESS', res.data);
        })
        .catch((err) => {
            console.error('>>> [LOGIN] ❌ ERROR', err);
            if (err.response.status === 404) {
                setErrorMsg({
                    ...errorMsg,
                    email: '존재하지 않는 이메일입니다.',
                });
            } else if (err.response.status === 401) {
                setErrorMsg({
                    ...errorMsg,
                    pw: '비밀번호가 올바르지 않습니다.',
                });
            } else if (err.response.status === 400) {
                setErrorMsg({
                    ...errorMsg,
                    email: '올바르지 않은 이메일 형식입니다.',
                });
            } else if (err.response.status === 403) {
                const authEmail: authEmail = {
                    email: userData.email,
                };
                sendAuth(authEmail);
                setShowsLogin(false);
                setShowsAuth(true);
            }
        });
};
