import React, { ReactElement } from 'react';
import { Card, Checkbox, Text, VStack } from '@chakra-ui/react';
import moment from 'moment';

import { ToDo } from '../../store/slices/todo.slice';
import { COLORS } from '../../constants';

interface ToDoListProps {
    todos: ToDo[];
    onChange: (id: number) => void;
}

const ToDoList: React.FC<ToDoListProps> = ({
    todos,
    onChange,
}: ToDoListProps): ReactElement => {
    return (
        <>
            {todos.length > 0 ? (
                <VStack alignItems="start" w="full">
                    {todos.map(({ id, todo, date, isChecked }) => {
                        return (
                            <Card key={id} variant="outline" p={2} w="full">
                                <Checkbox
                                    size="lg"
                                    value="naruto"
                                    colorScheme="gray"
                                    onChange={() => onChange(id)}
                                    isChecked={isChecked}
                                >
                                    <VStack
                                        alignItems="start"
                                        spacing={0}
                                        pl={2}
                                    >
                                        <Text
                                            fontWeight="semibold"
                                            fontSize="sm"
                                        >
                                            {todo}
                                        </Text>

                                        <Text fontSize="xs">
                                            {typeof date === 'string'
                                                ? date
                                                : moment(date).format('LLL')}
                                        </Text>
                                    </VStack>
                                </Checkbox>
                            </Card>
                        );
                    })}
                </VStack>
            ) : (
                <Text fontSize="sm" fontStyle="italic" color={COLORS.gray}>
                    Your todo is empty
                </Text>
            )}
        </>
    );
};

export default ToDoList;
