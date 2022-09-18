import logo from "assets/images/Character/conflict-img.png";
import uuid from "react-uuid";
import { Button } from "../Button";
import { PetInfo } from "views/PetInfo/models/index.js";
import { newPet } from "models";
import { createPet } from "views/PetInfo/adapters";

export const Step3 = (props: { petInfo: PetInfo; picture: string }) => {
    const birthDate =
        props.petInfo.year +
        "-" +
        ("00" + props.petInfo.month).slice(-2) +
        "-" +
        ("00" + props.petInfo.date).slice(-2);

    const handleCreatePet = async () => {
        const petData: newPet = {
            name: props.petInfo.name,
            birthDate: birthDate,
            gender: props.petInfo.gender,
            photo: props.picture,
            breeds: props.petInfo.breed,
        };
        createPet(petData);
    };

    return (
        <div className="step3-container">
            <p className="step3-header">작성한 반려견 정보를 확인해주세요.</p>
            <div className="step3-main row">
                <div className="row_picture_01">
                    <img
                        className={
                            props.picture === "" ? "img-pet empty" : "img-pet"
                        }
                        src={props.picture === "" ? logo : props.picture}
                        alt="pictureSection"
                    />
                </div>
                <div className="row_div_02 info col">
                    <Info petInfo={props.petInfo} />
                </div>
            </div>
            <div className="step3-footer">
                <div></div>
                {/* Link 확인해보기 */}
                {/* <Link to="/pet-info"> */}
                <Button text="확인 완료 및 등록" onClick={handleCreatePet} />
            </div>
        </div>
    );
};

function Info({ petInfo }) {
    return (
        <>
            <div className="col_div_01 row">
                <div className="info__item name">
                    <p>반려견 이름</p> <span>{petInfo.name}</span>
                </div>
                <div className="info__item gender">
                    <p>반려견 성별</p> <span>{petInfo.gender}</span>
                </div>
            </div>
            <div className="col_div_02 info__item birth">
                <p>반려견 출생년월 / 만난 날</p>{" "}
                <span>
                    {petInfo.year}. {("00" + petInfo.month).slice(-2)}.{" "}
                    {("00" + petInfo.date).slice(-2)}
                </span>
            </div>
            <div className="info__item breed">
                <p>반려견 종</p>
                <div className="info__item-breeds">
                    {petInfo.breed.map((item) => (
                        <span className="breed__item" key={uuid()}>
                            {item}
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
}
