import { authEmail } from 'models';
import { API } from 'services';

export const sendAuth = async (email: authEmail) => {
    await API.post('/auth-mails', email)
        .then((res) => {
            console.log('>>> [AUTH RESEND] ✅ SUCCESS');
        })
        .catch((err) =>
            console.log('>>> [AUTH RESEND] ❌ ERROR', err.response),
        );
};
