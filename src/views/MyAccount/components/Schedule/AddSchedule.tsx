import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { DatePicker } from "../DatePicker";

export const NewSchedule = ({ addsNew, setAddsNew, pets }) => {
    const [petId, setPetId] = useState<number>();
    const [description, setDescription] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");

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
        console.log(petId, description, time, date);
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
                <button onClick={() => setAddsNew(false)}>X</button>
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
                                <option value={idx}>없음</option>
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
                    <p>Tag</p>
                </div>
                <button className="btn-new-schedule" onClick={handleCreateBtn}>
                    추가
                </button>
            </main>
        </motion.div>
    );
};
