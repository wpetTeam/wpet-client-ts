import { Dispatch, SetStateAction } from 'react';
import { API } from 'services';

export const sendAuth = async (
    email: string,
    setIsSend: Dispatch<SetStateAction<boolean>>,
) => {
    await API.post(
        '/update-mails',
        {
            newEmail: email,
        },
        {
            withCredentials: true,
        },
    )
        .then((res) => {
            console.log('>>> [UPDATE EMAIL SEND CODE] ✅ SUCCESS');
            setIsSend(true);
        })
        .catch((err) => console.log('>>> [UPDATE EMAIL SEND CODE] ❌ ERRPR'));
};
