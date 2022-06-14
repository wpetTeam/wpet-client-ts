import { API } from 'services';
export const getPets = async (setUserPets) => {
    await API.get('/users/auth/pets', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [ACCOUNT / GET USER PETS] ✅ SUCCESS', res);
            setUserPets(res.data.result);
        })
        .catch((err) => {
            console.log('>>> [ACCOUNT / GET USER PETS] ✅ ERROR', err);
        });
};
