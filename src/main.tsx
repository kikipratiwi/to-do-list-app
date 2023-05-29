import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App.tsx';
import FirstQuestion from './pages/FirstQuestion.tsx';
import SecondQuestionPage from './pages/SecondQuestion.tsx';
import ThirdQuestionPage from './pages/ThirdQuestion.tsx';

import { persistor, store } from './store/store.ts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/first-question',
                element: <FirstQuestion />,
            },
            {
                path: '/second-question',
                element: <SecondQuestionPage />,
            },
        ],
    },
    {
        path: '/third-question',
        element: <ThirdQuestionPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ChakraProvider>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={router} />
                </PersistGate>
            </Provider>
        </ChakraProvider>
    </React.StrictMode>,
);
