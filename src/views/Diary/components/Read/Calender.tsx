import { useEffect, useState } from 'react';
import { format, addMonths, subMonths, startOfWeek, addDays } from 'date-fns';
import { endOfWeek, isSameDay, isSameMonth } from 'date-fns';
import { startOfMonth, endOfMonth } from 'date-fns';
import uuid from 'react-uuid';
import { Icon } from '@iconify/react';
import EMPTY_IMAGE from 'assets/images/Character/stamp.png';
import { getDiarys } from 'views/Diary/adapters';

const RenderHeader = ({ currentMonth, prevMonth, nextMonth }) => {
    return (
        <div className="header row">
            <div className="col col-first">
                <span className="text">
                    <span className="text month">
                        {format(currentMonth, 'M')}월
                    </span>
                    {format(currentMonth, 'yyyy')}
                </span>
            </div>
            <div className="col col-end">
                <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
                <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
            </div>
        </div>
    );
};

const RenderDays = () => {
    const days: any[] = [];
    const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thrs', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                {date[i]}
            </div>,
        );
    }
    return <div className="days row">{days}</div>;
};

const RenderCells = ({ currentMonth, selectedDate, diarys }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: any[] = [];
    let days: any[] = [];
    let day = startDate;
    let formattedDate = '';

    const getRandomPhoto = (today: string) => {
        let diary_list = diarys[today];
        if (diary_list !== undefined) {
            if (diary_list.length === 1) {
                return diary_list[0]['photo'];
            } else {
                let random_petID = Math.floor(
                    Math.random() * diary_list.length,
                );
                return diary_list[random_petID]['photo'];
            }
        } else return;
    };

    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
            const IMAGE = getRandomPhoto(format(day, 'yyyy-MM-dd'));
            formattedDate = format(day, 'd');
            days.push(
                <div
                    className={`col cell ${
                        !isSameMonth(day, monthStart)
                            ? 'disabled'
                            : isSameDay(day, selectedDate)
                            ? 'selected'
                            : IMAGE === undefined
                            ? 'not-valid'
                            : 'valid'
                    }`}
                    key={uuid()}
                >
                    <span
                        className={
                            format(currentMonth, 'M') !== format(day, 'M')
                                ? 'text not-valid'
                                : ''
                        }
                    >
                        {formattedDate}
                    </span>
                    {selectedDate > day && (
                        <img
                            src={IMAGE === undefined ? EMPTY_IMAGE : IMAGE}
                            alt="Diary"
                            className={
                                IMAGE === undefined ? 'img-undefined' : 'img'
                            }
                        />
                    )}
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className="row" key={uuid()}>
                {days}
            </div>,
        );
        days = [];
    }
    return <div className="body">{rows}</div>;
};
export const Calender = () => {
    const [diarys, setDiarys] = useState({});
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const selectedDate = new Date();

    const year = format(currentMonth, 'yyyy');
    const month = format(currentMonth, 'MM');

    useEffect(() => {
        getDiarys(year, month, setDiarys);
    }, [year, month]);

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    };
    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    };

    return (
        <div className="calendar">
            <RenderHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <RenderDays />
            <RenderCells
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                diarys={diarys}
            />
        </div>
    );
};
