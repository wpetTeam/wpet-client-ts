import { API } from 'services';

export const deletePet = async (id: number) => {
    await API.delete(`/pets/${id}`, {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [DELETE PET] ✅ SUCCESS');
        window.location.reload();
    });
};
