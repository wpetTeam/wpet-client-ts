import { Container, Nav, Article } from "assets/styles/shared/tab.style";
import { Account } from "../services";

export const Main = () => {
    return (
        <Container className="myaccount-main">
            <Nav></Nav>
            <Article style={{ marginLeft: "-0.5%" }}>
                <Account />
            </Article>
        </Container>
    );
};
