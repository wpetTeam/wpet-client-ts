import { useEffect, useState, FC } from 'react';
import { IoPawSharp } from 'react-icons/io5';
import { Page1, Page2, Page3, Pagination } from 'views/About/components';
import { useInterval } from 'utils';
import '../styles/layouts.style.scss';

interface IProps {
    isBlur: boolean;
}

const Page = ({ pageSlider, slideIdx }) => {
    return (
        <div className="col_page_01">
            {pageSlider.map((obj, idx) => {
                return (
                    <div
                        key={obj.id}
                        className={
                            slideIdx === idx + 1 ? 'page active-anim' : 'page'
                        }
                    >
                        {pageSlider[idx]['component']}
                    </div>
                );
            })}
        </div>
    );
};
const Nav = ({ moveSlideByPaws, slideIdx }) => {
    return (
        <div className="col_nav_02">
            {Array.from({
                length: 3,
            }).map((item, idx) => (
                <IoPawSharp
                    key={idx}
                    onClick={() => moveSlideByPaws(idx + 1)}
                    className={slideIdx === idx + 1 ? 'paw active' : 'paw'}
                    size={15}
                />
            ))}
        </div>
    );
};

export const Main: FC<IProps> = (props: IProps) => {
    const pageSlider = [
        { id: 1, component: <Page1 /> },
        { id: 2, component: <Page2 /> },
        { id: 3, component: <Page3 /> },
    ];
    const [slideIdx, setSlideIdx] = useState(1);

    const delay = 335000;
    const [isRunning, setIsRunning] = useState(true);
    useEffect(() => {
        if (props.isBlur) {
            setIsRunning(false);
        } else {
            setIsRunning(true);
        }
    }, [props.isBlur]);

    useInterval(
        () => {
            if (slideIdx === pageSlider.length) {
                setSlideIdx(1);
            } else setSlideIdx(slideIdx + 1);
        },
        isRunning ? delay : null,
    );
    const moveSlideByPaws = (idx: number) => {
        setSlideIdx(idx);
    };

    return (
        <div className="main-container row">
            <div className="row_pagination_01 prev">
                {slideIdx !== 1 && (
                    <Pagination
                        direction="prev"
                        slideIdx={slideIdx}
                        setSlideIdx={setSlideIdx}
                    />
                )}
            </div>
            <div className="row_slider_02 col">
                <Page pageSlider={pageSlider} slideIdx={slideIdx} />
                <Nav moveSlideByPaws={moveSlideByPaws} slideIdx={slideIdx} />
            </div>
            <div className="row_pagination_03 next">
                {slideIdx !== pageSlider.length && (
                    <Pagination
                        direction="next"
                        slideIdx={slideIdx}
                        setSlideIdx={setSlideIdx}
                    />
                )}
            </div>
        </div>
    );
};
