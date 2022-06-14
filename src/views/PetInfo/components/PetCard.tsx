import { useEffect, useState } from 'react';
import EMPTY_IMAGE from 'assets/images/Character/common-character.png';
import { Pet } from 'models';
import { getPet } from '../adapters/getPet';
import '../styles/components.style.scss';
import { PetDetail } from './PetDetail';

export const PetCard = (props: { petID: number }) => {
    const [info, setInfo] = useState<Pet>();
    const [showsDetail, setShowsDetail] = useState(false);

    useEffect(() => {
        getPet(props.petID, setInfo);
    }, []);

    return (
        <>
            <div
                className="card-container row"
                onClick={() => setShowsDetail(true)}
            >
                <img
                    src={info?.photo === null ? EMPTY_IMAGE : info?.photo}
                    alt="이미지"
                    width={100}
                />
                <p>{info?.name}</p>
            </div>
            {showsDetail && (
                <PetDetail
                    petID={props.petID}
                    setShowsDetail={setShowsDetail}
                />
            )}
        </>
    );
};
