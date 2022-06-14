import { GiDogHouse } from 'react-icons/gi';
import { Icon } from '@iconify/react';
import 'views/About/styles/components.style.scss';

export const Page3 = () => {
    return (
        <div className="page_container_03 row">
            <div className="row_text_01">
                <p className="text-concept">
                    <GiDogHouse style={{ marginRight: '2%' }} />
                    반려견 커뮤니티
                </p>
                <p className="text-title">
                    Community <br /> comes unity!
                </p>
                <p className="text-description">
                    반려견의 다양한 이야기를 함께 나누어요.
                </p>
                <div className="function-container">
                    <Icon
                        icon="ic:round-medical-information"
                        className="icon"
                    />
                    <p className="text-function">
                        반려견 정보 마당 <br />
                        <span>
                            인증된 수의사 선생님이 제공하는 <br />
                            반려견 정보를 알아보세요.
                        </span>
                    </p>
                </div>
            </div>
            <div className="row_img_02"></div>
        </div>
    );
};
