import { Dispatch, SetStateAction } from 'react';

export const Content = (props: {
    content: string;
    setContent: Dispatch<SetStateAction<string>>;
}) => {
    const handleWriting = (e: any) => {
        props.setContent(e.target.value);
    };

    return (
        <textarea
            className="textarea-content"
            value={props.content}
            maxLength={400}
            placeholder="오늘 하루는 어땠는지 400자 이내로 표현해주세요! "
            onChange={handleWriting}
        />
    );
};
