import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { getPets } from "views/MyAccount/adapters";
import { NewSchedule } from "./AddSchedule";

const RenderKeyword = ({ keyword, color }) => {
    return (
        <div className="desc__item">
            <Schedule color={color} />
            {keyword}
        </div>
    );
};

const RenderDetails = ({ isClicked }) => {
    // 선택된 날짜 또는 선택된 스케쥴
    return (
        <section className="grid col clicked-schedule">
            <header>
                <Icon icon="fluent:calendar-chat-20-regular" /> Click & Check
                details
            </header>
            {isClicked.length !== undefined && (
                <main>
                    Pet 이름 /{isClicked.startTime}/{isClicked.keyword}/
                    {isClicked.description}
                </main>
            )}
        </section>
    );
};

const NotFinishedSchedule = ({ pets }) => {
    return (
        <section className="grid row not-finish-schedule">
            <header>
                <Icon icon="fluent:calendar-cancel-24-filled" /> Finish this
                first ! {/* 남은게 있는 펫만 보여주기 */}
                <div className="tab-pets">
                    {/* {pets !== undefined &&
                        pets.map((item) => <button>{item.name}</button>)} */}
                </div>
            </header>
            <main>
                <div className="missed__item">
                    <input type="checkbox" />
                    <p>
                        2022-06-12
                        <br />
                        <span>D+2</span>
                        <br />
                        Grooming
                        <br />
                        First Dog
                    </p>
                </div>
            </main>
        </section>
    );
};

const AddSchedule = ({ setAddsNew }) => {
    return (
        <section
            className="grid col new-schedule"
            onClick={() => setAddsNew(true)}
        >
            <header>
                <Icon icon="carbon:calendar-add-alt" />
                Add new Schedule
            </header>
        </section>
    );
};

const UpcomingSchedule = () => {
    return (
        <section className="grid row upcoming-schedule">
            <header>
                <Icon icon="fluent:calendar-arrow-right-20-filled" />
                Upcoming
            </header>
            <main>Pet 이름 /D-4/Hospital/ Bc of his legs</main>
        </section>
    );
};

const EmptyDateSchedule = () => {
    return (
        // 만약 입력이 안된 항목이 있을 경우만 보여주기
        <section className="grid col empty-date-schedule">
            <header>
                <Icon icon="fluent:calendar-error-20-filled" />
                Enter schedule date
            </header>
        </section>
    );
};

export const Management = ({ isClicked, setIsClicked }) => {
    const [pets, setPets] = useState({});
    const [addsNew, setAddsNew] = useState(false);

    useEffect(() => {
        getPets(setPets);
    }, []);

    return (
        <div className="schedule-management">
            <section className="desc-schedule">
                <RenderKeyword keyword="Shower/Bath" color="#00D2FC" />
                <RenderKeyword keyword="Grooming" color="#FF6F91" />
                <RenderKeyword keyword="Pill" color="#FFC75F" />
                <RenderKeyword keyword="Hospital" color="firebrick" />
                <RenderKeyword keyword="Others" color="#DCB0FF" />
            </section>
            <RenderDetails isClicked={isClicked} />
            <EmptyDateSchedule />
            <AddSchedule setAddsNew={setAddsNew} />
            <NotFinishedSchedule pets={pets} />
            <UpcomingSchedule />
            {addsNew && (
                <NewSchedule
                    addsNew={addsNew}
                    setAddsNew={setAddsNew}
                    pets={pets}
                />
            )}
        </div>
    );
};

const Schedule = styled.div<{ color: string }>`
    width: 34%;
    height: 17%;
    margin-right: 5%;
    background: ${(props) => props.color};
    border-radius: 20px;
`;
