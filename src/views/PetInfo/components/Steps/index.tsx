import { StepText } from './StepText';
import { StepBar } from './StepBar';
import 'views/PetInfo/styles/step.style.scss';

export const Step = (props: { step: number }) => {
    return (
        <>
            <div className="row_text_01 col">
                <StepText step={props.step} />
            </div>
            <div className="row_bar_02">
                <StepBar step={props.step} />
            </div>
        </>
    );
};
