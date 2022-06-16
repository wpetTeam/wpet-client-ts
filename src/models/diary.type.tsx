export type newDiary = {
    petIDs: Array<number>;
    title: string;
    photo: string;
    texts: string;
    isShare: number;
    petState: string;
    weather: string;
    color: string;
    font: string;
    hashTags: Array<string>;
};

export type Diary = {
    diaryID: number;
    petID: number;
    date: any;
    title: string;
    photo: string;
    color: string;
    font: string;
};
