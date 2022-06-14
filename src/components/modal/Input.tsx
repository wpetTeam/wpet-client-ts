import './Input.style.scss';

export const Input = (props) => {
    return (
        <>
            {props.password ? (
                <div className="input-container-modal pw">
                    <input
                        type="password"
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        placeholder={props.placeholder}
                        onKeyPress={props.onKeyPress}
                        className={props.isError ? 'error-input' : ''}
                    />
                    <label htmlFor={props.name}>{props.placeholder}</label>
                </div>
            ) : (
                <div className="input-container-modal">
                    <input
                        name={props.name}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        placeholder={props.placeholder}
                        onKeyPress={props.onKeyPress}
                        className={props.isError ? 'error-input' : ''}
                    />
                    <label htmlFor={props.name}>{props.placeholder}</label>
                </div>
            )}
        </>
    );
};
