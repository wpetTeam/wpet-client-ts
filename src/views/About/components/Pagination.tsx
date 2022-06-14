import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { FC, Fragment, Dispatch, SetStateAction } from 'react';
import '../styles/components.style.scss';

interface IProps {
    direction: string;
    slideIdx: number;
    setSlideIdx: Dispatch<SetStateAction<number>>;
}

export const Pagination: FC<IProps> = ({
    direction,
    slideIdx,
    setSlideIdx,
}) => {
    const prevSlide = () => {
        if (slideIdx !== 1) {
            setSlideIdx(slideIdx - 1);
        }
    };
    const nextSlide = () => {
        if (slideIdx !== 3) {
            setSlideIdx(slideIdx + 1);
        }
    };
    return (
        <Fragment>
            {direction === 'prev' && (
                <button className="pagination" onClick={prevSlide}>
                    <MdKeyboardArrowLeft size={45} className="icon" />
                </button>
            )}
            {direction === 'next' && (
                <button className="pagination" onClick={nextSlide}>
                    <MdKeyboardArrowRight size={45} className="icon" />
                </button>
            )}
        </Fragment>
    );
};
