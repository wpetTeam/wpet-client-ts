import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import React, { useEffect, useState } from "react";
import { DatePicker } from "./DatePicker";
import { getKeywords } from "../adapters/getKeywords";
import { createTodo } from "../adapters/createTodo";

export const NewSchedule = ({ addsNew, setAddsNew, pets }) => {
    const [petId, setPetId] = useState<number>();
    const [description, setDescription] = useState("");
    const [time, setTime] = useState<String>("");
    const [date, setDate] = useState("");
    const [keyword, setKeyword] = useState("");
    const [keywords, setKeywords] = useState([]);

    useEffect(() => {
        getKeywords(setKeywords);
    }, []);

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        if (e.target.value !== undefined) {
            setTime(e.target.value);
        }
    };

    const handleCreateBtn = () => {
        let isCreate = false;
        if (petId === undefined) alert("일정을 추가할 반려견을 선택해주세요.");
        else if (date.trim().length === 0) alert("일정 날짜를 선택해주세요.");
        else if (description.trim().length === 0) alert("일정을 작성해주세요.");
        else if (keyword.trim().length === 0) alert("키워드를 선택해주세요.");
        else {
            createTodo(petId, date, Number(time), description, keyword);
            isCreate = true;
        }

        if (isCreate) {
            alert("일정 등록이 완료되었습니다.");
        } else {
            alert("일정 등록에 실패하였습니다.");
        }

        setAddsNew(false);
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            className="modal-new-schedule"
        >
            <header className="header-new-schedule">
                <p>새로운 일정 추가하기</p>
                <Icon
                    icon="ep:circle-close-filled"
                    onClick={() => setAddsNew(false)}
                />
            </header>
            <main className="main-new-schdule">
                <div className="div-new-pet">
                    {pets.map((item: any) => (
                        <button
                            onClick={() => setPetId(item.petID)}
                            className={
                                petId === item.petID
                                    ? "pet__item selected"
                                    : "pet__item"
                            }
                        >
                            {item.name}
                        </button>
                    ))}
                </div>
                <div className="div-new-date">
                    <Icon icon="ant-design:calendar-filled" />
                    <DatePicker setDate={setDate} />
                    <select onChange={handleTimeChange}>
                        {Array.from({ length: 24 }).map((item, idx) =>
                            idx === 0 ? (
                                <option value={idx}>시간</option>
                            ) : (
                                <option value={idx}>{idx}시</option>
                            ),
                        )}
                    </select>
                </div>
                <div className="div-new-desc">
                    <Icon icon="clarity:note-edit-solid" />
                    <input
                        className="input-desc"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="무슨 일정인가요?"
                    />
                </div>
                <div className="div-new-tag">
                    {keywords.map((item) => (
                        <button
                            onClick={() => setKeyword(item)}
                            className={
                                keyword === item
                                    ? "tags__item selected"
                                    : "tags__item"
                            }
                        >
                            {item}
                        </button>
                    ))}
                </div>
                <button className="btn-new-schedule" onClick={handleCreateBtn}>
                    일정 추가
                </button>
            </main>
        </motion.div>
    );
};
