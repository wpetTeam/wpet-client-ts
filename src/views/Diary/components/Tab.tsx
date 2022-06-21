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
            <Link to="/diarys/read">
                <Icon
                    icon="bx:book-heart"
                    className={
                        props.tab === 0 ? "diary-nav select" : "diary-nav"
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="/diarys/write">
                <Icon
                    icon="iconoir:design-pencil"
                    className={
                        props.tab === 1 ? "diary-nav select" : "diary-nav"
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};
