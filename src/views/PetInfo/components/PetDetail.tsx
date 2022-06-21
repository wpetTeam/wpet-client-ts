import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import uuid from "react-uuid";
import { Icon } from "@iconify/react";
import EMPTY_IMAGE from "assets/images/Character/common-character.png";
import { Pet } from "models";
import { removePicture, uploadPicture } from "utils";
import { DatePicker } from "./DatePicker";
import { Input } from "./Input";
import { updatePet, deletePet, getPet } from "../adapters";
import { BreedsModal, handleDeleteBreed } from "./BreedPicker";
import "../styles/components.style.scss";

export const PetDetail = (props: {
    petID: number;
    setShowsDetail: Dispatch<SetStateAction<boolean>>;
}) => {
    const [info, setInfo] = useState<Pet>();
    const [updateInfo, setUpdateInfo] = useState<any>([]);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isGenderUpdate, setIsGenderUpdate] = useState(false);
    const [month, setMonth] = useState<string>("");
    const [date, setDate] = useState<string>("");
    const [gender, setGender] = useState<string>();
    const [picture, setPicture] = useState<string>("");
    const [selectBreed, setSelectBreed] = useState<Array<string>>([]);
    const [showsBreeds, setShowsBreeds] = useState(false);
    var inputRef: any;

    useEffect(() => {
        getPet(props.petID, setInfo);
        setIsGenderUpdate(false);
    }, []);

    useEffect(() => {
        if (info !== undefined && info.birthDate !== undefined) {
            var birth = info.birthDate.split("-");
            setUpdateInfo({
                name: info.name,
                breeds: info.breeds,
                photo: info.photo,
                year: birth[0],
                month: birth[1],
                date: birth[2],
                gender: info.gender,
            });
            setMonth(birth[1]);
            setDate(birth[2]);
            setGender(info.gender);
            setSelectBreed(info.breeds);
            if (info.photo === null) setPicture(EMPTY_IMAGE);
            else setPicture(info.photo);
        }
    }, [info]);

    const handleUpdateInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdateInfo({
            ...updateInfo,
            [e.target.name]: e.target.value,
        });
    };
    const handleUpdateGender = () => {
        if (gender === "남") {
            setGender("여");
        } else {
            setGender("남");
        }
        setIsGenderUpdate(true);
    };
    useEffect(() => {
        setUpdateInfo({
            ...updateInfo,
            month: month,
            date: date,
            breeds: selectBreed,
            gender: gender,
        });
    }, [selectBreed, gender, month, date]);

    const handleUpdateBtn = async () => {
        const birthDate =
            updateInfo.year +
            "-" +
            ("00" + updateInfo.month).slice(-2) +
            "-" +
            ("00" + updateInfo.date).slice(-2);
        const updateData = {
            name: updateInfo.name,
            birthDate: birthDate,
            gender: updateInfo.gender,
            breeds: updateInfo.breeds,
            weight: 0,
            photo: picture,
        };
        updatePet(props.petID, updateData, setIsUpdate);
    };

    return (
        <div className="detail-container">
            <button
                className="detail-eclipse"
                onClick={() => props.setShowsDetail(false)}
            >
                <Icon icon="ep:close-bold" />
            </button>
            <div className="detail-frame row">
                <div className="row_div_01 info">
                    <div className="main__item name">
                        <label>반려견 이름</label>
                        <input
                            className={
                                isUpdate ? "input-name update" : "input-name"
                            }
                            name="name"
                            value={updateInfo?.name}
                            onChange={handleUpdateInfo}
                            disabled={isUpdate ? false : true}
                        />
                    </div>
                    <div className="main__item gender">
                        <label>반려견 성별</label>
                        <div className="gender-container">
                            <p
                                className={
                                    isUpdate
                                        ? isGenderUpdate
                                            ? "text-gender update"
                                            : "text-gender"
                                        : ""
                                }
                            >
                                {gender}
                            </p>
                            {isUpdate && (
                                <Icon
                                    className="icon-gender"
                                    icon="dashicons:update"
                                    onClick={handleUpdateGender}
                                />
                            )}
                        </div>
                    </div>
                    <div className="main__item date">
                        <label>반려견 출생일 / 만난 날</label>
                        <div className="date-container">
                            <Input
                                name="year"
                                value={updateInfo?.year}
                                onChange={handleUpdateInfo}
                                width="50px"
                                text="년"
                                disabled={isUpdate ? false : true}
                                maxLength={4}
                            />
                            <DatePicker
                                text="월"
                                type="month"
                                month={month}
                                setMonth={setMonth}
                                disabled={isUpdate ? false : true}
                            />
                            <DatePicker
                                text="일"
                                type="date"
                                month={month}
                                date={date}
                                setDate={setDate}
                                disabled={isUpdate ? false : true}
                            />
                        </div>
                    </div>
                    <div className="main__item breeds">
                        <label>견종</label>
                        <div className="breed-container">
                            <div className="breed-list">
                                {selectBreed.map((item, idx) => (
                                    <div
                                        key={uuid()}
                                        className={
                                            isUpdate
                                                ? "item__breed update"
                                                : "item__breed"
                                        }
                                    >
                                        {item}
                                        {isUpdate && (
                                            <button
                                                onClick={() =>
                                                    handleDeleteBreed(
                                                        item,
                                                        selectBreed,
                                                        setSelectBreed,
                                                    )
                                                }
                                            >
                                                <Icon icon="ep:close-bold" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                {isUpdate && (
                                    <button
                                        className="breed-btn"
                                        onClick={() => setShowsBreeds(true)}
                                    >
                                        추가
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    {isUpdate && (
                        <div className="delete-container">
                            <p onClick={() => deletePet(props.petID)}>
                                반려견 등록을 삭제하고 싶어요
                            </p>
                        </div>
                    )}
                </div>

                <div className="row_img_02">
                    {isUpdate ? (
                        <>
                            <img
                                className="img-picture"
                                src={picture}
                                alt="반려견 프로필"
                            />
                            <div className="btn-container">
                                <button
                                    className="btn_delete_01"
                                    onClick={(e) =>
                                        removePicture(e, setPicture)
                                    }
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
                                    onChange={(e) =>
                                        uploadPicture(e, setPicture)
                                    }
                                    ref={(refParam) => (inputRef = refParam)}
                                    hidden={true}
                                />
                            </div>
                        </>
                    ) : (
                        <img
                            src={picture === null ? EMPTY_IMAGE : picture}
                            alt="반려견 사진"
                            className="img-picture"
                        />
                    )}
                    <p>{info?.name}</p>
                    {isUpdate ? (
                        <button
                            className="btn-update"
                            onClick={handleUpdateBtn}
                        >
                            수정 완료
                        </button>
                    ) : (
                        <button
                            className="btn-update"
                            onClick={() => setIsUpdate(true)}
                        >
                            정보 수정
                        </button>
                    )}
                </div>
                <div className="row_div_03">그 외 정보</div>
            </div>
            {showsBreeds && (
                <BreedsModal
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
                    setShowsBreeds={setShowsBreeds}
                />
            )}
        </div>
    );
};
