import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import uuid from 'react-uuid';
import { handleBreedPicker, handleDeleteBreed } from './handlePicker';
import styled from 'styled-components';

export const BreedModal = (props) => {
    const [search, setSearch] = useState('');
    console.log(props.selectBreed);

    const filteredBreed = props.breeds.filter((item) => {
        return item.includes(search);
    });

    return (
        <div className="modal-breed">
            <div className="modal-header row">
                <p className="row_text_01">반려견 종을 검색해 추가하세요.</p>
                <IoCloseSharp
                    size={26}
                    className="row_icon_02 close"
                    onClick={() => props.setShowModal(false)}
                />
            </div>
            <div className="modal-main col">
                <input
                    className="col_input_01 search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <div className="col_div_02 search-result row">
                    {filteredBreed
                        .sort(function (a, b) {
                            return a === b ? 0 : a > b ? 1 : -1;
                        })
                        .map((item) => (
                            <div
                                className="div-result"
                                key={uuid()}
                                onClick={() =>
                                    handleBreedPicker(
                                        item,
                                        props.selectBreed,
                                        props.setSelectBreed,
                                    )
                                }
                            >
                                {item}
                            </div>
                        ))}
                </div>
            </div>
            <div className="modal-footer col">
                <p className="col_text_01">이미 선택한 견종 (최대 3개)</p>
                <div className="col_div_02 selected">
                    {props.selectBreed.map((item) => (
                        <SelectItem key={uuid()}>
                            {item}
                            <IoCloseSharp
                                className="icon-delete"
                                size={16}
                                onClick={() =>
                                    handleDeleteBreed(
                                        item,
                                        props.selectBreed,
                                        props.setSelectBreed,
                                    )
                                }
                            />
                        </SelectItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const SelectItem = styled.div`
    display:flex;
    flex-direction: row;
    
    width: fit-content:
    height: fit-content;

    padding: 1.5%;
    margin-right: 1.5%;
    margin-bottom: 1%;

    align-items: center;
    justify-content: space-between;

    background: #f3c5b680;
    border-radius: 4px;

    font-size: 0.8em;
    font-weight: 600;
`;
