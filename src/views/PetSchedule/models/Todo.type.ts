export type upcomingTodo = {
    petID: number;
    name: string;
    todays: todoDetail[];
    tomorrows: todoDetail[];
};

export type todoDetail = {
    todoListID: number;
    petID: number;
    date: string;
    content: string;
    time: number;
    isCheck: number;
    keyword: string;
};

export type selecteUpcomingTodo = {
    todoListID: number;
    petID: number;
    name: string;
    date: string;
    content: string;
    time: number;
    isCheck: number;
    keyword: string;
};
