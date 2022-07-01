import { useState } from "react";
import { Calender } from "../components/Schedule/Calender";
import { Management } from "../components/Schedule/Management";

export const Schedule = () => {
    const [isClicked, setIsClicked] = useState({});

    return (
        <div
            className="schedule-container"
            style={{ width: "100%", height: "100%" }}
        >
            <Calender isClicked={isClicked} setIsClicked={setIsClicked} />
            {/* schedule-calendar */}
            <Management isClicked={isClicked} setIsClicked={setIsClicked} />
            {/* schedule-management */}
        </div>
    );
};
