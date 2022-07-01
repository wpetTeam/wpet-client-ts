import { useEffect, useRef } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { motion } from "framer-motion";
import { format, addMonths, startOfWeek, addDays } from "date-fns";
import { endOfWeek, isSameDay, isSameMonth } from "date-fns";
import { startOfMonth, endOfMonth } from "date-fns";
import { schedule_list } from "./schedule.const";
import "../../styles/components-schedule.style.scss";

const RenderHeader = ({ currentMonth }) => {
    return (
        <div className="header row">
            {currentMonth.toLocaleString("en-US", { month: "long" })}
        </div>
    );
};
const RenderDays = () => {
    const days: any[] = [];
    const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }
    return <div className="days row">{days}</div>;
};

const keyword_color = {
    Shower: "#00D2FC",
    Bath: "#00D2FC",
    Grooming: "#FF6F91",
    Pill: "#FFC75F",
    Hospital: "firebrick",
    Others: "#DCB0FF",
};

const isSchedule = (
    schedule: any[],
    day: Date,
    schedules: any[],
    setIsClicked,
) => {
    const date = format(day, "yyyy-MM-dd");

    for (let i = 0; i < schedule.length; i++) {
        let color = keyword_color[schedule[i].keyword];
        if (color === undefined) color = "#DCB0FF";

        if (
            schedule[i].startTime === schedule[i].endTime &&
            schedule[i].startTime === date
        ) {
            schedules.push(
                <Schedule
                    className="start-end"
                    color={color}
                    onClick={() => setIsClicked(schedule[i])}
                ></Schedule>,
            );
            continue;
        }
        if (schedule[i].startTime === date) {
            schedules.push(
                <Schedule
                    className="start"
                    color={color}
                    onClick={() => setIsClicked(schedule[i])}
                ></Schedule>,
            );
        } else if (schedule[i].endTime === date) {
            schedules.push(
                <Schedule
                    className="end"
                    color={color}
                    onClick={() => setIsClicked(schedule[i])}
                ></Schedule>,
            );
        } else if (date > schedule[i].startTime && date < schedule[i].endTime) {
            schedules.push(
                <Schedule
                    color={color}
                    onClick={() => setIsClicked(schedule[i])}
                ></Schedule>,
            );
        }
    }
};

const RenderCells = ({
    currentMonth,
    selectedDate,
    schedule,
    setIsClicked,
}) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: any[] = [];
    let days: any[] = [];
    let day = startDate;
    let formattedDate = "";
    let schedules: any[] = [];

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            formattedDate = format(day, "d");
            if (format(currentMonth, "M") === format(day, "M"))
                isSchedule(schedule, day, schedules, setIsClicked);
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? "disabled"
                            : isSameDay(day, selectedDate)
                            ? "selected"
                            : "not-valid"
                    }`}
                    key={uuid()}
                >
                    <span
                        className={
                            format(currentMonth, "M") !== format(day, "M")
                                ? "text not-valid"
                                : isSameMonth(day, monthStart) &&
                                  isSameDay(day, selectedDate)
                                ? "text today"
                                : ""
                        }
                    >
                        {formattedDate}
                    </span>
                    {schedules}
                </div>,
            );
            day = addDays(day, 1);
            schedules = [];
        }
        rows.push(
            <div className="row" key={uuid()}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};

export const Calender = ({ isClicked, setIsClicked }) => {
    const currentDate = new Date();
    const selectedDate = new Date();

    let currentMonth = new Date(format(currentDate, "yyyy"));
    let months: any[] = [];
    const monthRef = useRef<HTMLDivElement>(null);

    for (let i = 0; i < 12; i++) {
        const isCurrent =
            format(currentMonth, "MM") === format(selectedDate, "MM");

        months.push(
            <motion.div
                className={
                    isCurrent ? "calendar__item current" : "calendar__item"
                }
                key={uuid()}
                ref={isCurrent ? monthRef : null}
            >
                <RenderHeader currentMonth={currentMonth} />
                <RenderCells
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    schedule={schedule_list}
                    setIsClicked={setIsClicked}
                />
            </motion.div>,
        );
        currentMonth = addMonths(currentMonth, 1);
    }

    useEffect(() => {
        if (monthRef.current !== null) {
            monthRef.current.scrollIntoView({ behavior: "auto" });
        }
    }, []);

    function scrollCurrentMonth() {
        if (monthRef.current !== null) {
            monthRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="schedule-calendar">
            <div className="text-today">
                <p className="text-current" onClick={scrollCurrentMonth}>
                    {currentDate.toLocaleString("en-US", { month: "long" })}
                    {format(currentDate, " dd")}
                </p>
                <p className="text-year">{format(currentDate, "yyyy")}</p>
            </div>
            <RenderDays />
            <div className="calendar-list">{months}</div>
        </div>
    );
};

const Schedule = styled.div<{ color: string }>`
    width: 100%;
    height: 8.5%;
    background: ${(props) => props.color};
    margin-top: 2px;
    &.start {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
    }
    &.end {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
    }
    &.start-end {
        border-radius: 20px;
    }
    &:hover {
        cursor: pointer;
    }
`;
