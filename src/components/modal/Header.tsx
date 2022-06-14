import { IoIosClose } from 'react-icons/io';
import LOGO_IMAGE from 'assets/images/Logo/text-icon.png';
import FINDPW_IMAGE from 'assets/images/Character/findpw-character.png';
import { Eclipse } from 'assets/styles/shared/modal.style';
import './Header.style.scss';
import { FC } from 'react';

interface IProps {
    showsConflict?: boolean;
    handleCloseBtn: () => void;
    type?: string;
}
export const Header: FC<IProps> = ({ showsConflict, handleCloseBtn, type }) => {
    return (
        <Eclipse
            className="col_eclipse_01"
            background={showsConflict ? '#f3c5b620' : '#f4e7e3'}
            visibility="visible"
        >
            <div>
                {type === 'findPw' ? (
                    <img
                        className="img_logo"
                        src={FINDPW_IMAGE}
                        alt="비밀번호 찾기"
                    />
                ) : (
                    <img className="img_logo" src={LOGO_IMAGE} alt="로고" />
                )}
            </div>
            <div>
                <IoIosClose
                    className="icon_close"
                    onClick={handleCloseBtn}
                    size={30}
                />
            </div>
        </Eclipse>
    );
};
