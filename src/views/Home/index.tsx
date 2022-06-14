import React from 'react';
import { theme } from 'assets/styles/theme';
import { ThemeProvider } from 'styled-components';
import { Main } from './layouts/Main';
import { Header } from 'components/home/Header';

const Home = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="home-container">
                <Header />
                <Main />
            </div>
        </ThemeProvider>
    );
};
export default Home;
