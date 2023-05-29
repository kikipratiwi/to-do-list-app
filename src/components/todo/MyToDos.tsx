import React, { ReactElement } from 'react';
import { VStack } from '@chakra-ui/react';

import ToDoCard, { ToDoCardProps } from './ToDoCard';

const MyToDos: React.FC = (): ReactElement => {
    const dummyData: ToDoCardProps[] = [
        {
            id: 1,
            taskTitle: 'Make Hero Section',
            todo: 'Make a hero section on landing page and I love to doing it',
            isChecked: false,
        },
        {
            id: 2,
            taskTitle: 'Make Contact Page',
            todo: 'Make contact page in personal Portfolio',
            isChecked: false,
        },
        {
            id: 3,
            taskTitle: 'Submit resume',
            todo: 'Submit resume of Economic World 2023',
            isChecked: false,
        },
    ];

    return (
        <VStack alignItems="start" spacing="22px" w="full">
            <VStack
                alignItems="start"
                w="full"
                flexGrow={1}
                spacing={5}
                p={3}
                pr={10}
                maxHeight="290px"
                overflowY="scroll"
            >
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
