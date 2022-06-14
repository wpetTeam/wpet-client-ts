import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Month, Date } from '../DatePicker';
import 'views/PetInfo/styles/date_picker.style.scss';

export const DatePicker = (props: {
    type: string;
    text: string;
    disabled?: boolean;
    month?: string;
    date?: string;
    setMonth?: Dispatch<SetStateAction<string>>;
    setDate?: Dispatch<SetStateAction<string>>;
}) => {
    const [showMonth, setShowMonth] = useState(false);
    const [showDate, setShowDate] = useState(false);

    useEffect(() => {}, [props.month, props.date]);

    return (
        <div className="date-picker-container row">
            {props.type === 'month' && (
                <Month
                    month={props.month}
                    setMonth={props.setMonth}
                    showMonth={showMonth}
                    setShowMonth={setShowMonth}
                    disabled={props.disabled}
                />
            )}
            {props.type === 'date' && (
                <Date
                    month={props.month}
                    date={props.date}
                    setDate={props.setDate}
                    showDate={showDate}
                    setShowDate={setShowDate}
                    disabled={props.disabled}
                />
            )}
            <p className="row_text_02">{props.text}</p>
        </div>
    );
};

export const SelectContainer = styled.button.attrs((props) => ({
    border: props.disabled ? 'transparent' : '1px solid #bdbdbd',
    fontSize: props.disabled ? '1em' : '0.8em',
    fontWeight: props.disabled ? '500' : '700',
}))`
    width: 33px;
    height: 33px;

    margin-right: 2px;

    color: black;
    text-align: center;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};

    background: transparent;
    border: ${(props) => props.border};
    border-radius: 4px;

    &:focus {
        cursor: pointer;
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
    }
`;
