import styled from "styled-components";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import { getPets } from "views/MyAccount/adapters";
import { NewSchedule } from "./AddSchedule";
import { getUpcomingTodo } from "../adapters/getUpcomingTodo";
import {
    selecteUpcomingTodo,
    todoDetail,
    upcomingTodo,
} from "../models/Todo.type";

const RenderKeyword = ({ keyword, color }) => {
    return (
        <div className="desc__item">
            <Schedule color={color} />
            {keyword}
        </div>
    );
};

const RenderDetails = ({ selectedDate, selectedSchedule }) => {
    // 선택된 날짜 또는 선택된 스케쥴
    return (
        <section className="grid col clicked-schedule">
            <header>
                <Icon icon="fluent:calendar-chat-20-regular" /> Click & Check
                details
            </header>
            {/* {isClicked.length !== undefined && (
                <main>
                    Pet 이름 /{isClicked.startTime}/{isClicked.keyword}/
                    {isClicked.description}
                </main>
            )} */}
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
    const [allUpcomingTodo, setAllUpcomingTodo] = useState<upcomingTodo[]>([]);
    const upcomingTodos: selecteUpcomingTodo[] = [];

    useEffect(() => {
        getUpcomingTodo(setAllUpcomingTodo);
    }, []);

    useEffect(() => {
        // 정렬 진행 - todays 중 더 빠른 날
        // todays, tomorrow 에 없는 정보는 제거
        for (let index = 0; index < allUpcomingTodo.length; index++) {
            const element = allUpcomingTodo[index];
            console.log(element);

            const todayTodo: todoDetail[] = element.todays;
            const tomorrowTodo: todoDetail[] = element.tomorrows;

            if (element.todays.length !== 0) {
                // const todo: selecteUpcomingTodo = {
                //     todoListID: todayTodo.todoListID;
                //     petID: number;
                //     name: string;
                //     date: string;
                //     content: string;
                //     time: number;
                //     isCheck: number;
                //     keyword: string;
                //   };
                // upcomingTodos.push(todo);
            }
        }
    }, [allUpcomingTodo]);

    console.log(allUpcomingTodo);

    return (
        <section className="grid row upcoming-schedule">
            <header>
                <Icon icon="fluent:calendar-arrow-right-20-filled" />
                Upcoming
            </header>
            <main>
                {/* 가장 빠른 날짜 순으로 정렬
                {upcomingTodo.map((item) => (
                    <p>{item.name}</p>
                ))} */}
            </main>
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

export const Management = ({ selectedDate, selectedSchedule }) => {
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
            <RenderDetails
                selectedDate={selectedDate}
                selectedSchedule={selectedSchedule}
            />
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
