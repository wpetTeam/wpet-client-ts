import React, { useState } from 'react';
import { Container, Nav, Article } from 'assets/styles/shared/tab.style';
import { Tab } from '../components/Tab';
import { ReadDiary, WriteDiary } from '../services';
import '../styles/layouts.style.scss';

export const Main = () => {
    const [tab, setTab] = useState(0);
    return (
        <Container className="diary-main">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <ReadDiary />}
                {tab === 1 && <WriteDiary />}
            </Article>
        </Container>
    );
};
