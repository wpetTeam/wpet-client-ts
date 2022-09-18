import { API } from 'services';

export const updatePet = async (id: number, petInfo, setIsUpdate) => {
    console.log(petInfo);
    await API.patch(`/pets/${id}`, petInfo, {
        withCredentials: true,
    }).then((res) => {
        console.log('>>> [CHECKUP / GET PET] ✅ SUCCESS');
        window.location.reload();
        setIsUpdate(false);
    });
};
