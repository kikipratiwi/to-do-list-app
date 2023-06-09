import React, { ReactElement } from 'react';
import { Button, ButtonGroup, HStack, Text, VStack } from '@chakra-ui/react';

import { COLORS } from '../../constants';
import { HeadingText, TaskCard } from '..';
import { useAppSelector } from '../../store/store';

const MyTasks: React.FC = (): ReactElement => {
    const tasks = useAppSelector((state) => state.task.tasks);

    return (
        <VStack alignItems="start" spacing="22px" w="full">
            <HeadingText>My Tasks</HeadingText>

            <HStack>
                <ButtonGroup variant="link" spacing="6">
                    <Button color={COLORS.gray}>Completed</Button>
                    <Button color={COLORS.yellow}>On-going</Button>
                    <Button color={COLORS.gray}>Archived</Button>
                </ButtonGroup>
            </HStack>

            {tasks?.length > 0 ? (
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
                    {tasks.map(
                        (
                            { totalCompletedTask, totalTask, ...rest },
                            index: number,
                        ) => {
                            const progress = totalCompletedTask
                                ? Number(
                                      (
                                          (totalCompletedTask / totalTask) *
                                          100
                                      ).toFixed(0),
                                  )
                                : 0;
                            return (
                                <TaskCard
                                    key={'task' + index}
                                    isOdd={(index + 1) % 2 === 0}
                                    progress={progress}
                                    totalCompletedTask={totalCompletedTask}
                                    totalTask={totalTask}
                                    {...rest}
                                />
                            );
                        },
                    )}
                </VStack>
            ) : (
                <Text fontSize="sm" fontStyle="italic" color={COLORS.gray}>
                    Your don't have any tasks
                </Text>
            )}
        </VStack>
    );
};

export default MyTasks;
