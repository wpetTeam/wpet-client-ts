import uuid from "react-uuid";
import { Icon } from "@iconify/react";
import IMAGE from "assets/images/Character/pet-empty.png";

export const PetBox = ({ userPets, petPics }) => {
    return (
        <div className="pet-box col">
            <div className="col_text_01">
                <Icon icon="carbon:dog-walker" />
            </div>
            {userPets.length === 0 ? (
                <p className="col_text_02 empty">등록된 반려견이 없습니다.</p>
            ) : (
                <div className="col_list_02 pets">
                    {userPets.map((item: any, idx: number) => (
                        <div className="pet__item" key={uuid()}>
                            <img
                                className="img-picture"
                                src={
                                    petPics[idx] === null ? IMAGE : petPics[idx]
                                }
                                alt="반려견 사진"
                                width={90}
                                height={90}
                            />
                            {item.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
