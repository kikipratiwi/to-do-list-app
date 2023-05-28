import React, { ReactElement } from 'react';
import { VStack } from '@chakra-ui/react';

import ToDoCard, { ToDoCardProps } from './ToDoCard';

const MyToDos: React.FC = (): ReactElement => {
    const dummyData: ToDoCardProps[] = [
        {
            taskName: 'Make Hero Section',
            todo: 'Make a hero section on landing page and I love to doing it',
            time: '9.00 AM',
            isComplete: false,
        },
        {
            taskName: 'Make Hero Section',
            todo: 'Make a hero section on landing page and I love to doing it',
            time: '10.00 AM',
            isComplete: false,
        },
        {
            taskName: 'Make Hero Section',
            todo: 'Make a hero section on landing page and I love to doing it',
            time: '11.00 AM',
            isComplete: false,
        },
    ];

    return (
        <VStack alignItems="start" spacing="22px" w="full">
            <VStack alignItems="start" w="full" flexGrow={1} spacing={5}>
                {dummyData?.length > 0 &&
                    dummyData.map(
                        ({ ...task }: ToDoCardProps, index: number) => {
                            return (
                                <ToDoCard
                                    key={'task' + index}
                                    isFirst={index === 0}
                                    {...task}
                                />
                            );
                        },
                    )}
            </VStack>
        </VStack>
    );
};

export default MyToDos;
