import { Dispatch, SetStateAction } from "react";
import "views/PetInfo/styles/step.style.scss";

export const StepText = (props: {
    step: number;
    setStep: Dispatch<SetStateAction<number>>;
}) => {
    const StepText = [
        { id: 1, step: "step 1", description: "반려견 기본 정보" },
        { id: 2, step: "step 2", description: "반려견 종 선택" },
        { id: 3, step: "step 3", description: "완료" },
    ];
    const moveBackStep = (idx: number) => {
        console.log("current : ", props.step, "click : ", StepText[idx]["id"]);
        if (props.step >= StepText[idx].id) {
            props.setStep(StepText[idx].id);
        }
    };
    return (
        <>
            {StepText.map((item, idx: number) => (
                <div
                    className="text-container"
                    key={StepText[idx]["id"]}
                    style={{ border: "1px solid lightblue" }}
                    onClick={() => moveBackStep(idx)}
                >
                    <p
                        className={
                            props.step >= StepText[idx]["id"]
                                ? "text-step finish"
                                : "text-step"
                        }
                    >
                        {StepText[idx]["step"]}
                    </p>
                    <p
                        className={
                            props.step >= StepText[idx]["id"]
                                ? "text-title finish"
                                : "text-title"
                        }
                    >
                        {StepText[idx]["description"]}
                    </p>
                </div>
            ))}
        </>
    );
};
