import { petID } from 'models';
import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

export const getUserPets = async (
    setUserPets: Dispatch<SetStateAction<Array<petID>>>,
) => {
    await API.get('/users/auth/pets', {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [GET USER PETS] ✅ SUCCESS', res);
        setUserPets(res.data.result);
    });
};
