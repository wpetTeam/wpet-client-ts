import uuid from 'react-uuid';
import { Icon } from '@iconify/react';
import IMAGE from 'assets/images/Character/pet-empty.png';
import { Box } from '.';

export const PetBox = ({ userPets, petPics }) => {
    return (
        <Box className="pet-box col" isUpdate={false}>
            <div className="col_text_01">
                <p>나의 반려견</p> <Icon icon="carbon:dog-walker" />
            </div>
            {userPets.length === 0 ? (
                <p className="col_text_02">등록된 반려견이 없습니다.</p>
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
        </Box>
    );
};
