import { useState } from 'react';
import { Container, Nav, Article } from 'assets/styles/shared/tab.style';
import { Tab } from '../components/Tab';
import { Checkup, Registeration } from '../services';

export const Main = () => {
    const [tab, setTab] = useState(0);

    return (
        <Container className="petInfo-main">
            <Nav>
                <Tab tab={tab} setTab={setTab} />
            </Nav>
            <Article>
                {tab === 0 && <Checkup />}
                {tab === 1 && <Registeration />}
            </Article>
        </Container>
    );
};
