import { API } from 'services';
import { Dispatch, SetStateAction } from 'react';
import { Diary } from 'models';

export const getDiary = async (
    petID: number,
    setDiary: Dispatch<SetStateAction<Array<Diary>>>,
) => {
    await API.get(`/pets/${petID}/diarys`, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [DIARY CREATE] ✅ SUCCESS');
            setDiary((old) => [...old, res.data.result]);
        })
        .catch((err) => console.log('>>> [DIARY CREATE] ❌ ERROR', err));
};
