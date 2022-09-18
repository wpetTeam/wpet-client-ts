export type PillInfo = {
    petID: number;
    medicine: string;
    memo: string;
    cycleDay: number;
};

export type PillTest = {
    petID: number;
    medicine: string;
    memo: string;
    cycleDay: string;
};

export type Pill = {
    medicineDiaryID: number;
    petID: number;
    medicine: string;
    memo: string;
    cycleDay: number;
};
