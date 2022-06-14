import React, { SetStateAction, Dispatch } from 'react';
import { FaPaw } from 'react-icons/fa';
import { removePicture, uploadPicture } from 'utils';
import 'views/Signup/styles/components.style.scss';

export const ProfilePicture = (props: {
    type?: string;
    profile: string;
    setProfile: Dispatch<SetStateAction<string>>;
}) => {
    var inputRef: any;
    return (
        <React.Fragment>
            {props.profile === '' && (
                <div className="picture-select">
                    <div className="input_picture_01">
                        <FaPaw
                            className="icon_upload"
                            onClick={() => inputRef.click()}
                        />
                        <input
                            type="file"
                            accept="image/*"
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setProfile)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                    {props.type === 'signup' && (
                        <p className="text_picture_02">
                            <span>(선택)</span> 발바닥을 클릭해, <br /> 프로필
                            사진을 업로드해주세요.
                        </p>
                    )}
                </div>
            )}
            {props.profile !== '' && (
                <div className="picture-selected">
                    <img
                        className="img_picture"
                        src={props.profile}
                        alt="프로필 사진"
                    />
                    <div className="btn-container">
                        <button
                            className="btn_delete_01"
                            onClick={(e) => removePicture(e, props.setProfile)}
                        >
                            삭제하기
                        </button>
                        <button
                            className="btn_reselect_02"
                            onClick={() => inputRef.click()}
                        >
                            다시 선택하기
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            name="profile_img"
                            onChange={(e) => uploadPicture(e, props.setProfile)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
