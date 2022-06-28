import styled from "styled-components";
import { motion } from "framer-motion";

export { EmailBox } from "./EmailBox";
export { PwBox } from "./PwBox";
export { PetBox } from "./PetBox";
export { ProfileBox } from "./ProfileBox";
export { DateBox } from "./DateBox";

export const Box = styled(motion.div)<{ isUpdate: boolean }>`
    position: ${(props) => (props.isUpdate ? "fixed" : "")};
    width: ${(props) => (props.isUpdate ? "25%" : "90%")};
    padding: ${(props) => (props.isUpdate ? "2%" : "5%")};

    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.37);
    backdrop-filter: ${(props) => (props.isUpdate ? "blur(15px)" : "")};
    -webkit-backdrop-filter: blur(15px);
`;
