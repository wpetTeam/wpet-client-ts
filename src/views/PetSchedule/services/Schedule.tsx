import { useState } from "react";
import { Calender } from "../components/Calender";
import { Management } from "../components/Management";

export const Schedule = () => {
    const [selectedDate, setSelectedDate] = useState({});
    const [selectedSchedule, setSelectedSchedule] = useState({});

    return (
        <div
            className="schedule-container"
            style={{ width: "100%", height: "100%" }}
        >
            <Calender
                setSelectedDate={setSelectedDate}
                setSelectedSchedule={setSelectedSchedule}
            />
            {/* schedule-calendar */}
            <Management
                selectedDate={selectedDate}
                selectedSchedule={selectedSchedule}
            />
            {/* schedule-management */}
        </div>
    );
};
