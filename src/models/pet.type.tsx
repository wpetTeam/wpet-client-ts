export type petID = {
    petID: number;
    name: string;
    photo?: string;
};

export type newPet = {
    name: string;
    birthDate: string;
    gender: string;
    photo: string;
    breeds: Array<string>;
};

export type Pet = {
    petID: number;
    name: string;
    birthDate: string;
    gender: string;
    photo: string;
    breeds: Array<string>;
    level: 1;
    weight: null;
};
