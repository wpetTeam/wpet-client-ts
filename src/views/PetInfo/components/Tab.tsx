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
            <Link to="info">
                <Icon
                    icon="cil:dog"
                    className={
                        props.tab === 0 ? "petInfo-nav select" : "petInfo-nav"
                    }
                    onClick={() => props.setTab(0)}
                />
            </Link>
            <Link to="registeration/step-1">
                <Icon
                    icon="fa-solid:plus"
                    className={
                        props.tab === 1 ? "petInfo-nav select" : "petInfo-nav"
                    }
                    onClick={() => props.setTab(1)}
                />
            </Link>
        </>
    );
};
