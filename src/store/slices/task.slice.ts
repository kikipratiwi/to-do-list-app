import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ToDo } from './todo.slice';

export interface Task {
    id: number;
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
                ...action.payload,
                id: state.tasks.length,
            });
        },
        updateTodo: (
            state,
            action: PayloadAction<{ taskId: number; todoId: number }>,
        ) => {
            const newTasks = JSON.parse(JSON.stringify(state.tasks));
            const currentTask = newTasks.find(
                (task: Task) => task.id === action.payload.taskId,
            );
            const selectedTodo = currentTask.todos.find(
                (todo: ToDo) => todo.id === action.payload.todoId,
            );

            selectedTodo.isChecked = !selectedTodo.isChecked;
            currentTask.totalCompletedTask += selectedTodo.isChecked ? 1 : -1;

            state.tasks = newTasks;
        },
        removeTask: (state, action: PayloadAction<{ id: number }>) => {
            const newTask = state.tasks.filter(
                (task) => task.id !== action.payload.id,
            );

            state.tasks = newTask;
        },
    },
});

export default TaskSlice.reducer;
export const { addTask, removeTask, updateTodo } = TaskSlice.actions;
