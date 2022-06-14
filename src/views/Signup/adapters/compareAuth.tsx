import { API } from 'services';
import { authData } from 'models';
import { Dispatch, SetStateAction } from 'react';

export const compareAuth = async (
    authData: authData,
    setShowsAuth: Dispatch<SetStateAction<boolean>>,
    setIsMatch: Dispatch<SetStateAction<boolean>>,
) => {
    await API.post('/users/auth', authData)
        .then((res) => {
            console.log('>>> [AUTH COMPARE] ✅ SUCCESS');
            if (res.status === 201) {
                setShowsAuth(false);
            }
        })
        .catch((err) => {
            console.log('>>> [AUTH COMPARE] ❌ ERROR', err.response);
            if (err.response.status === 401) {
                setIsMatch(true);
            }
        });
};
