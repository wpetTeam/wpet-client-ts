import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import { DiaryDetails } from "models";
import { API } from "services";
import "views/Diary/styles/read.style.scss";

export const DiaryModal = (props: {
    petId: any;
    diaryId: number;
    setShowsDetail: Dispatch<SetStateAction<boolean>>;
    color: string;
}) => {
    const [detail, setDetail] = useState<DiaryDetails>();
    const [weather, setWeather] = useState<string>("");
    const [isSelect, setIsSelect] = useState<number>();

    useEffect(() => {
        const getDiaryDetail = async () => {
            await API.get(`/pets/${props.petId}/diarys/${props.diaryId}`, {
                withCredentials: true,
            }).then((res) => setDetail(res.data.result));
        };
        getDiaryDetail();
    }, []);

    useEffect(() => {
        if (detail !== undefined) {
            setWeather(detail.weather);
            setIsSelect(detail.albumPick);
        }
    }, [detail]);

    const handleCloseBtn = () => {
        props.setShowsDetail(false);
        if (detail?.albumPick !== isSelect) {
            alert("change");
        }
    };

    const handleDeleteBtn = async () => {
        await API.delete(`/pets/${props.petId}/diarys/${props.diaryId}`, {
            withCredentials: true,
        }).then((res) => alert("삭제"));
    };

    return (
        <ModalFrame
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="diary-detail col"
            background={props.color}
        >
            <div className="modal-header">
                <Icon
                    className="btn-close"
                    icon="ep:circle-close-filled"
                    onClick={handleCloseBtn}
                />
                <Icon
                    className="btn-delete"
                    icon="ant-design:delete-filled"
                    onClick={handleDeleteBtn}
                />
                {isSelect === 0 ? (
                    <Icon
                        className="btn-select"
                        icon="charm:heart"
                        onClick={() => setIsSelect(1)}
                    />
                ) : (
                    <Icon
                        className="btn-select"
                        icon="codicon:heart-filled"
                        color="firebrick"
                        onClick={() => setIsSelect(0)}
                    />
                )}
            </div>

            <div className="modal-main row">
                <div className="row_left_img">
                    <img src={detail?.photo} alt="다이어리 사진" width={300} />
                </div>
                <div className="row_right_text">
                    <p className="text-title">{detail?.title}</p>

                    <div className="div-date">
                        <p className="text-date">
                            {detail?.date.slice(0, 4)}년{" "}
                            {detail?.date.slice(5, 7)}월{" "}
                            {detail?.date.slice(8, 10)}일
                        </p>
                        <p className="text-weather">
                            오늘의 날씨 :{" "}
                            {weather === "sunny" && <>매우 맑음 </>}
                            {weather === "snow" && <>눈</>}
                            {weather === "rainy" && <>비</>}
                            {weather === "thunderbold" && <>천둥 번개</>}
                            {weather === "rainbow" && <>무지개</>}
                            {weather === "cloudy" && <>흐림</>}
                        </p>
                    </div>
                    <p className="text-content">{detail?.texts}</p>
                </div>
            </div>
        </ModalFrame>
    );
};

const ModalFrame = styled(motion.div)<{ background: string }>`
    background: ${(props) => props.background}80;
    border: 1px solid ${(props) => props.background}22;
    border-radius: 20px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
`;
