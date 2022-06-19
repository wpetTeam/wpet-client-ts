import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { getBreeds } from "../adapters";
import { handleBreedPicker } from "./BreedPicker/handlePicker";
import "../styles/components.style.scss";

export const PetBreedModal = (props: {
    selectBreed: Array<string>;
    setSelectBreed: Dispatch<SetStateAction<Array<string>>>;
    setShowsBreeds: Dispatch<SetStateAction<boolean>>;
}) => {
    const [search, setSearch] = useState("");
    const [breeds, setBreeds] = useState<Array<string>>([]);

    useEffect(() => {
        getBreeds(setBreeds);
    }, []);

    console.log(breeds);

    const filteredBreed = breeds.filter((item) => {
        return item.includes(search);
    });

    return (
        <div className="breeds-modal-container col">
            <div className="breed-modal-eclipse">
                <p>반려견 종 검색하기</p>
                <Icon
                    className="icon-close"
                    icon="ep:close-bold"
                    onClick={() => props.setShowsBreeds(false)}
                />
            </div>
            <div className="breed-modal-frame col">
                <div className="col_search-bar_01">
                    <input
                        className="input-search"
                        placeholder=""
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <Icon icon="charm:search" />
                </div>
                <div className="col_result_02">
                    <p className="text-result">검색 결과</p>
                    <div className="breeds-list">
                        {search.length > 1 &&
                            filteredBreed
                                .sort(function (a, b) {
                                    return a === b ? 0 : a > b ? 1 : -1;
                                })
                                .map((item) => (
                                    <div
                                        className="breed__item"
                                        onClick={() => {
                                            handleBreedPicker(
                                                item,
                                                props.selectBreed,
                                                props.setSelectBreed,
                                            );
                                            props.setShowsBreeds(false);
                                        }}
                                    >
                                        {item}
                                    </div>
                                ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
