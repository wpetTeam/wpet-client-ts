import { MdColorLens as ColorPicker } from 'react-icons/md';
import { BsFonts as FontPicker } from 'react-icons/bs';
import { HexColorPicker } from 'react-colorful';
import { Dispatch, SetStateAction } from 'react';

export const CustomNav = (props: {
    color: string;
    setColor: Dispatch<SetStateAction<string>>;
    selectColor: boolean;
    setSelectColor: Dispatch<SetStateAction<boolean>>;
}) => {
    return (
        <div className="custom-nav-container">
            <button onClick={() => props.setSelectColor(!props.selectColor)}>
                <ColorPicker size={23} />
            </button>
            <button>
                <FontPicker size={23} />
            </button>
            {props.selectColor && (
                <HexColorPicker
                    className="color-picker"
                    color={props.color}
                    onChange={props.setColor}
                />
            )}
        </div>
    );
};
