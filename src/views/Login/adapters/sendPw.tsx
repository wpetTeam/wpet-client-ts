import { API } from 'services';

export const sendPw = async (email, setShowsFindPw, setShowsLogin) => {
    await API.post(
        '/find-pw',
        { email: email },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [SENDPW] ✅ SUCCESS');
            setShowsFindPw(false);
            setShowsLogin(true);
        })
        .catch((err) => console.log('>>> [SENDPW] ❌ ERROR', err.message));
};
