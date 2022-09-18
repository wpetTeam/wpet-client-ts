import { API } from 'services';

export const getPet = async (id: number, setPetInfo: any) => {
    await API.get(`/pets/${id}`, {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [CHECKUP / GET PET] ✅ SUCCESS');
        setPetInfo(res.data.result);
    });
};
