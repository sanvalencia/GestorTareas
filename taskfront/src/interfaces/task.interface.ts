
export interface Task {
    _id: string;
    title: string;
    description : string;
    done: boolean;
}

export type CreateTask = Omit<Task, '_id'>