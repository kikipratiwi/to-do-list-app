import React, { ReactElement } from 'react';
import { Datatable } from '../components';
import { Center, VStack } from '@chakra-ui/react';

type Passenger = {
    id: string;
    name: string;
    age: number;
};

const FirstQuestionPage: React.FC = (): ReactElement => {
    const column = [
        {
            key: 'id',
            header: 'ID',
            cell: (data: Passenger) => data.id,
        },
        {
            key: 'name',
            header: 'Name',
        },
        {
            key: 'age',
            header: 'Age',
        },
    ];

    const passengers: Passenger[] = [
        {
            id: 'KJSD93',
            name: 'Maria Anders',
            age: 20,
        },
        {
            id: 'KJSD94',
            name: 'Francisco Chang',
            age: 35,
        },
        {
            id: 'KJSD95',
            name: 'Anna Angelo',
            age: 28,
        },
    ];

    return (
        <Center>
            <VStack w="60vw">
                <Datatable<Passenger> columns={column} data={passengers} />;
            </VStack>
        </Center>
    );
};

export default FirstQuestionPage;
