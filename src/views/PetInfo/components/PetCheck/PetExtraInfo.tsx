import React, { useState } from "react";
import { Box } from "views/MyAccount/components/Account";
import { ExtraHealthModal } from "./ExtraHealthModal";

export const PetExtraInfo = (props: { petID: number; isUpdate: boolean }) => {
    const [editsShower, setEditsShower] = useState(false);
    const [editsGrooming, setEditsGrooming] = useState(false);
    const [editsHealth, setEditsHealth] = useState(false);

    const [extraInfo, setExtraInfo] = useState({
        latestShowerDate: "",
        showerCycle: 0,
        latestGroomingDate: 0,
        groomingCycle: 0,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExtraInfo({
            ...extraInfo,
            [e.target.name]: e.target.value,
        });
    };

    const variants = {
        open: { x: "-70%" },
        closed: {},
    };

    const updateShowerBtn = () => {
        setEditsShower(false);
    };
    return (
        <>
            <div className="col_shower_01">
                {editsShower ? (
                    <>
                        목욕 정보 등록하기
                        <div className="div-info shower">
                            <div className="div-container cycle">
                                <label>목욕/샤워 주기</label>
                                <div className="div-input">
                                    <input
                                        name="showerCycle"
                                        value={extraInfo.showerCycle}
                                        onChange={handleInputChange}
                                    />
                                    <label>일</label>
                                </div>
                            </div>
                        </div>
                        <button className="btn-enter" onClick={updateShowerBtn}>
                            등록
                        </button>
                    </>
                ) : (
                    <div className="div-empty shower">
                        <button
                            className={
                                props.isUpdate
                                    ? "btn-register"
                                    : "btn-register active"
                            }
                            onClick={() => setEditsShower(true)}
                            disabled={props.isUpdate}
                        >
                            목욕 정보 등록하기
                        </button>
                    </div>
                )}
            </div>
            <div className="col_grooming_02">
                {editsGrooming ? (
                    <>
                        미용 정보 등록하기
                        <div className="div-info grooming">
                            <div className="div-container cycle">
                                <label>미용 주기</label>
                                <div className="div-input">
                                    <input
                                        name="groomingCycle"
                                        value={extraInfo.groomingCycle}
                                        onChange={handleInputChange}
                                    />
                                    <label>일</label>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn-enter"
                            onClick={() => setEditsGrooming(false)}
                        >
                            등록
                        </button>
                    </>
                ) : (
                    <div className="div-empty grooming">
                        <button
                            className={
                                props.isUpdate
                                    ? "btn-register"
                                    : "btn-register active"
                            }
                            onClick={() => setEditsGrooming(true)}
                            disabled={props.isUpdate}
                        >
                            미용 정보 등록하기
                        </button>
                    </div>
                )}
            </div>
            <Box
                isUpdate={editsHealth}
                animate={editsHealth ? "open" : "closed"}
                variants={variants}
                transition={{ duration: 0.8 }}
                className={
                    editsHealth ? "col_health_03 modal" : "col_health_03"
                }
            >
                {editsHealth ? (
                    <ExtraHealthModal setEditsHealth={setEditsHealth} />
                ) : (
                    <div className="div-empty health">
                        <button
                            className={
                                props.isUpdate
                                    ? "btn-register health"
                                    : "btn-register active health"
                            }
                            onClick={() => setEditsHealth(true)}
                            disabled={props.isUpdate}
                        >
                            건강 정보 등록하기
                        </button>
                    </div>
                )}
            </Box>
        </>
    );
};
