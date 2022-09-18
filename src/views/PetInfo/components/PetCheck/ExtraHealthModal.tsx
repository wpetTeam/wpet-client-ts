import React, { useEffect, useState } from "react";
import { getPills, deletePill, createPill } from "views/PetInfo/adapters";
import { PillInfo, PillTest, Pill } from "views/PetInfo/models";

export function ExtraHealthModal({ setEditsHealth, petID }) {
    const [tab, setTab] = useState(0);
    const [addsPill, setAddsPill] = useState(false);
    const [pill, setPill] = useState<PillTest>({
        petID: petID,
        medicine: "",
        memo: "",
        cycleDay: "",
    });

    const [pills, setPills] = useState<Array<Pill>>([]);

    useEffect(() => {
        getPills(petID, setPills);
    }, []);

    useEffect(() => {
        console.log(pills);
    }, [pills]);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value = e.target.value;
        setPill({
            ...pill,
            [e.target.name]: value,
        });
    }

    const handleAddPillBtn = () => {
        // 데이터 검증
        if (
            pill.memo.trim().length === 0 ||
            pill.medicine.trim().length === 0 ||
            pill.cycleDay.trim().length === 0
        ) {
            alert("입력항목 전부 입력 바람");
            return;
        }

        const pillInfo: PillInfo = {
            petID: pill.petID,
            medicine: pill.medicine,
            memo: pill.memo,
            cycleDay: Number(pill.cycleDay),
        };

        createPill(pillInfo);
        setAddsPill(false);
    };

    const handleDeletePillBtn = (medicineID: number) => {
        let result = window.confirm("해당 약을 삭제하시겠습니까?");
        if (result === true) {
            deletePill(petID, medicineID);
            return;
        }
    };

    return (
        <div className="modal-container">
            <header className="tab-container">
                <button
                    className={tab === 0 ? "tab-pill selected" : "tab-pill"}
                    onClick={() => setTab(0)}
                >
                    💊 Pill
                </button>
                <button className="tab-hospital" onClick={() => setTab(1)}>
                    🏥 Hospital
                </button>
                <button
                    className="btn-close"
                    onClick={() => setEditsHealth(false)}
                >
                    ❌
                </button>
            </header>
            {tab === 0 && (
                <>
                    <main className="pill-list">
                        {pills.map((item) => (
                            <div className="pill__item info">
                                [
                                {item.cycleDay === 0
                                    ? "매일"
                                    : item.cycleDay + "일 주기"}
                                ]<span>💊 </span>
                                <p className="text-pill-name">
                                    {item.medicine}
                                </p>
                                <p className="text-pill-desc">{item.memo}</p>
                                <button
                                    className="btn-pill-delete"
                                    onClick={() =>
                                        handleDeletePillBtn(
                                            item.medicineDiaryID,
                                        )
                                    }
                                >
                                    삭제
                                </button>
                            </div>
                        ))}

                        {addsPill ? (
                            <div className="pill__item add-info">
                                {/* medicine */}
                                <input
                                    name="medicine"
                                    value={pill.medicine}
                                    onChange={handleChange}
                                    placeholder="약 이름이 무엇인가요?"
                                />
                                {/* memo */}
                                <input
                                    name="memo"
                                    value={pill.memo}
                                    onChange={handleChange}
                                    placeholder="약에 대해 설명을 덧붙여보세요!"
                                />
                                {/* cycleDay */}
                                <div className="pill__alarm">
                                    <input
                                        name="cycleDay"
                                        value={pill.cycleDay}
                                        onChange={handleChange}
                                        placeholder="복용 주기(일)"
                                        type="number"
                                        min="0"
                                    />
                                </div>

                                <div className="btn-container">
                                    <button onClick={() => setAddsPill(false)}>
                                        취소
                                    </button>
                                    <button onClick={handleAddPillBtn}>
                                        완료
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="pill__item btn"
                                onClick={() => setAddsPill(true)}
                            >
                                <span>💊</span>
                                <br />
                                Add more !
                            </button>
                        )}
                    </main>
                </>
            )}
            {tab === 1 && (
                <>
                    <main className="hospital-list">continued...</main>
                </>
            )}
        </div>
    );
}
