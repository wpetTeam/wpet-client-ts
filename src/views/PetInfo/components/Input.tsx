import styled from 'styled-components';

export const Input = (props: {
    name: string;
    value: string;
    onChange?: any;
    placeholder?: string | undefined;
    disabled?: boolean | undefined;
    maxLength?: number | undefined;
    width: string;
    text?: string;
    empty?: boolean | undefined;
}) => {
    return (
        <Container>
            <Form
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder!}
                disabled={props.disabled!}
                maxLength={props.maxLength!}
                width={props.width}
                text={props.text!}
                empty={props.empty!}
            />
            {props.text && <Text>{props.text}</Text>}
        </Container>
    );
};

const Container = styled.div`
    width: fit-content;
    height: 30px;

    margin-right: 10px;
    margin-bottom: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Form = styled.input<{
    name: string;
    text: string;
    empty: boolean;
    disabled: boolean;
    width: string;
}>`
    width: ${(props) => props.width};
    height: 30px;

    margin-right: 5px;
    padding-left: ${(props) => (props.text ? '0' : '10px')};

    text-align: ${(props) => (props.text ? 'center' : 'left')};
    font-family: Pretendard Medium;
    color: black;
    font-weight: ${(props) => (props.disabled ? '500' : '700')};
    font-size: ${(props) => (props.disabled ? '0.95em' : '0.8em')};
    letter-spacing: 0.1em;

    background: transparent;
    border: ${(props) =>
        props.disabled
            ? 'transparent'
            : props.empty
            ? '1px solid red'
            : '1px solid #bdbdbd'};
    border-radius: 4px;

    &:focus {
        outline: none;
        border: 1.5px solid ${({ theme }) => theme.aboutLogoText};
    }
`;

const Text = styled.p`
    font-family: Pretendard;
    font-size: 1em;
    color: #686868;
`;
