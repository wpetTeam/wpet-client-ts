import { API } from 'services';

export const getAuth = async (setUser) => {
    await API.get('/users/auth', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [HOME] ✅ SUCCESS', res.data);
            if (res.status === 200) {
                setUser(res.data);
            }
        })
        .catch((err) => console.log('>>> [HOME] ❌ ERROR', err.message));
};
