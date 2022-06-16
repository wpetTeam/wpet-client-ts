import { newDiary } from 'models';
import { API } from 'services';

export const createDiary = async (diaryData: newDiary) => {
    await API.post('/diarys', diaryData, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [DIARY CREATE] ✅ SUCCESS');
        })
        .catch((err) => console.log('>>> [DIARY CREATE] ❌ ERROR', err));
};
