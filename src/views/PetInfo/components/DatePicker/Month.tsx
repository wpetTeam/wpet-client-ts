import React, { Dispatch, SetStateAction, useEffect } from "react";
import uuid from "react-uuid";
import { SelectContainer } from "./Container";
import { MonthCalender } from "./const/date.const";

export const Month = (props: {
    month?: number;
    setMonth?: Dispatch<SetStateAction<number>>;
    showsMonth: boolean;
    setShowsMonth: Dispatch<SetStateAction<boolean>>;
    isOpen?: boolean;
    disabled?: boolean;
    currentMonth?: number | null;
}) => {
    const handleButton = () => {
        props.setShowsMonth(!props.showsMonth);
    };
    const handlePicker = (item: number) => {
        props.setShowsMonth(false);
        if (props.setMonth !== undefined) props.setMonth(item);
    };

    useEffect(() => {
        if (props.currentMonth !== undefined && props.currentMonth !== null) {
            if (props.setMonth !== undefined)
                props.setMonth(props.currentMonth);
        }
    }, []);

    //useEffect(() => {}, [props.isOpen]);

    return (
        <React.Fragment>
            <SelectContainer disabled={props.disabled} onClick={handleButton}>
                {props.month}
            </SelectContainer>
            {props.showsMonth && (
                <div className="div-select month">
                    {MonthCalender.map((item: number, idx) => (
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
