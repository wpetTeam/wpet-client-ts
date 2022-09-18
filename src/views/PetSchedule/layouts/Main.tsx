import { Container, Nav, Article } from "assets/styles/shared/tab.style";
import { Schedule } from "../services";

export const Main = () => {
    return (
        <Container className="petschedule-main">
            <Nav></Nav>
            <Article style={{ marginLeft: "-0.5%" }}>
                <Schedule />
            </Article>
        </Container>
    );
};
