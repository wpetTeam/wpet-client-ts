import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { uploadPicture, removePicture } from 'utils';
import { Icon } from '@iconify/react';
import styled from 'styled-components';
import '../styles/components.style.scss';

export const Picture = (props: {
    picture: string;
    setPicture: Dispatch<SetStateAction<string>>;
    color: string;
}) => {
    var inputRef: any;
    const display_img = document.querySelector('.img-picture');
    const display_frame = document.querySelector('.div-frame');

    useEffect(() => {
        console.log('picture change');
    }, [display_img?.clientHeight]);
    // 버그 발견, 이미지 사이즈가 그때그때 바뀌지가 않음(바뀌는 렌더링 타이밍 확인해보기). -> 버튼 동작에 이상을 줌(큰 사이즈 -> 작은 사이즈), 사이즈가 안 맞아서(일종의 undefined error)
    useEffect(() => {
        if (display_img?.clientHeight !== undefined && display_frame !== null) {
            let width = display_img.clientWidth;
            let height = display_img.clientHeight;
            if (height >= width * 1.7) {
                console.log(height / width, 'picture : size 1');
                // 16:9
                display_frame.setAttribute(
                    'style',
                    'width: 40%; height: fit-content;',
                );
            } else if (height >= width * 1.3) {
                console.log(height / width, 'picture : size 2');
                // 4:3
                display_frame.setAttribute(
                    'style',
                    'width: 65%;height: fit-content;',
                );
            } else {
                console.log(height / width, 'picture : size 3');
                display_frame.setAttribute(
                    'style',
                    'width: 80%;height: fit-content;',
                );
            }
        }
    }, [display_img?.clientHeight]);

    return (
        <React.Fragment>
            {props.picture === '' ? (
                <Frame className="picture-frame" background={props.color}>
                    <div className="picture-container">
                        <Icon
                            className="icon-upload"
                            icon="gridicons:cloud-upload"
                            name="upload-btn"
                            onClick={() => inputRef.click()}
                        />
                        <p className="text-upload">
                            특별한 오늘을 기록한 사진이 있나요?
                            <br />위 버튼을 눌러 업로드해주세요!{' '}
                        </p>
                        <input
                            type="file"
                            accept="image/*"
                            name="picture_img"
                            onChange={(e) => uploadPicture(e, props.setPicture)}
                            ref={(refParam) => (inputRef = refParam)}
                            hidden={true}
                        />
                    </div>
                </Frame>
            ) : (
                <div className="picture-container selected">
                    <Frame className="div-frame" background={props.color}>
                        <img
                            className="img-picture"
                            src={props.picture}
                            alt="다이어리 사진"
                        />
                    </Frame>
                    <div className="btn-conatiner">
                        <button
                            className="btn delete"
                            onClick={(e) => removePicture(e, props.setPicture)}
                        >
                            삭제하기
                        </button>
                        <button
                            className="btn reselect"
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

const Frame = styled.div<{ background: string }>`
    border: 6px solid ${(props) => props.background};
    box-shadow: 8px 8px 0px 0px ${(props) => props.background}80;
`;
