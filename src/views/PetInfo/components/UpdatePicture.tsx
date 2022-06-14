import React, { SetStateAction, Dispatch } from 'react';
import { removePicture, uploadPicture } from 'utils';
import 'views/Signup/styles/components.style.scss';

export const UpdatePicture = (props: {
    picture: string;
    setPicture: Dispatch<SetStateAction<string>>;
}) => {
    var inputRef: any;
    return (
        <React.Fragment>
            {props.picture === '' && (
                <div className="picture-select">
                    <div className="input_picture_01">
                        <input
                            type="file"
                            accept="image/*"
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setPicture)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </div>
            )}
            {props.picture !== '' && (
                <div className="picture-selected">
                    <img
                        className="img-picture"
                        src={props.picture}
                        alt="프로필 사진"
                    />
                    <div className="btn-container">
                        <button
                            className="btn_delete_01"
                            onClick={(e) => removePicture(e, props.setPicture)}
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
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setPicture)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </div>
            )}
        </React.Fragment>
    );
};
