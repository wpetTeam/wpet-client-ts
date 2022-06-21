import { Header } from "components/home/Header";
import { useState } from "react";
import { Container, Nav, Article } from "assets/styles/shared/tab.style";
import { Tab } from "./components";
import { ReadDiary, WriteDiary } from "./services";
import "./styles/layouts.style.scss";

const Diary = () => {
    const [tab, setTab] = useState(0);
    return (
        <div className="diary-container">
            <Header />
            <Container className="diary-main">
                <Nav>
                    <Tab tab={tab} setTab={setTab} />
                </Nav>
                <Article>
                    {tab === 0 && <ReadDiary />}
                    {tab === 1 && <WriteDiary />}
                </Article>
            </Container>
        </div>
    );
};
export default Diary;
