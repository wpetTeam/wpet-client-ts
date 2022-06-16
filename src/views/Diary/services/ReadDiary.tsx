import { petID } from 'models';
import { useEffect, useState } from 'react';
import { Calender } from '../components';
import { getUserPets } from 'adapters';
import { getDiary } from '../adapters';
import { Diary } from 'models';
import { DiaryCard } from '../components/Read/DiaryCard';

export const ReadDiary = () => {
    const [userPets, setUserPets] = useState<Array<petID>>([]);
    const [petIds, setPetIds] = useState<Array<number>>([]);
    const [diary, setDiary] = useState<Array<Diary>>([]);

    useEffect(() => {
        getUserPets(setUserPets);
    }, []);

    useEffect(() => {
        if (userPets !== undefined) {
            userPets.map((item) => setPetIds((old) => [...old, item.petID]));
        }
    }, [userPets]);

    useEffect(() => {
        if (petIds !== undefined) {
            petIds.map((petId) => getDiary(petId, setDiary));
        }
    }, [petIds]);

    console.log(diary);

    return (
        <div className="read-container row">
            <div className="row_calender_01 col">
                <Calender diary={diary} />
                <p className="text-description">
                    같은 날 여러 반려견의 일기가 작성될 경우, 랜덤으로
                    보여집니다.
                </p>
            </div>
            <div className="row_diarys_02 col">
                {userPets.map((item) => (
                    <DiaryCard pet={item} />
                ))}
            </div>
        </div>
    );
};
