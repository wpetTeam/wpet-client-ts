import { useNavigate } from 'react-router-dom';
import { API } from 'services';
import './Dropdown.style.scss';

export const Dropdown = () => {
    const navigate = useNavigate();

    const logoutHandler = async () => {
        await API.get('/user/logout', {
            withCredentials: true,
        })
            .then((res) => console.log('>>> [LOGOUT] ✅ SUCCESS', res.data))
            .catch((err) => console.log('>>> [LOGOUT] ❌ ERROR', err.message));
        navigate('/');
    };

    const myAccountHandler = () => {
        navigate('/mypage');
    };

    return (
        <div className="dropdown-list">
            <button className="dropdown__item" onClick={myAccountHandler}>
                나의 계정
            </button>
            <button className="dropdown__item" onClick={logoutHandler}>
                로그아웃
            </button>
        </div>
    );
};
