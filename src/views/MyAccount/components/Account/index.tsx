import styled from 'styled-components';

export { EmailBox } from './EmailBox';
export { PwBox } from './PwBox';
export { PetBox } from './PetBox';
export { ProfileBox } from './ProfileBox';
export { DateBox } from './DateBox';

export const Box = styled.div<{ isUpdate: boolean }>`
    position: ${(props) => (props.isUpdate ? 'fixed' : '')};
    width: ${(props) => (props.isUpdate ? '25%' : '90%')};
    top: ${(props) => (props.isUpdate ? '15%' : '')};
    left: ${(props) => (props.isUpdate ? '36.5%' : '')};
    padding: ${(props) => (props.isUpdate ? '2%' : '5%')};
    background: ${(props) =>
        props.isUpdate ? 'whitesmoke' : 'rgba(196, 196, 196, 0.1)'};
    transition: all 0.5s;
    box-shadow: ${(props) =>
        props.isUpdate ? '7px 7px 0px 0px #00000080' : ''};
    border: ${(props) => (props.isUpdate ? '5px solid #000000' : '')};

    // &:hover {
    //     transform: scale(1.02);
    //     transition: 0.4s ease-in-out;
    //     background: #c4c4c4;
    // }
`;
