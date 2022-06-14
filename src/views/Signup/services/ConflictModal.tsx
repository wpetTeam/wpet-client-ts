import IMAGE from 'assets/images/Character/conflict-img.png';
import { Dispatch, SetStateAction, FC } from 'react';

interface CProps {
    conflictMsg: string;
    setShowsConflict: Dispatch<SetStateAction<boolean>>;
}

export const ConflictModal: FC<CProps> = (props: CProps) => {
    const closeModal = () => {
        props.setShowsConflict(false);
    };
    return (
        <div className="modal-conflict">
            <div className="frame">
                <img src={IMAGE} alt="중복 감지" width={75} />
                <p className="text-conflict">
                    중복된 <span>{props.conflictMsg}</span>이 감지되었습니다.
                    <br />
                    다시 입력해주세요.
                </p>
                <button className="btn-ok" onClick={closeModal}>
                    확인
                </button>
            </div>
        </div>
    );
};
