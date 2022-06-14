import { Dispatch, SetStateAction } from 'react';
import uuid from 'react-uuid';
import { handleBreedPicker } from './handlePicker';
import 'views/PetInfo/styles/breed_picker.style.scss';

export const BreedPicker = (props: {
    breeds: Array<string>;
    selectBreed: Array<string>;
    setSelectBreed: Dispatch<SetStateAction<Array<string>>>;
}) => {
    return (
        <div className="breed-picker-container">
            {props.breeds.map(
                (item, idx) =>
                    idx <= 26 && (
                        <button
                            className={
                                props.selectBreed.includes(item)
                                    ? 'btn-select selected'
                                    : 'btn-select'
                            }
                            key={uuid()}
                            onClick={() =>
                                handleBreedPicker(
                                    item,
                                    props.selectBreed,
                                    props.setSelectBreed,
                                )
                            }
                        >
                            <div className="img-container">
                                <img
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/Breed/${props.breeds[idx]}.png`
                                    }
                                    width={45}
                                    height={50}
                                    alt="반려견 종"
                                />
                            </div>
                            <div className="text-container">
                                {/* {breedNameHandler(item)} */}
                                {item}
                            </div>
                        </button>
                    ),
            )}
        </div>
    );
};

export { BreedModal } from './BreedModal';
