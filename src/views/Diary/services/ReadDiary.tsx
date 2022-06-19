import { petID } from 'models';
import { useEffect, useState } from 'react';
import uuid from 'react-uuid';
import { Calender } from '../components';
import { getUserPets } from 'adapters';
import { DiaryCard } from '../components/Read/DiaryCard';

export const ReadDiary = () => {
    const [userPets, setUserPets] = useState<Array<petID>>([]);

    useEffect(() => {
        getUserPets(setUserPets);
    }, []);

    return (
        <div className="read-container row">
            <div className="row_calender_01 col">
                <Calender />
                <p className="text-description">
                    같은 날 여러 반려견의 일기가 작성될 경우, 랜덤으로
                    보여집니다.
                </p>
            </div>
            <div className="row_diary-card_02 row">
                <p className="row_text_01">반려견 일기장</p>
                <div className="row_diarys_02">
                    {userPets.map((item) => (
                        <DiaryCard pet={item} key={uuid()} />
                    ))}
                </div>
            </div>
        </div>
    );
};
