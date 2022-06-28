import { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { Month, Date } from "../DatePicker";
import "views/PetInfo/styles/date_picker.style.scss";
import { PetInfo } from "views/PetInfo/models";

export const DatePicker = (props: {
    type: string;
    text: string;
    disabled?: boolean;
    month?: number;
    setMonth?: Dispatch<SetStateAction<number>>;
    date?: number;
    setDate?: Dispatch<SetStateAction<number>>;
    petInfo?: PetInfo;
}) => {
    const [showsMonth, setShowsMonth] = useState(false);
    const [showsDate, setShowsDate] = useState(false);

    return (
        <div className="date-picker-container row">
            {props.type === "month" && (
                <Month
                    month={props.month}
                    setMonth={props.setMonth}
                    showsMonth={showsMonth}
                    setShowsMonth={setShowsMonth}
                    disabled={props.disabled}
                    currentMonth={props.petInfo?.month}
                />
            )}
            {props.type === "date" && (
                <Date
                    month={props.month}
                    date={props.date}
                    setDate={props.setDate}
                    showsDate={showsDate}
                    setShowsDate={setShowsDate}
                    disabled={props.disabled}
                    currentDate={props.petInfo?.date}
                />
            )}
            <p className="row_text_02">{props.text}</p>
        </div>
    );
};

export const SelectContainer = styled.button.attrs((props) => ({
    border: props.disabled ? "transparent" : "1px solid #bdbdbd",
    fontSize: props.disabled ? "1em" : "0.8em",
    fontWeight: props.disabled ? "500" : "700",
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
