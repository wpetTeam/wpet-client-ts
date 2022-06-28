import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { PetInfo } from "views/PetInfo/models";
import { ProfilePicture } from "views/Signup/components/inputs/profilePicture";
import { Button, Input } from "views/PetInfo/components";
import { DatePicker } from "../DatePicker";

export const Step1 = (props: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    picture: string;
    setPicture: Dispatch<SetStateAction<string>>;
    petInfo: PetInfo;
    setPetInfo: Dispatch<SetStateAction<PetInfo>>;
}) => {
    const [month, setMonth] = useState(null);
    const [date, setDate] = useState(null);
    const [gender, setGender] = useState<string>("");

    useEffect(() => {
        if (props.petInfo.gender !== "") setGender(props.petInfo.gender);
    }, []);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        props.setPetInfo({
            ...props.petInfo,
            [e.target.name]: e.target.value,
        });
    }

    const HandleButton = () => {
        props.setStep(props.step + 1);
        props.setPetInfo({
            ...props.petInfo,
            month: month,
            date: date,
            gender: gender,
        });
    };

    return (
        <div className="step1-container">
            <p className="step1-header">
                아래의 항목을 입력해주세요
                <span>(*는 필수사항입니다)</span>
            </p>
            <div className="step1-main row">
                <div className="row_picture_01">
                    <PictureComponent
                        picture={props.picture}
                        setPicture={props.setPicture}
                    />
                </div>
                <div className="row_input-container_02 col">
                    <PetName
                        petInfo={props.petInfo}
                        handleChange={handleChange}
                    />
                    <PetBirth
                        petInfo={props.petInfo}
                        handleChange={handleChange}
                        month={month}
                        setMonth={setMonth}
                        date={date}
                        setDate={setDate}
                    />
                    <PetGender gender={gender} setGender={setGender} />
                </div>
            </div>
            <div className="step1-footer row">
                <div></div>
                {props.petInfo.name !== "" &&
                    month !== "" &&
                    date !== "" &&
                    props.petInfo.year !== "" &&
                    gender !== "" && (
                        <Button text="다음 단계" onClick={HandleButton} />
                    )}
            </div>
        </div>
    );
};

function PictureComponent({ setPicture, picture }) {
    return (
        <>
            <p className="text-picture">
                반려견 프로필 사진
                <br />
                <span>사진은 1X1 사이즈만 업로드 가능합니다.</span>
            </p>
            <div className="input-picture">
                <ProfilePicture
                    type="pet-pic"
                    setProfile={setPicture}
                    profile={picture}
                />
            </div>
        </>
    );
}

function PetName({ petInfo, handleChange }) {
    return (
        <>
            <label className="label">반려견 이름(*)</label>
            <Input
                name="name"
                value={petInfo.name}
                onChange={handleChange}
                width="230px"
            />
        </>
    );
}

function PetBirth({ handleChange, month, setMonth, date, setDate, petInfo }) {
    return (
        <React.Fragment>
            <label className="label">반려견 출생년월 또는 만난 날(*) </label>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Input
                    name="year"
                    value={petInfo.year}
                    onChange={handleChange}
                    width="80px"
                    text="년"
                    maxLength={4}
                />
                <DatePicker
                    text="월"
                    type="month"
                    month={month}
                    setMonth={setMonth}
                    petInfo={petInfo}
                />
                <DatePicker
                    text="일"
                    type="date"
                    month={month}
                    date={date}
                    setDate={setDate}
                    petInfo={petInfo}
                />
            </div>
        </React.Fragment>
    );
}

function PetGender({ gender, setGender }) {
    return (
        <React.Fragment>
            <label className="label">반려견 성별(*)</label>
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <button
                    className={
                        gender === "남" ? "btn-gender select" : "btn-gender"
                    }
                    onClick={() => setGender("남")}
                >
                    남
                </button>
                <button
                    className={
                        gender === "여" ? "btn-gender select" : "btn-gender"
                    }
                    onClick={() => setGender("여")}
                >
                    여
                </button>
            </div>
        </React.Fragment>
    );
}
