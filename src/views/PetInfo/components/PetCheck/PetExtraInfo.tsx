import React, { useState, useEffect } from "react";
import { Box } from "views/MyAccount/components/Account";
import { ExtraHealthModal } from "./ExtraHealthModal";
import {
    createGrooming,
    createShower,
    deleteGrooming,
    deleteShower,
    getGrooming,
    getPills,
    getShower,
} from "views/PetInfo/adapters";
import { GroomingInfo, Pill, ShowerInfo } from "views/PetInfo/models";

export const PetExtraInfo = (props: { petID: number; isUpdate: boolean }) => {
    const [editsShower, setEditsShower] = useState(false);
    const [editsGrooming, setEditsGrooming] = useState(false);
    const [editsHealth, setEditsHealth] = useState(false);

    const [pills, setPills] = useState<Array<Pill>>([]);
    const [shower, setShower] = useState<ShowerInfo>();
    const [grooming, setGrooming] = useState<GroomingInfo>();

    const [isShowerUpdate, setIsShowerUpdate] = useState(false);
    const [isGroomingUpdate, setIsGroomingUpdate] = useState(false);

    const [extraInfo, setExtraInfo] = useState({
        showerCycle: "",
        groomingCycle: "",
        salon: "",
    });

    useEffect(() => {
        getPills(props.petID, setPills);
        getShower(props.petID, setShower);
        getGrooming(props.petID, setGrooming);
    }, []);

    useEffect(() => {
        console.log(grooming);
    }, [grooming]);

    useEffect(() => {
        setIsShowerUpdate(false);
        getShower(props.petID, setShower);
    }, [isShowerUpdate]);

    useEffect(() => {
        setIsGroomingUpdate(false);
        getGrooming(props.petID, setGrooming);
    }, [isGroomingUpdate]);

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
        if (extraInfo.showerCycle.trim().length === 0) {
            alert("주기를 입력해주세요.");
            return;
        }
        createShower(props.petID, Number(extraInfo.showerCycle));
        setEditsShower(false);
        setIsShowerUpdate(true);
    };

    const deleteShowerBtn = () => {
        if (shower !== undefined)
            deleteShower(props.petID, shower?.showerDiaryID);
        setIsShowerUpdate(true);
    };

    const createGroomingBtn = () => {
        if (extraInfo.groomingCycle.trim().length === 0) {
            alert("정보를 모두 입력해주세요.");
            return;
        }
        createGrooming(props.petID, Number(extraInfo.groomingCycle));
        setEditsGrooming(false);
        setIsGroomingUpdate(true);
    };

    const deleteGroomingBtn = () => {
        if (grooming !== undefined)
            deleteGrooming(props.petID, grooming?.beautyDiaryID);
        setIsGroomingUpdate(true);
    };

    return (
        <>
            <div className="col_shower_01">
                {shower === undefined || shower.showerDiaryID === undefined ? (
                    editsShower ? (
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
                            <button
                                className="btn-enter"
                                onClick={updateShowerBtn}
                            >
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
                    )
                ) : (
                    <div className="div-not-empty shower">
                        목욕 주기 : {shower?.cycleDay}일
                        <p
                            className="p-delete shower"
                            onClick={deleteShowerBtn}
                        >
                            삭제
                        </p>
                    </div>
                )}
            </div>
            <div className="col_grooming_02">
                {grooming === undefined ||
                grooming.beautyDiaryID === undefined ? (
                    editsGrooming ? (
                        <>
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
                                onClick={createGroomingBtn}
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
                    )
                ) : (
                    <div className="div-not-empty grooming">
                        미용 주기 : {grooming?.cycleDay}일
                        <p
                            className="p-delete grooming"
                            onClick={deleteGroomingBtn}
                        >
                            삭제
                        </p>
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
                    <ExtraHealthModal
                        setEditsHealth={setEditsHealth}
                        petID={props.petID}
                    />
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
                            {pills.length === 0
                                ? "복용 약 등록하기"
                                : `${pills.length}개의 약 등록완료`}
                        </button>
                    </div>
                )}
            </Box>
        </>
    );
};
