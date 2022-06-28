import { useEffect, useRef } from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { format, addMonths, startOfWeek, addDays } from "date-fns";
import { endOfWeek, isSameDay, isSameMonth } from "date-fns";
import { startOfMonth, endOfMonth } from "date-fns";
import "../../styles/components-schedule.style.scss";

const RenderHeader = ({ currentMonth }) => {
    return (
        <div className="header row">
            {/* {format(currentMonth, "M")}월*/}

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

const isSchedule = (schedule, day, schedules) => {
    const date = format(day, "yyyy-MM-dd");
    for (let i = 0; i < schedule.length; i++) {
        if (
            schedule[i].startTime === schedule[i].endTime &&
            schedule[i].startTime === date
        ) {
            schedules.push(
                <Schedule
                    className="start-end"
                    color={schedule[i].color}
                    onClick={() => alert(schedule[i].todo)}
                ></Schedule>,
            );
            continue;
        }
        if (schedule[i].startTime === date) {
            schedules.push(
                <Schedule
                    className="start"
                    color={schedule[i].color}
                ></Schedule>,
            );
        } else if (schedule[i].endTime === date) {
            schedules.push(
                <Schedule className="end" color={schedule[i].color}></Schedule>,
            );
        } else if (date > schedule[i].startTime && date < schedule[i].endTime) {
            schedules.push(<Schedule color={schedule[i].color}></Schedule>);
        }
    }
};
const RenderCells = ({ currentMonth, selectedDate, schedule }) => {
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
                isSchedule(schedule, day, schedules);
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

const squareVariants = {
    visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 },
};

export const Calender = () => {
    const currentDate = new Date();
    const selectedDate = new Date();

    let currentMonth = new Date(format(currentDate, "yyyy"));
    let months: any[] = [];
    const monthRef = useRef<HTMLDivElement>(null);

    let schedule_list = [
        {
            startTime: "2022-06-03",
            endTime: "2022-06-03",
            color: "orange",
            todo: "wash",
        },
        {
            startTime: "2022-07-07",
            endTime: "2022-07-09",
            color: "lightblue",
            todo: "wash",
        },
        {
            startTime: "2022-06-10",
            endTime: "2022-06-12",
            color: "green",
            todo: "wash",
        },
        {
            startTime: "2022-06-17",
            endTime: "2022-06-24",
            color: "lightcoral",
            todo: "wash",
        },
        {
            startTime: "2022-06-20",
            endTime: "2022-06-24",
            color: "lavender",
            todo: "wash",
        },
    ];

    for (let i = 0; i < 12; i++) {
        months.push(
            <motion.div
                className="calendar__item"
                key={uuid()}
                ref={
                    format(currentMonth, "MM") === format(selectedDate, "MM")
                        ? monthRef
                        : null
                }
            >
                <RenderHeader currentMonth={currentMonth} />
                <RenderCells
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    schedule={schedule_list}
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
                <p className="text-year">{format(currentDate, " yyyy")}</p>
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
