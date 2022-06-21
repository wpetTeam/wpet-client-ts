import { useEffect, useState } from "react";
import uuid from "react-uuid";
import IMAGE from "assets/images/Character/yello-img.png";
import { getUserPets } from "adapters";
import { petID } from "models";
import { PetCard } from "../components/PetCard";
import "../styles/services.style.scss";

export const Checkup = () => {
    const [pets, setPets] = useState<Array<petID>>([]);

    useEffect(() => {
        getUserPets(setPets);
    }, []);

    return (
        <div className="checkup-container">
            {pets === undefined ? (
                <div className="empty-container">
                    <img src={IMAGE} alt="이미지" width={80} />
                    등록된 반려견이 없습니다.
                    <br />
                    왼쪽의 + 버튼을 눌러 반려견을 등록해주세요.
                </div>
            ) : (
                <div className="pet-container">
                    {pets.map((item) => (
                        <PetCard key={uuid()} petID={item.petID} />
                    ))}
                </div>
            )}
        </div>
    );
};
