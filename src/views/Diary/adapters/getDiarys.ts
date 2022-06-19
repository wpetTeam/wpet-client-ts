import { API } from 'services';

export const getDiarys = async (
    year: string,
    month: string,
    setDiarys: any,
) => {
    await API.get(`/users/auth/diarys/${year}/${month}`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [DIARY GET] ✅ SUCCESS');
            setDiarys(res.data.result);
        })
        .catch((err) => console.log('>>> [DIARY GET] ❌ ERROR', err));
};
