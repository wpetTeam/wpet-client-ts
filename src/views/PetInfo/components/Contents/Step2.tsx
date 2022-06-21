import { useState, useEffect, Dispatch, SetStateAction } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoPawSharp, IoCloseSharp } from "react-icons/io5";
import { Button } from "../Button";
import { PetInfo } from "views/PetInfo/models";
import { BreedsModal, handleDeleteBreed, BreedPicker } from "../BreedPicker";
import "views/PetInfo/styles/components.style.scss";

export const Step2 = (props: {
    step: number;
    breeds: Array<string>;
    petInfo: PetInfo;
    setStep: Dispatch<SetStateAction<number>>;
    setPetInfo: Dispatch<SetStateAction<PetInfo>>;
}) => {
    const [breeds, setBreeds] = useState<Array<string>>([]);
    const [selectBreed, setSelectBreed] = useState<Array<string>>([]);
    const [showsBreeds, setShowsBreeds] = useState(false);

    useEffect(() => {
        setBreeds(props.breeds);
    }, []);

    const handleButton = () => {
        props.setPetInfo({
            ...props.petInfo,
            breed: selectBreed,
        });
        if (selectBreed.length >= 1) props.setStep(props.step + 1);
        else alert("1개 이상 선택하세요");
    };

    return (
        <div className="step2-container">
            <div className="step2-header row">
                <p className="row_text_01">
                    반려견 종을 선택해주세요. 최대 3개까지 선택 가능합니다.
                </p>
                <div
                    className="row_btn_02"
                    onClick={() => setShowsBreeds(true)}
                >
                    <ModalBtn showsModal={showsBreeds} />
                </div>
            </div>
            <div className="step2-main row">
                <BreedPicker
                    breeds={breeds}
                    selectBreed={selectBreed}
                    setSelectBreed={setSelectBreed}
                />
            </div>
            <div className="step2-footer row">
                <div className="row_check-breeds_01 row">
                    <SelectBreedList
                        handleDeleteBreed={handleDeleteBreed}
                        selectBreed={selectBreed}
                        setSelectBreed={setSelectBreed}
                    />
                </div>
                {selectBreed.length >= 1 && (
                    <Link to="/pet-info/registeration/step-3">
                        <Button text="다음 단계" onClick={handleButton} />
                    </Link>
                )}
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

function ModalBtn({ showsModal }) {
    return (
        <>
            <button className={showsModal ? "btn-modal open" : "btn-modal"}>
                찾는 반려견 종이 없어요!
            </button>
            <IoPawSharp
                size={15}
                className={showsModal ? "icon-modal open" : "icon-modal"}
            />
        </>
    );
}

function SelectBreedList({ handleDeleteBreed, selectBreed, setSelectBreed }) {
    return (
        <>
            {selectBreed.map((item) => (
                <SelectItem key={uuid()}>
                    {item}
                    <IoCloseSharp
                        className="icon-delete"
                        size={16}
                        onClick={() =>
                            handleDeleteBreed(item, selectBreed, setSelectBreed)
                        }
                    />
                </SelectItem>
            ))}
        </>
    );
}

export const SelectItem = styled.div`
    display:flex;
    flex-direction: row;
    
    width: fit-content:
    height: fit-content;

    padding: 1.5%;
    margin-right: 1.5%;
    margin-bottom: 1%;

    align-items: center;
    justify-content: space-between;

    background: #f3c5b680;
    border-radius: 4px;

    font-size: 0.8em;
    font-weight: 600;
`;
