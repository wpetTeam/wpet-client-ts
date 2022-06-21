import { useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Diary, Pet } from "models";
import { Header } from "components/home/Header";
import { API } from "services";

export const DiaryFeed = () => {
    let params = useParams();
    const [tab, setTab] = useState(0);
    const [diarys, setDiarys] = useState<Array<Diary>>([]);
    const [pet, setPet] = useState<Pet>();
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
                                <p>{pet?.birthDate}</p>
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
                                    style={{ color: "lightsteelblue" }}
                                />
                                {diarys.length}
                            </div>
                            <div className="diary__item">
                                <p>2022</p>
                                {diarys.length}
                            </div>
                            <div className="diary__item">
                                <Icon
                                    icon="jam:medal-f"
                                    style={{ color: "silver" }}
                                />
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
                            All
                        </button>
                        <button
                            className={
                                tab === 1 ? "btn-tab selected" : "btn-tab"
                            }
                            onClick={() => setTab(1)}
                        >
                            <Icon icon="ic:baseline-photo-camera" />
                            Photo
                        </button>
                        <button
                            className={
                                tab === 2 ? "btn-tab selected" : "btn-tab"
                            }
                            onClick={() => setTab(2)}
                        >
                            <Icon icon="carbon:text-align-justify" />
                            Texts
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
                                <div className="texts__item">
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
                            {/* {tab === 0 &&
                            Array.from({ length: 10 }).map((item) => (
                                <figure className="figure-img">
                                    <img
                                        className="img-origin"
                                        src=""
                                        alt="diary feed"
                                    />
                                </figure>
                            ))} */}
                            {tab === 0 &&
                                diarys.map((item) => (
                                    <figure className="figure-img">
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
                                    <figure className="figure-img">
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
