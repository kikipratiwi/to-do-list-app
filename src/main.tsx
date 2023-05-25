import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import FirstQuestion from './pages/FirstQuestion.tsx';
import SecondQuestionPage from './pages/SecondQuestion.tsx';
import ThirdQuestionPage from './pages/ThirdQuestion.tsx';

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
            <RouterProvider router={router} />
        </ChakraProvider>
    </React.StrictMode>,
);
