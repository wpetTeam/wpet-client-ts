import React, { useState } from "react";

export function ExtraHealthModal({ setEditsHealth }) {
    const [tab, setTab] = useState(0);
    const [addsPill, setAddsPill] = useState(false);
    const [needsAlarm, setNeedsAlarm] = useState(false);

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
                        <div className="pill__item info">
                            <span>💊</span>
                            <p className="text-pill-name">타이레놀</p>
                            <p className="text-pill-desc">머리 아플 때</p>
                        </div>

                        {addsPill ? (
                            <div className="pill__item add-info">
                                <input placeholder="약 이름이 무엇인가요?" />
                                <input placeholder="약에 대해 설명을 덧붙여보세요!" />
                                <label className="input-checkbox">
                                    약 복용 알림이 필요하신가요?
                                    <input
                                        type="checkbox"
                                        onChange={() =>
                                            setNeedsAlarm(!needsAlarm)
                                        }
                                    />
                                </label>
                                {needsAlarm && (
                                    <div className="pill__alarm">
                                        <input placeholder="복용 주기" />
                                    </div>
                                )}

                                <div className="btn-container">
                                    <button onClick={() => setAddsPill(false)}>
                                        취소
                                    </button>
                                    <button>완료</button>
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
