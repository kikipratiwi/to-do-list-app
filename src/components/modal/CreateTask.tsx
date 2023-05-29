import React, { ReactElement, useState } from 'react';
import {
    Button,
    Divider,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { CreateToDoModal, ToDoList } from '..';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { clearToDo, removeToDo } from '../../store/slices/todo.slice';
import { addTask } from '../../store/slices/task.slice';

type CreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    isOpen,
    onClose,
}: CreateTaskModalProps): ReactElement => {
    const todos = useAppSelector((state) => state.todo.todos);
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState<string>();
    const [description, setDescription] = useState<string>();

    const {
        isOpen: isCreateToDoOpen,
        onOpen: onOpenCreateToDo,
        onClose: onCloseCreateToDo,
    } = useDisclosure();

    const setInputValue = (
        value: string,
        setState: React.Dispatch<React.SetStateAction<any>>,
    ) => {
        setState(value);
    };

    const removeToDoFromTemporaryStorage = (id: number) => {
        dispatch(removeToDo({ id: id }));
    };

    const saveTaskToStorage = () => {
        if (!title) return;

        dispatch(
            addTask({
                id: 0,
                title: title,
                description: description,
                todos: todos,
                totalCompletedTask: 0,
                totalTask: todos.length,
            }),
        );
        closeAndClear();
    };

    const closeAndClear = () => {
        dispatch(clearToDo());
        onClose();
    };

    return (
        <>
            <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                size="xl"
                isCentered
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader></ModalHeader>

                    <ModalBody pb={6}>
                        <VStack alignItems="start">
                            <FormControl isRequired>
                                <FormLabel>Task</FormLabel>

                                <Input
                                    required
                                    borderRadius={12}
                                    placeholder="Task name"
                                    onChange={(e) =>
                                        setInputValue(e.target.value, setTitle)
                                    }
                                    _focus={{
                                        boxShadow: 'none',
                                        borderColor: 'black',
                                    }}
                                />
                            </FormControl>

                            <FormControl>
                                <FormLabel>Description</FormLabel>

                                <Input
                                    borderRadius={12}
                                    placeholder="Description"
                                    onChange={(e) =>
                                        setInputValue(
                                            e.target.value,
                                            setDescription,
                                        )
                                    }
                                    _focus={{
                                        boxShadow: 'none',
                                        borderColor: 'black',
                                    }}
                                />
                            </FormControl>

                            <Button
                                variant="link"
                                size="sm"
                                color="black"
                                pt={1}
                                onClick={onOpenCreateToDo}
                            >
                                + Add to do
                            </Button>

                            <Divider pt={2} />

                            <FormControl pt={2}>
                                <FormLabel>Your To do(s)</FormLabel>

                                <ToDoList
                                    todos={todos}
                                    onChange={(id) =>
                                        removeToDoFromTemporaryStorage(id)
                                    }
                                />
                            </FormControl>
                        </VStack>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            onClick={closeAndClear}
                            borderRadius={12}
                            mr={3}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={saveTaskToStorage}
                            color="white"
                            bg="black"
                            _hover={{ color: 'black', bg: 'gray.300' }}
                            borderRadius={12}
                        >
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <CreateToDoModal
                isOpen={isCreateToDoOpen}
                onClose={onCloseCreateToDo}
            />
        </>
    );
};

export default CreateTaskModal;
