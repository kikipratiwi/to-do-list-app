import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { ToDoSlice } from './slices/todo.slice';
import { TaskSlice } from './slices/task.slice';

export const store = configureStore({
    reducer: { todo: ToDoSlice.reducer, task: TaskSlice.reducer },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
