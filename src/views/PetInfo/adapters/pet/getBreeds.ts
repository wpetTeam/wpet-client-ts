import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

export const getBreeds = async (
    setBreeds: Dispatch<SetStateAction<Array<string>>>,
) => {
    await API.get('/breeds', {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [BREEDS GET] ✅ SUCCESS');
            if (res.status === 200) {
                setBreeds(res.data.result);
            }
        })
        .catch((err) => console.log('>>> [BREEDS GET] ❌ ERROR', err.message));
};
