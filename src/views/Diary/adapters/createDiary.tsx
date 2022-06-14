import { Diary } from 'models';
import { API } from 'services';

export const createDiary = async (diaryData: Diary) => {
    await API.post('/diarys', diaryData, {
        withCredentials: true,
    })
        .then((res) => {
            console.log('>>> [DIARY CREATE] ✅ SUCCESS');
        })
        .catch((err) => console.log('>>> [DIARY CREATE] ❌ ERROR', err));
};
