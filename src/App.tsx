import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import FirstQuestion from './pages/FirstQuestion';

const App: React.FC = () => {
    return (
        <Box
            height="100vh"
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
        >
            <FirstQuestion />
            {/* <Button>#1 Question: Display Table</Button>
            <Button>#2 Question: React Context Pattern</Button>
            <Button>#3 Question: To-do List App</Button> */}
        </Box>
    );
};

export default App;
