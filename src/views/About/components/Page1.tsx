import { FaPenSquare } from 'react-icons/fa';

export const Page1 = () => {
    return (
        <div className="page_container_01 row">
            <div className="row_text_01">
                <p className="text-concept">
                    <FaPenSquare style={{ marginRight: '2%' }} />
                    반려견 일기
                </p>
                <p className="text-title">
                    Write &amp; Keep <br /> pet's paws!
                </p>
                <p className="text-description">
                    매일 기록하지 않아도 좋습니다.
                    <br />
                    반려견의 오늘을 담고 있는 사진 한 장과 글은 <br />
                    일상을 특별한 추억으로 남기에 충분합니다.
                </p>
            </div>
            <div className="row_img_02"></div>
        </div>
    );
};
