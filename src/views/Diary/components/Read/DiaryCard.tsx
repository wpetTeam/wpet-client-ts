import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Diary, petID } from 'models';
import { getDiary } from 'views/Diary/adapters';
import { API } from 'services';
import 'views/Diary/styles/read.style.scss';

export const DiaryCard = (props: { pet: petID }) => {
    const [diary, setDiary] = useState<Array<Diary>>([]);
    const [picture, setPicture] = useState('');
    const name = props.pet.name;

    useEffect(() => {
        getDiary(props.pet.petID, setDiary);
        API.get(`/pets/${props.pet.petID}`, {
            withCredentials: true,
        }).then((res) => {
            console.log('>>> [ACCOUNT / GET PET PIC] ✅ SUCCESS');
            setPicture(res.data.result.photo);
        });
    }, []);

    console.log(diary);

    return (
        <div className="diary-card">
            <div>
                <img src={picture} alt="반려견 사진" />
                <Icon className="icon-diary" icon="bxs:book-alt" />
            </div>
            <div onClick={() => alert('cliek')}>
                <Icon icon="fa-solid:book-open" />
                <div className="container">
                    <h1>
                        <span>{name}</span>
                        <br /> Diary
                    </h1>
                    <div className="blobs_1"></div>
                    <div className="blobs_2"></div>
                    <div className="blobs_3"></div>
                    <div className="blobs_4"></div>
                    <div className="blobs_5"></div>
                    <div className="blobs_6"></div>
                    <div className="blobs_7"></div>
                </div>
            </div>
        </div>
    );
};
