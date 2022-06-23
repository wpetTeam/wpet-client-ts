import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Diary, Pet } from "models";
import { Header } from "components/home/Header";
import { API } from "services";
import { DiaryModal } from "../components/Read/DiaryModal";

export const DiaryFeed = () => {
    let params = useParams();
    const [tab, setTab] = useState(0);
    const [diarys, setDiarys] = useState<Array<Diary>>([]);
    const [pet, setPet] = useState<Pet>();
    const [showsDetail, setShowsDetail] = useState(false);
    const [diaryId, setDiaryId] = useState(0);
    const [color, setColor] = useState<string>("#ffffff");
    const petId = params.petId;

    useEffect(() => {
        const getPetDiary = async () => {
            await API.get(`/pets/${petId}/diarys`, {
                withCredentials: true,
            }).then((res) => {
                console.log(">>> [GET PET DIARY] ✅ SUCCESS");
                setDiarys(res.data.result);
            });
        };
        const getPet = async () => {
            await API.get(`/pets/${petId}`, {
                withCredentials: true,
            }).then((res) => {
                console.log(">>> [GET PET DIARY] ✅ SUCCESS");
                setPet(res.data.result);
            });
        };
        getPetDiary();
        getPet();
    }, []);

    const handleModal = (item: Diary, isColor?: boolean) => {
        setDiaryId(item.diaryID);
        setShowsDetail(!showsDetail);
        if (isColor) setColor(item.color);
        else setColor("#ffffff");
    };

    function getAge(birthDate: any) {
        const today = new Date();
        const birth = new Date(birthDate);
        var age = today.getFullYear() - birth.getFullYear();
        var m = today.getMonth() - birth.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
            age--;
        }
        return age;
    }

    return (
        <div className="feed-container">
            <Header />
            <div className="feed-main row">
                <div className="row_profile_01">
                    <div className="div-frame">
                        <img src={pet?.photo} alt="반려견 사진" />
                        <div className="div-info">
                            <p className="text-name">{pet?.name}</p>
                            <div className="div-details">
                                <p>{getAge(pet?.birthDate)}yrs</p>
                                <div></div>
                                <p>
                                    {pet?.gender === "남" ? "male" : "female"}
                                </p>
                            </div>
                        </div>
                        <div className="diary-info">
                            <div className="diary__item">
                                <Icon
                                    icon="bxs:book-heart"
                                    style={{ color: "#aa5b42" }}
                                />
                                <span style={{ color: "#aa5b42" }}>
                                    Diarys{"   "}
                                </span>
                                {diarys.length}
                            </div>
                            <div className="diary__item">
                                <Icon
                                    icon="jam:medal-f"
                                    style={{ color: "silver" }}
                                />
                                <span style={{ color: "silver" }}>
                                    Level{"   "}
                                </span>
                                {pet?.level}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row_diarys_02 col">
                    <div className="tab-container row">
                        <button
                            className={
                                tab === 0 ? "btn-tab selected" : "btn-tab"
                            }
                            onClick={() => setTab(0)}
                        >
                            <Icon icon="fa6-solid:border-all" />
                            Grid
                        </button>
                        <button
                            className={
                                tab === 2 ? "btn-tab selected" : "btn-tab"
                            }
                            onClick={() => setTab(2)}
                        >
                            <Icon icon="carbon:text-align-justify" />
                            List
                        </button>
                        <button
                            className={
                                tab === 3 ? "btn-tab selected" : "btn-tab"
                            }
                            onClick={() => setTab(3)}
                        >
                            <Icon icon="eva:color-palette-fill" />
                            Theme
                        </button>
                    </div>
                    {tab === 2 ? (
                        <div className="texts-list">
                            {diarys.map((item) => (
                                <div
                                    className="texts__item"
                                    onClick={() => handleModal(item, false)}
                                >
                                    <p className="text-title">{item.title}</p>
                                    <p className="text-date">
                                        <Icon icon="ant-design:calendar-twotone" />
                                        {item.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="diarys-list">
                            {tab === 0 &&
                                diarys.map((item) => (
                                    <figure
                                        className="figure-img"
                                        onClick={() => handleModal(item, false)}
                                    >
                                        {item.photo ? (
                                            <img
                                                className="img-origin"
                                                src={item.photo}
                                                alt="diary feed"
                                            />
                                        ) : (
                                            <div className="text-title">
                                                {item.title}
                                            </div>
                                        )}
                                    </figure>
                                ))}
                            {tab === 1 &&
                                diarys.map(
                                    (item) =>
                                        item.photo && (
                                            <figure className="figure-img">
                                                <img
                                                    className="img-origin"
                                                    src={item.photo}
                                                    alt="diary feed"
                                                />
                                            </figure>
                                        ),
                                )}

                            {tab === 3 &&
                                diarys.map((item) => (
                                    <figure
                                        className="figure-img"
                                        onClick={() => handleModal(item, true)}
                                    >
                                        {item.photo ? (
                                            <ThemeImg
                                                src={item.photo}
                                                alt="diary feed"
                                                color={item.color}
                                            />
                                        ) : (
                                            <ThemeDiv color={item.color}>
                                                {item.title}
                                            </ThemeDiv>
                                        )}
                                    </figure>
                                ))}
                        </div>
                    )}
                </div>
                {showsDetail && (
                    <DiaryModal
                        petId={petId}
                        diaryId={diaryId}
                        setShowsDetail={setShowsDetail}
                        color={color}
                    />
                )}
            </div>
        </div>
    );
};

const ThemeImg = styled.img<{ color: string }>`
    width: 96%;
    height: 96%;
    padding: 2%;
    background: ${(props) => props.color};
`;

const ThemeDiv = styled.div<{ color: string }>`
    width: 96%;
    height: 96%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2%;
    background: ${(props) => props.color};
`;
