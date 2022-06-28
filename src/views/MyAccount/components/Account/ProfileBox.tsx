import { Icon } from "@iconify/react";
import IMAGE from "assets/images/Character/common-character.png";
import { removePicture, uploadPicture } from "utils";
import { updateName, updatePicture } from "views/MyAccount/adapters";
import { Box } from ".";

export const ProfileBox = ({
    info,
    originName,
    originPic,
    profilePic,
    setProfilePic,
    updateProfile,
    setUpdateProfile,
    handleUpdateInfo,
}) => {
    const completeProfile = async () => {
        if (info.nickName === "") {
            alert("닉네임을 입력해주세요");
            return;
        }
        if (originName !== info.nickName) {
            updateName(info.nickName, setUpdateProfile);
        }
        if (originPic !== profilePic) {
            updatePicture(profilePic, setUpdateProfile);
        }
    };
    var inputRef: any;
    return (
        <Box className="profile-box col" isUpdate={updateProfile}>
            <div className="col_picture_01">
                {updateProfile && (
                    <Icon
                        className="icon-close"
                        icon="ep:circle-close-filled"
                        onClick={() => setUpdateProfile(false)}
                    />
                )}
                <img
                    className={updateProfile ? "pic update" : "pic"}
                    src={profilePic === "" ? IMAGE : profilePic}
                    alt="유저 프로필"
                />
                {updateProfile && (
                    <div className="btn-container">
                        <button
                            className="delete"
                            onClick={(e) => removePicture(e, setProfilePic)}
                        >
                            삭제
                        </button>
                        <button
                            className="reselect"
                            onClick={() => inputRef.click()}
                        >
                            재선택
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, setProfilePic)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                )}
            </div>
            <div className="col_name_02">
                <input
                    className={updateProfile ? "input update" : "input"}
                    name="nickName"
                    value={info.nickName || ""}
                    onChange={handleUpdateInfo}
                    disabled={updateProfile ? false : true}
                    placeholder="닉네임"
                />
            </div>
            <div className="col_btn_03">
                {updateProfile ? (
                    <button onClick={completeProfile}>수정 완료</button>
                ) : (
                    <button onClick={() => setUpdateProfile(true)}>
                        정보 수정
                    </button>
                )}
            </div>
        </Box>
    );
};
