import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';
// 반려견의 사진 가져오기
export const getPetPicture = async (
    id: number,
    setPetPics: Dispatch<SetStateAction<Array<string>>>,
) => {
    await API.get(`/pets/${id}`, {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [ACCOUNT / GET PET PIC] ✅ SUCCESS');
        setPetPics((old) => [...old, res.data.result.photo]);
    });
};
