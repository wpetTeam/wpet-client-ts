import { Header } from 'components/home/Header';
import { Main } from './layouts/Main';
import './styles/layouts.style.scss';

const MyAccount = () => {
    return (
        <div className="myaccount-container">
            <Header />
            <Main />
        </div>
    );
};

export default MyAccount;
