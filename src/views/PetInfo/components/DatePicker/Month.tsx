import React, { useEffect } from 'react';
import { SelectContainer } from './Container';
import { MonthCalender } from './const/date.const';

export const Month = (props) => {
    const handleButton = () => {
        props.setShowMonth(!props.showMonth);
    };

    const handlePicker = (item) => {
        props.setShowMonth(false);
        props.setMonth(item);
    };

    useEffect(() => {}, [props.isOpen]);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.month}
            </SelectContainer>
            {props.showMonth && (
                <div className="div-select month">
                    {MonthCalender.map((item, idx) => (
                        <button
                            className="btn__item"
                            key={(idx % 30) + 29098}
                            onClick={() => handlePicker(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};
