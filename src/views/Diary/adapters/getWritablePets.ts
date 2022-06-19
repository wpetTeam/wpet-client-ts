import { petID } from 'models';
import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

export const getWritablePets = async (
    setUserPets: Dispatch<SetStateAction<Array<petID>>>,
) => {
    await API.get(`/diarys/writable-pets`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [WRITABLE PET GET] ✅ SUCCESS');
            setUserPets(res.data.result);
        })
        .catch((err) => console.log('>>> [WRITABLE PET GET] ❌ ERROR', err));
};
