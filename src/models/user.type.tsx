// get [GET] User type
export type UserData = {
    email: string;
    joinDate: any;
    photo: string;
    nickName: string;
    location: string;
};

// create [POST] User type
export type newUser = {
    email: string;
    nickName: string;
    pw: string;
    photo: string;
    location: string;
};

// login [POST] User type
export type User = {
    email: string;
    pw: string;
};
