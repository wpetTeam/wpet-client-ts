import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

// 이메일 재설정 인증 번호 확인
export const updatePw = async (
    originEmail: string,
    newEmail: string,
    setUpdatePw: Dispatch<SetStateAction<boolean>>,
) => {
    await API.put(
        '/users/auth/pw',
        {
            oldPw: originEmail,
            newPw: newEmail,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [UPDATE EMAIL ] ✅ SUCCESS');
            window.location.reload();
            setUpdatePw(false);
        })
        .catch((err) => console.log('>>> [UPDATE EMAIL ] ❌ ERRPR'));
};
