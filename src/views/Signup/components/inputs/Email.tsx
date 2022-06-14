import { Input } from 'components/modal';
import { onKeyPress } from 'utils';
import { Text } from 'assets/styles/shared/modal.style';

export function EmailInput({ user, errMessage, handleChange, handleButton }) {
    return (
        <div className="input__item email">
            <Input
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="이메일"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.email !== '' ? true : false}
            />
            <Text>{errMessage.email}</Text>
        </div>
    );
}
