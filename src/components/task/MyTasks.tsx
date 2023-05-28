import React, { ReactElement } from 'react';
import { Button, ButtonGroup, HStack, VStack } from '@chakra-ui/react';

import { COLORS } from '../../constants';
import { HeadingText, TaskCard } from '..';
import { TaskCardProps } from './TaskCard';

const MyTasks: React.FC = (): ReactElement => {
    const dummyData: TaskCardProps[] = [
        {
            title: 'Make Hero Section',
            description:
                'Make a hero section on landing page and I love to doing it',
            progress: 90,
            totalTask: 5,
            totalCompletedTask: 4,
        },
        {
            title: 'Make Contact Page',
            description: 'Make a contact page on portfolio website',
            progress: 67,
            totalTask: 5,
            totalCompletedTask: 4,
        },
        {
            title: 'Make Hero Section',
            description:
                'Make a hero section on landing page and I love to doing it',
            progress: 100,
            totalTask: 5,
            totalCompletedTask: 5,
        },
    ];

    return (
        <VStack alignItems="start" spacing="22px" w="full">
            <HeadingText>My Tasks</HeadingText>

            <HStack>
                <ButtonGroup variant="link" spacing="6">
                    <Button color={COLORS.yellow}>Missed</Button>
                    <Button color={COLORS.gray}>Today</Button>
                    <Button color={COLORS.gray}>Upcoming</Button>
                    <Button color={COLORS.gray}>Later</Button>
                </ButtonGroup>
            </HStack>

            <VStack
                alignItems="start"
                w="full"
                flex={1}
                spacing={5}
                p={3}
                pr={10}
                maxHeight="358px"
                overflowY="auto"
            >
                {dummyData?.length > 0 &&
                    dummyData.map(
                        ({ ...task }: TaskCardProps, index: number) => {
                            return (
                                <TaskCard
                                    key={'task' + index}
                                    isOdd={(index + 1) % 2 === 0}
                                    {...task}
                                />
                            );
                        },
                    )}
            </VStack>
        </VStack>
    );
};

export default MyTasks;
