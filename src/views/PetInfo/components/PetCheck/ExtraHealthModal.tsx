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
                    π Pill
                </button>
                <button className="tab-hospital" onClick={() => setTab(1)}>
                    π₯ Hospital
                </button>
                <button
                    className="btn-close"
                    onClick={() => setEditsHealth(false)}
                >
                    β
                </button>
            </header>
            {tab === 0 && (
                <>
                    <main className="pill-list">
                        <div className="pill__item info">
                            <span>π</span>
                            <p className="text-pill-name">νμ΄λ λ</p>
                            <p className="text-pill-desc">λ¨Έλ¦¬ μν λ</p>
                        </div>

                        {addsPill ? (
                            <div className="pill__item add-info">
                                <input placeholder="μ½ μ΄λ¦μ΄ λ¬΄μμΈκ°μ?" />
                                <input placeholder="μ½μ λν΄ μ€λͺμ λ§λΆμ¬λ³΄μΈμ!" />
                                <label className="input-checkbox">
                                    μ½ λ³΅μ© μλ¦Όμ΄ νμνμ κ°μ?
                                    <input
                                        type="checkbox"
                                        onChange={() =>
                                            setNeedsAlarm(!needsAlarm)
                                        }
                                    />
                                </label>
                                {needsAlarm && (
                                    <div className="pill__alarm">
                                        <input placeholder="λ³΅μ© μ£ΌκΈ°" />
                                    </div>
                                )}

                                <div className="btn-container">
                                    <button onClick={() => setAddsPill(false)}>
                                        μ·¨μ
                                    </button>
                                    <button>μλ£</button>
                                </div>
                            </div>
                        ) : (
                            <button
                                className="pill__item btn"
                                onClick={() => setAddsPill(true)}
                            >
                                <span>π</span>
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
