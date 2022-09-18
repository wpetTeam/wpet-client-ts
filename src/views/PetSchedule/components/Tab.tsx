import { Dispatch, SetStateAction, useEffect } from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const Tab = (props: {
    tab: number;
    setTab: Dispatch<SetStateAction<number>>;
}) => {
    useEffect(() => {}, [props.tab]);
    return (
        <>
            <Link to="/user">
                <Icon
                    icon="material-symbols:account-circle"
                    className={
                        props.tab === 0
                            ? "myaccount-nav select"
                            : "myaccount-nav"
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="/user/schedule">
                <Icon
                    icon="ri:calendar-todo-fill"
                    className={
                        props.tab === 1
                            ? "myaccount-nav select"
                            : "myaccount-nav"
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};
