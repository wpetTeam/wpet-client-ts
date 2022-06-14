import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

// ProfileBox 사용자 닉네임 변경
export const updateName = async (
    newName: string,
    setUpdateProfile: Dispatch<SetStateAction<boolean>>,
) => {
    console.log(newName);
    await API.patch(
        '/users/auth',
        { nickName: newName },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [USER NICKNAME UPDATE] ✅ SUCCESS');
            setUpdateProfile(false);
            window.location.reload();
        })
        .catch((err) =>
            console.log('>>> [USER NICKNAME UPDATE] ❌ ERROR', err),
        );
};
