import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToDo } from './todo.slice';

export interface Task {
    id?: number;
    title: string;
    description?: string;
    todos?: ToDo[];
    totalCompletedTask: number;
    totalTask: number;
}

interface TaskState {
    tasks: Task[];
}

const initialState: TaskState = {
    tasks: [],
};

export const TaskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push({
                id: state.tasks.length,
                ...action.payload,
            });
        },
        updateCompletedTask: (state, action: PayloadAction<Task>) => {
            const newTask = {
                ...action.payload,
                totalCompletedTask: action.payload.totalCompletedTask + 1,
            };
        },
        removeTask: (state, action: PayloadAction<Task>) => {
            const newTask = state.tasks.filter(
                (Task) => Task.id !== action.payload.id,
            );

            state.tasks = newTask;
        },
    },
});

export default TaskSlice.reducer;
export const { addTask, removeTask } = TaskSlice.actions;
