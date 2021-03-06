import { Dispatch, SetStateAction } from 'react';

/* 종 선택 */
export const handleBreedPicker = (
    name: string,
    breed: Array<string>,
    setBreed: Dispatch<SetStateAction<Array<string>>>,
) => {
    if (breed.length < 3) {
        if (!breed.includes(name)) {
            setBreed((breed) => [...breed, name]);
        }
    }
    if (breed.includes(name)) {
        handleDeleteBreed(name, breed, setBreed);
    }
};

/* 종 삭제 */
export const handleDeleteBreed = (
    name: string,
    breed: Array<string>,
    setBreed: Dispatch<SetStateAction<Array<string>>>,
) => {
    setBreed(breed.filter((item, idx) => idx !== breed.indexOf(name)));
};

// /* 종 디스플레이 설정 */
// export const breedNameHandler = (name: string) => {
//     var blank_index = name.indexOf(' ');
//     if (blank_index !== -1 && name.length >= 7) {
//         return ` <>
//                 {name.slice(0, blank_index)}
//                 <br />
//                 {name.slice(blank_index + 1)}
//             </>`;
//     } else return name;
// };
