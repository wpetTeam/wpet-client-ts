import { API } from 'services';

// 사용자 정보 가져오기
export const getAuth = async (setUser, setUpdateInfo, setProfilePic) => {
    await API.get('/users/auth', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [ACCOUNT / GET USER INFO] ✅ SUCCESS', res.data);
            setUser(res.data);
            setUpdateInfo(res.data);
        })
        .catch((err) =>
            console.log('>>> [ACCOUNT/ GET USER INFO] ❌ ERROR', err.message),
        );
};
