import { useState } from 'react';
import { Container, Nav, Article } from 'assets/styles/shared/tab.style';
import { Tab } from '../components/Tab';
import { Account, Schedule } from '../services';

export const Main = () => {
    const [tab, setTab] = useState(0);

    return (
        <Container className="myaccount-main">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 1 && <Account />}
                {tab === 0 && <Schedule />}
            </Article>
        </Container>
    );
};
