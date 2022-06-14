import { Input } from 'components/modal';
import { Icon } from '@iconify/react';
import { onKeyPress } from 'utils';
import { Text } from 'assets/styles/shared/modal.style';

export function PwInput({
    user,
    pwErrorCheck,
    errMessage,
    handleChange,
    handleButton,
}) {
    return (
        <div className="input__item pw">
            <Input
                password
                name="pw"
                value={user.pw}
                onChange={handleChange}
                placeholder="비밀번호 (알파벳,숫자,특수문자를 포함한 8~13자)"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
                isError={errMessage.pw !== '' ? true : false}
            />
            {user.pw.length !== 0 && (
                <div className="check-list row">
                    <div
                        className={
                            pwErrorCheck.number
                                ? 'check__item checked'
                                : 'check__item'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">숫자</p>
                    </div>
                    <div
                        className={
                            pwErrorCheck.symbol
                                ? 'check__item checked'
                                : 'check__item'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">특수문자</p>
                    </div>
                    <div
                        className={
                            pwErrorCheck.length
                                ? 'check__item checked'
                                : 'check__item'
                        }
                    >
                        <Icon icon="bi:check-all" />
                        <p className="text">길이</p>
                    </div>
                </div>
            )}
        </div>
    );
}
export function PwConfirmationInput({ user, handleChange, handleButton }) {
    return (
        <div className="input__item pw-confirm">
            <Input
                password
                name="pwConfirm"
                value={user.pwConfirm}
                onChange={handleChange}
                placeholder="비밀번호 확인"
                onKeyPress={(e) => onKeyPress(e, handleButton)}
            />
            {user.pwConfirm !== '' && user.pw !== user.pwConfirm && (
                <Text>비밀번호가 일치하지 않습니다.</Text>
            )}
        </div>
    );
}
