import { Icon } from '@iconify/react';
import { petID } from 'models';
import 'views/Diary/styles/read.style.scss';

export const DiaryCard = (props: { pet: petID }) => {
    const name = props.pet.name;
    const picture = props.pet.photo;

    return (
        <div className="diary-card">
            <div>
                <h1>
                    <span>{name}</span> <br />
                    Diary
                </h1>
                <Icon className="icon-diary" icon="icon-park-solid:book-one" />
            </div>
            <div onClick={() => alert('cliek')}>
                <Icon icon="fa-solid:book-open" />
                <figure className="img-container">
                    <img src={picture} alt="반려견 사진" />
                </figure>
                <p className="text-more"> 더 알아보기</p>
            </div>
        </div>
    );
};
