import React from 'react';
import styled from 'styled-components';

type ButtonProps = {
    text: string;
    onClick: () => void;
    isStop: boolean;
    hoverText: string;
    disabled: boolean;
};

export const Button = ({
    onClick,
    text,
    isStop,
    hoverText,
    disabled,
}: ButtonProps) => {
    const handleClick = () => onClick();
    return (
        <React.Fragment>
            {disabled ? (
                isStop ? (
                    <AboutButton
                        className="stop"
                        onClick={handleClick}
                        disabled={disabled}
                        hoverText={hoverText}
                    >
                        <span>{text}</span>
                    </AboutButton>
                ) : (
                    <AboutButton
                        onClick={handleClick}
                        disabled={disabled}
                        hoverText={hoverText}
                    >
                        <span>{text}</span>
                    </AboutButton>
                )
            ) : (
                <AboutButton
                    className="normal"
                    onClick={handleClick}
                    disabled={disabled}
                    hoverText={hoverText}
                >
                    <span>{text}</span>
                </AboutButton>
            )}
        </React.Fragment>
    );
};

const AboutButton = styled.button<{ hoverText: string }>`
    width: 110px;
    height: 42%;
    margin-right: 10%;

    background: ${({ theme }) => theme.aboutLogoText}20;
    border: transparent;
    border-radius: 9px;
    box-shadow: 3.5px 3px 0px 0px ${({ theme }) => theme.aboutLogoText}70;

    color: ${({ theme }) => theme.aboutLogoText};
    font-family: Strawberry Muffins;
    font-size: 1.2em;
    transition: 0.4s ease-in;

    &.normal:hover {
        cursor: pointer;
        transition: 0.2s;
        width: ${(props) => (props.hoverText === 'Login' ? '95px' : '130px')};
        color: ${({ theme }) => theme.aboutBackground};
        background: ${({ theme }) => theme.aboutLogoText};
        border: transparent;
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.aboutLogoText}90;
        opacity: 0.8;
    }
    &.normal:hover span {
        transition: 0.6s;
        display: none;
    }
    &.normal:hover:before {
        transition: 0.6s;
        content: '${(props) => props.hoverText}';
    }
    &.stop {
        transition: 0.4s ease-out;
        width: ${(props) => (props.hoverText === 'Login' ? '95px' : '130px')};
        color: ${({ theme }) => theme.aboutLogoText};
        background: ${({ theme }) => theme.aboutLogoText}90;
        border: transparent;
        box-shadow: 2px 2px 0px 0px ${({ theme }) => theme.aboutLogoText};
        opacity: 0.8;
    }
    &.stop span {
        display: none;
    }
    &.stop:before {
        content: '${(props) => props.hoverText}';
    }
`;
