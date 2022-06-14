import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import {
    ProfileBox,
    PwBox,
    EmailBox,
    DateBox,
    PetBox,
} from '../components/Account';
import { getAuth, getPets, getPetPicture } from '../adapters';
import { UserData } from 'models';
import '../styles/services.style.scss';
import '../styles/boxs.style.scss';

export const Account = () => {
    const [user, setUser] = useState<UserData>();
    // userInfo
    const [updateInfo, setUpdateInfo] = useState({});
    const [profilePic, setProfilePic] = useState('');

    // PetInfo
    const [userPets, setUserPets] = useState([]);
    const [petPics, setPetPics] = useState<Array<string>>([]);

    const [updateEmail, setUpdateEmail] = useState(false);
    const [updatePw, setUpdatePw] = useState(false);
    const [updateProfile, setUpdateProfile] = useState(false);

    useEffect(() => {
        getAuth(setUser, setUpdateInfo, setProfilePic);
        getPets(setUserPets);
    }, []);

    useEffect(() => {
        console.log(userPets);
        if (user !== undefined) {
            setProfilePic(user.photo);
        }
        if (userPets !== undefined) {
            for (let i = 0; i < userPets.length; i++) {
                getPetPicture(userPets[i]['petID'], setPetPics);
            }
        }
    }, [user, userPets]);

    const handleUpdateInfo = (e: any) => {
        setUpdateInfo({ ...updateInfo, [e.target.name]: e.target.value });
    };

    return (
        <div className="account-container col">
            <div className="col_01">
                <EmailBox
                    info={updateInfo}
                    updateEmail={updateEmail}
                    setUpdateEmail={setUpdateEmail}
                    handleUpdateInfo={handleUpdateInfo}
                />
                <PwBox updatePw={updatePw} setUpdatePw={setUpdatePw} />
                <DateBox info={updateInfo} />
            </div>
            <div className="col_02">
                <ProfileBox
                    info={updateInfo}
                    originName={user?.nickName}
                    originPic={user?.photo}
                    profilePic={profilePic}
                    setProfilePic={setProfilePic}
                    updateProfile={updateProfile}
                    setUpdateProfile={setUpdateProfile}
                    handleUpdateInfo={handleUpdateInfo}
                />
            </div>
            <div className="col_03">
                <PetBox userPets={userPets} petPics={petPics} />
                <div className="community-box">
                    <Icon
                        className="icon no"
                        icon="teenyicons:message-no-access-solid"
                    />
                    커뮤니티에 가입하지 않았습니다.
                </div>
            </div>
            {/* {showsUpdatePw && (
                // <UpdatePwModal setShowsUpdatePw={setShowsUpdatePw} />
            )} */}
        </div>
    );
};
