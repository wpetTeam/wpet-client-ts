export const Today = () => {
    var day_name = ['월', '화', '수', '목', '금', '토', '일'];
    var current_day = new Date();

    var year = current_day.getFullYear(),
        month = current_day.getMonth(),
        date = current_day.getDate(),
        day = current_day.getDay();
    if (day === 0) {
        day = 7;
    }

    return (
        <div className="date-container">
            <p>
                <span>{year}</span>년 <span>{month + 1}</span>월
                <span>{date}</span>일 <span> {day_name[day - 1]}</span>요일
            </p>
        </div>
    );
};
