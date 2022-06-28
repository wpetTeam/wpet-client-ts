import React, { Dispatch, SetStateAction, useEffect } from "react";
import uuid from "react-uuid";
import { SelectContainer } from "./Container";
import { DateCalender } from "./const/date.const";

export const Date = (props: {
    month?: number;
    date?: number;
    setDate?: Dispatch<SetStateAction<number>>;
    showsDate: boolean;
    setShowsDate: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    disabled?: boolean;
    currentDate?: number | null;
}) => {
    useEffect(() => {
        if (props.currentDate !== undefined && props.currentDate !== null) {
            if (props.setDate !== undefined) props.setDate(props.currentDate);
        }
    }, []);

    const handleButton = () => {
        props.setShowsDate(!props.showsDate);
    };
    const handlePicker = (item: number) => {
        props.setShowsDate(false);
        if (props.setDate !== undefined) props.setDate(item);
    };
    const dateCalender = DateCalender(props.month);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.date}
            </SelectContainer>
            {props.showsDate && (
                <div className="div-select date">
                    {dateCalender.map((item: number) => (
                        <button
                            className="btn__item"
                            key={uuid()}
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
