import { Dispatch, SetStateAction, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { PetInfo } from "views/PetInfo/models";
import "views/PetInfo/styles/contents.style.scss";

export const Content = (props: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
    breeds: Array<string>;
}) => {
    const [picture, setPicture] = useState("");
    const [petInfo, setPetInfo] = useState<PetInfo>({
        name: "",
        gender: "",
        year: "",
        month: "",
        date: "",
        breed: [],
    });

    return (
        <div className="content-container">
            <Routes>
                {props.step === 1 && (
                    <Route
                        path="registeration/step-1"
                        element={
                            <Step1
                                step={props.step}
                                setStep={props.setStep}
                                picture={picture}
                                setPicture={setPicture}
                                petInfo={petInfo}
                                setPetInfo={setPetInfo}
                            />
                        }
                    />
                )}
                {props.step === 2 && (
                    <Route
                        path="registeration/step-2"
                        element={
                            <Step2
                                breeds={props.breeds}
                                step={props.step}
                                setStep={props.setStep}
                                petInfo={petInfo}
                                setPetInfo={setPetInfo}
                            />
                        }
                    />
                )}
                {props.step === 3 && (
                    <Route
                        path="registeration/step-3"
                        element={<Step3 petInfo={petInfo} picture={picture} />}
                    />
                )}
            </Routes>
        </div>
    );
};
