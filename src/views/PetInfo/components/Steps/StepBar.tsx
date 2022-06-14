import React from 'react';
import { Icon } from '@iconify/react';
import uuid from 'react-uuid';
import 'views/PetInfo/styles/step.style.scss';

export const StepBar = (props: { step: number }) => {
    return (
        <div className="bar-container">
            {Array.from({ length: 5 }).map((item, idx) => (
                <React.Fragment key={uuid()}>
                    {(idx + 1) % 2 === 0 && (
                        <div
                            className={
                                props.step * 2 > idx + 1
                                    ? 'step-bar checked'
                                    : 'step-bar'
                            }
                        />
                    )}
                    {(idx + 1) % 2 === 1 && (
                        <Icon
                            icon="bi:check-circle-fill"
                            className={
                                props.step * 2 - 1 === idx + 1
                                    ? 'step-icon pre-checked'
                                    : props.step * 2 - 1 > idx + 1
                                    ? 'step-icon checked'
                                    : 'step-icon'
                            }
                        />
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};
