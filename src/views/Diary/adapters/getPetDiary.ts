import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';
import { Diary } from 'models';

export const getPetDiary = async (
    petID: number,
    setDiary: Dispatch<SetStateAction<Array<Diary>>>,
) => {
    await API.get(`/pets/${petID}/diarys`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [DIARY GET] ✅ SUCCESS');
            setDiary((old) => [...old, res.data.result]);
        })
        .catch((err) => console.log('>>> [DIARY GET] ❌ ERROR', err));
};
