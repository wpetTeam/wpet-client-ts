import {
    addDays,
    addMonths,
    startOfMonth,
    startOfWeek,
    subMonths,
} from "date-fns";
import { endOfMonth, format, endOfWeek, isSameMonth } from "date-fns";
import { useEffect, useState } from "react";
import uuid from "react-uuid";

const RenderCalendar = ({
    currentMonth,
    nextMonth,
    prevMonth,
    setSelectedDate,
    setIsOpen,
}) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: any[] = [];
    let days: any[] = [];
    let day = startDate;

    const handlePickDate = (isValid: boolean, formattedDate: string) => {
        if (isValid) {
            setSelectedDate(formattedDate);
            setIsOpen(false);
        }
    };

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const formattedDay = format(day, "d");
            const formattedDate = format(day, "yyyy-MM-dd");
            const isValid = isSameMonth(day, monthStart);

            days.push(
                <div
                    className={`col cell ${isValid ? "active" : "disabled"}`}
                    key={uuid()}
                    onClick={() => {
                        handlePickDate(isValid, formattedDate);
                    }}
                >
                    {formattedDay}
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={uuid()}>
                {days}
            </div>,
        );
        days = [];
    }

    return (
        <div className="datepicker-calendar">
            <header className="header-datepicker-calendar">
                <button onClick={prevMonth}> prev </button>
                {currentMonth.toLocaleString("en-US", { month: "long" })}
                <button onClick={nextMonth}> next </button>
            </header>
            <main className="main-datepicker-calendar">{rows}</main>
        </div>
    );
};

export const DatePicker = ({ setDate }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState("");

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    useEffect(() => {
        setDate(selectedDate);
    }, [selectedDate]);

    return (
        <div className="account-datepicker">
            <button className="btn-open" onClick={() => setIsOpen(!isOpen)}>
                {selectedDate}
            </button>
            {isOpen && (
                <RenderCalendar
                    currentMonth={currentMonth}
                    nextMonth={nextMonth}
                    prevMonth={prevMonth}
                    setSelectedDate={setSelectedDate}
                    setIsOpen={setIsOpen}
                />
            )}
        </div>
    );
};
