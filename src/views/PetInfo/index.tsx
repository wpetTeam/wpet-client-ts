import { Header } from "components/home/Header";
import { Main } from "./layouts/Main";
import "./styles/layouts.style.scss";

const PetInfo = () => {
    return (
        <div className="petInfo-container">
            <Header />
            <Main />
        </div>
    );
};
export default PetInfo;
