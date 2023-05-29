import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { ToDoSlice } from './slices/todo.slice';
import { TaskSlice } from './slices/task.slice';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    todo: ToDoSlice.reducer,
    task: TaskSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
    ReturnType<typeof store.getState>
> = useSelector;
