import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

// 이메일 재설정 인증 번호 확인
export const updateEmail = async (
    email: string,
    authCode: string,
    setIsSend: Dispatch<SetStateAction<boolean>>,
) => {
    await API.put(
        '/users/auth/email',
        {
            newEmail: email,
            authCode: authCode,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [UPDATE EMAIL ] ✅ SUCCESS');
            setIsSend(false);
            window.location.reload();
        })
        .catch((err) => console.log('>>> [UPDATE EMAIL ] ❌ ERRPR'));
};
