import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Footer, Header, Main } from './layouts';
import { theme } from 'assets/styles/theme';

const About = () => {
    const [isBlur, setIsBlur] = useState(false);

    return (
        <ThemeProvider theme={theme}>
            <Container className={isBlur ? 'isBlur' : ''}>
                <Header setIsBlur={setIsBlur} />
                <Main isBlur={isBlur} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
};
export default About;

const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 2% 3%;
    transition: 0.4s ease-in-out;
    background: ${({ theme }) => theme.aboutBackground};
    &.isBlur {
        transition: 0.4s ease-in-out;
        background: ${({ theme }) => theme.aboutLogoText}99;
    }
`;
