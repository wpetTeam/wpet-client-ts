import 'views/PetInfo/styles/components.style.scss';

export const Button = (props: { onClick: () => void; text: string }) => {
    return (
        <button className="petInfo-btn-next" onClick={props.onClick}>
            {props.text}
        </button>
    );
};
