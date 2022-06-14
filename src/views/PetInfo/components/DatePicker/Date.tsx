import React from 'react';
import { SelectContainer } from './Container';
import { DateCalender } from './const/date.const';

export const Date = (props) => {
    const handleButton = () => {
        props.setShowDate(!props.showDate);
    };

    const handlePicker = (item) => {
        props.setShowDate(false);
        props.setDate(item);
    };
    const dateCalender = DateCalender(props.month);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.date}
            </SelectContainer>
            {props.showDate && (
                <div className="div-select date">
                    {dateCalender.map((item, idx) => (
                        <button
                            className="btn__item"
                            key={(idx % 31) + 22314}
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
