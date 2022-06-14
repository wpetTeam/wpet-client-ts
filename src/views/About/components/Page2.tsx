import { RiHeartPulseFill } from 'react-icons/ri';
import { BsFillAlarmFill } from 'react-icons/bs';
import { GiSittingDog } from 'react-icons/gi';
import 'views/About/styles/components.style.scss';

export const Page2 = () => {
    return (
        <div className="page_container_02 row">
            <div className="row_img_01"></div>
            <div className="row_text_02">
                <p className="text-concept">
                    <RiHeartPulseFill style={{ marginRight: '2%' }} />
                    반려견 건강 관리
                </p>
                <p className="text-title">
                    Healthy pets <br /> Happy pets!
                </p>
                <p className="text-description">
                    추억이 오래 쌓일 수 있게 체계적으로 관리하세요.
                </p>
                <div className="function-container">
                    <BsFillAlarmFill className="icon" />
                    <p className="text-function">
                        반려견의 주요 일정을 놓치지 마세요 <br />
                        <span>병원 예약, 약 복용일, 미용 날짜</span>
                    </p>
                </div>
                <div className="function-container">
                    <GiSittingDog className="icon" />
                    <p className="text-function">
                        반려견의 정보를 잊지 마세요
                        <br />
                        <span>병원 기록, 복용 약, 산책, 목욕</span>
                    </p>
                </div>
            </div>
        </div>
    );
};
