import { Icon } from "@iconify/react";
import { Box } from ".";
import "views/MyAccount/styles/boxs.style.scss";
import { useState } from "react";

export const DateBox = ({ info }) => {
    const [isDelete, setIsDelete] = useState(false);
    const variants = {
        open: { opacity: 1, x: "-113.5%", y: "-20%", scale: 1.05 },
        closed: { opacity: 1, x: 0 },
    };
    return (
        <Box
            className="date-box col"
            isUpdate={isDelete}
            animate={isDelete ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 0.8 }}
        >
            <Icon className="col_icon_01" icon="uil:calender" />
            <p className="col_text_02">
                {info.joinDate} 부터 wpet과 함께하고 있습니다.
            </p>
            <p className="col_text_03 delete" onClick={() => setIsDelete(true)}>
                탈퇴하고 싶어요
            </p>
        </Box>
    );
};
