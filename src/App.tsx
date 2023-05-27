import React, { ReactElement } from 'react';
import { Box, Button, Center, Stack } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';

import './styles/globals.css';

const App: React.FC = (): ReactElement => {
    const navigate = useNavigate();

    const navigation = [
        {
            path: '/first-question',
            label: '#1 Question: Display Table',
        },
        {
            path: '/second-question',
            label: '#2 Question: React Context Pattern',
        },
        {
            path: '/third-question',
            label: '#3 Question: To-do List App',
        },
    ];

    return (
        <Center w="100vw" h="100vh" flexDirection="column" gap={10}>
            <Stack direction={['column', null, 'row']}>
                {navigation.map(({ path, label }, index) => (
                    <Button
                        key={index + 'button-navigation'}
                        onClick={() => {
                            navigate(path);
                        }}
                    >
                        {label}
                    </Button>
                ))}
            </Stack>

            <Box>
                <Outlet />
            </Box>
        </Center>
    );
};

export default App;
