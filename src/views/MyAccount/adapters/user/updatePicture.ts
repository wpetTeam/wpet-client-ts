import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

// ProfileBox 사용자 사진 변경
export const updatePicture = async (
    profilePic: string,
    setUpdateProfile: Dispatch<SetStateAction<boolean>>,
) => {
    await API.patch(
        '/users/auth',
        { photo: profilePic },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [USER PROFILE UPDATE] ✅ SUCCESS');
            setUpdateProfile(false);
            window.location.reload();
        })
        .catch((err) => console.log('>>> [USER PROFILE UPDATE] ❌ ERROR', err));
};
