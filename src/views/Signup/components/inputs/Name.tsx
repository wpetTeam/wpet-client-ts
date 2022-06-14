import { Input } from 'components/modal';
import { onKeyPress } from 'utils';
import { Text } from 'assets/styles/shared/modal.style';

export function NameInput({ user, errMessage, handleChange, handleButton }) {
    return (
        <div className="input__item name">
            <Input
                name="nickName"
                value={user.nickName}
                onChange={handleChange}
                placeholder="닉네임 (1~15자)"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.name !== '' ? true : false}
            />
            <Text>{errMessage.name}</Text>
        </div>
    );
}
