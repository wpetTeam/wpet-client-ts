import { useState } from 'react';
import { SiKakaotalk, SiFacebook, SiInstagram } from 'react-icons/si';

export const Footer = () => {
    const [isClick, setIsClick] = useState(false);
    const showsContacts = () => {
        setIsClick(!isClick);
    };
    return (
        <div className="footer-container">
            {isClick ? (
                <button
                    className="btn_contacts clicked"
                    onClick={showsContacts}
                >
                    <SiKakaotalk className="icon__item kakao" />
                    <SiFacebook className="icon__item facebook" />
                    <SiInstagram className="icon__item insta" />
                </button>
            ) : (
                <button className="btn_contacts" onClick={showsContacts}>
                    Contacts
                </button>
            )}
        </div>
    );
};
