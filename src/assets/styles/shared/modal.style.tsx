import styled from 'styled-components';

interface Props {
    background: string;
    visibility: string;
}

export const Eclipse = styled.div<Props>`
    width: 50px;
    height: 50px;
    background: ${(props) => props.background};
    visibility: ${(props) => props.visibility};
    border-radius: 50%;
    z-index: 2;
`;

export const Frame = styled.div<Props>`
    margin-top: -4.5%;
    padding-top: 5%;
    background: ${(props) => props.background};
    visibility: ${(props) => props.visibility};
    border-radius: 20px;
`;

export const Text = styled.p`
    margin: -20px 0 0.5% 2%;
    font-family: Pretendard Medium;
    font-size: 0.7em;
    color: firebrick;
`;
