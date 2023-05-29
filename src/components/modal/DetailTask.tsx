import React, { ReactElement } from 'react';
import {
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
} from '@chakra-ui/react';
import { UilFileCheckAlt } from '@iconscout/react-unicons';

import { TaskProgress, ToDoList } from '..';
import { COLORS } from '../../constants';
import { Task, updateTodo } from '../../store/slices/task.slice';
import { useAppDispatch } from '../../store/store';

interface DetailTaskProps extends Task {
    isOpen: boolean;
    onClose: () => void;
    progress: number;
}

const CreateTaskModal: React.FC<DetailTaskProps> = ({
    isOpen,
    onClose,
    ...rest
}: DetailTaskProps): ReactElement => {
    const {
        id,
        title,
        description,
        totalCompletedTask,
        totalTask,
        todos = [],
        progress,
    } = rest;
    const dispatch = useAppDispatch();

    const updateToDoStatus = (todoId: number) => {
        dispatch(updateTodo({ taskId: id, todoId: todoId }));
    };

    return (
        <Modal
            id={'detail-task' + id}
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            size="xl"
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton rounded="full" />

                <ModalBody pb={6}>
                    <VStack alignItems="start" spacing={6}>
                        <VStack alignItems="start">
                            <Text fontWeight="bold">{title}</Text>

                            <Text color={COLORS.gray} fontWeight={500}>
                                {description}
                            </Text>
                        </VStack>

                        <TaskProgress progress={progress} />

                        <VStack alignItems="start" w="full">
                            <HStack>
                                <UilFileCheckAlt color="gray" />
                                <Text
                                    color="blackAlpha.600"
                                    fontWeight={500}
                                    fontSize="sm"
                                >
                                    {totalCompletedTask} task / {totalTask} task
                                </Text>
                            </HStack>

                            <ToDoList
                                todos={todos}
                                onChange={(id) => updateToDoStatus(id)}
                            />
                        </VStack>
                    </VStack>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateTaskModal;
