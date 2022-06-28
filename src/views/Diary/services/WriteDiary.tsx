import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { Icon } from "@iconify/react";
import { Weather, Today, Content, Picture, CustomNav } from "../components";
import { newDiary, petID } from "models";
import { createDiary, getWritablePets } from "../adapters";
import "../styles/services.style.scss";
import "../styles/write.style.scss";

export const WriteDiary = () => {
    let navigate = useNavigate();
    const [selectColor, setSelectColor] = useState(false);
    const [userPets, setUserPets] = useState<Array<petID>>([]);

    useEffect(() => {
        getWritablePets(setUserPets);
    }, []);

    const [weather, setWeather] = useState("");
    const [title, setTitle] = useState("");
    const [picture, setPicture] = useState("");
    const [content, setContent] = useState("");
    const [color, setColor] = useState("#ebcfc6");
    const [petIDs, setPetIDs] = useState<Array<number>>([]);

    const handlePostBtn = async () => {
        const diaryData: newDiary = {
            petIDs: userPets.length === 1 ? [userPets[0].petID] : petIDs,
            title: title,
            photo: picture,
            texts: content,
            isShare: 0,
            petState: "happy",
            weather: weather,
            color: color,
            font: "Pretendard",
            hashTags: ["pet"],
        };
        console.log(diaryData);
        createDiary(diaryData, navigate);
    };

    return (
        <React.Fragment>
            <div className="write-container">
                <div className="write-main row">
                    <div className="row_picture_01">
                        <Picture
                            picture={picture}
                            setPicture={setPicture}
                            color={color}
                        />
                    </div>
                    <div className="row_nav_02">
                        <CustomNav
                            color={color}
                            setColor={setColor}
                            selectColor={selectColor}
                            setSelectColor={setSelectColor}
                        />
                    </div>
                    <div className="row_journal_03 col">
                        <div className="col_dateweather_01">
                            <Today />
                            <Weather
                                weather={weather}
                                setWeather={setWeather}
                            />
                        </div>
                        <div className="col_title_02">
                            <Title
                                title={title}
                                setTitle={setTitle}
                                color={color}
                            />
                        </div>
                        <div className="col_content_03">
                            <Content
                                content={content}
                                setContent={setContent}
                            />
                        </div>
                    </div>
                </div>
                <Footer
                    userPets={userPets}
                    handlePostBtn={handlePostBtn}
                    petIDs={petIDs}
                    setPetIDs={setPetIDs}
                />
            </div>
        </React.Fragment>
    );
};

function Title({ title, setTitle, color }) {
    return (
        <>
            <div className="text-title">제목 {"  "}: </div>
            <input
                className="input-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="30자 이내로 작성해주세요"
                maxLength={30}
                color={color}
            />
        </>
    );
}

function Footer({ userPets, handlePostBtn, petIDs, setPetIDs }) {
    const handlePetIDs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedId = parseInt(e.target.value);
        if (petIDs.includes(selectedId)) {
            const newIds = petIDs.filter((id: Number) => id !== selectedId);
            setPetIDs(newIds);
        } else {
            const newIds = [...petIDs];
            newIds.push(selectedId);
            setPetIDs(newIds);
        }
    };

    return (
        <div className="write-footer row">
            {userPets.length > 1 && (
                <div className="row_pets_01">
                    <label className="label-title">누구의 일기인가요?</label>
                    <div className="pet-list">
                        {userPets.map((item: petID) => (
                            <label key={uuid()}>
                                <input
                                    className="input-checkbox"
                                    value={item.petID}
                                    id="input"
                                    type="checkbox"
                                    onChange={handlePetIDs}
                                    checked={
                                        petIDs.includes(item.petID)
                                            ? true
                                            : false
                                    }
                                />
                                <Icon
                                    className="custom-checkbox"
                                    icon="ph:paw-print-fill"
                                />
                                <span className="custom-label">
                                    {item.name}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
            <div>
                <button className="row_btn_02" onClick={handlePostBtn}>
                    작성 완료
                </button>
            </div>
        </div>
    );
}
