import React, { useEffect, useState } from "react";
import { getBreeds } from "../adapters";
import { Content } from "../components/Contents";
import { Step } from "../components/Steps";
import "../styles/layouts.style.scss";
import "../styles/services.style.scss";

export const Registeration = () => {
    const [step, setStep] = useState(1);
    const [breeds, setBreeds] = useState<Array<string>>([]);

    useEffect(() => {
        getBreeds(setBreeds);
    }, []);

    return (
        <div className="register-container">
            <p className="register-header">
                아래의 절차를 따라 반려견을 등록해주세요.
            </p>
            <div className="register-main row">
                <div className="step-container">
                    <Step step={step} setStep={setStep} />
                </div>
                <div className="content-container">
                    <Content step={step} setStep={setStep} breeds={breeds} />
                </div>
            </div>
        </div>
    );
};
