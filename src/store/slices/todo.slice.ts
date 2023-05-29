import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ToDo {
    id?: number;
    todo: string;
    date?: string;
    isChecked?: boolean;
}

interface ToDoState {
    todos: ToDo[];
}

const initialState: ToDoState = {
    todos: [],
};

export const ToDoSlice = createSlice({
    name: 'to-do',
    initialState,
    reducers: {
        addToDo: (state, action: PayloadAction<ToDo>) => {
            state.todos.push({
                id: state.todos.length,
                ...action.payload,
            });
        },
        removeToDo: (state, action: PayloadAction<ToDo>) => {
            const newToDo = state.todos.filter(
                (todo) => todo.id !== action.payload.id,
            );

            state.todos = newToDo;
        },
        clearToDo: (state) => {
            state.todos = [];
        },
    },
});

export default ToDoSlice.reducer;
export const { addToDo, removeToDo, clearToDo } = ToDoSlice.actions;
