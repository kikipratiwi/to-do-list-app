import React, { ReactElement, useState } from 'react';
import {
    Button,
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
} from '@chakra-ui/react';
import { useAppDispatch } from '../../store/store';
import { addToDo } from '../../store/slices/todo.slice';

type CreateToDoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateToDoModal: React.FC<CreateToDoModalProps> = ({
    isOpen,
    onClose,
}: CreateToDoModalProps): ReactElement => {
    const [todo, setToDo] = useState<string>();
    const [dateTime, setDateTime] = useState<string | null>(null);

    const dispatch = useAppDispatch();

    const setInputValue = (
        value: string,
        setState: React.Dispatch<React.SetStateAction<any>>,
    ) => {
        setState(value);
    };

    const saveToTemporaryStorage = () => {
        if (!todo) return;
        dispatch(
            addToDo({ id: 0, todo: todo, date: dateTime, isChecked: false }),
        );
        onClose();
    };

    return (
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
                            <FormLabel>To Do</FormLabel>
                            <Input
                                required
                                borderRadius={12}
                                mr={2}
                                placeholder="Your action item"
                                onChange={(e) =>
                                    setInputValue(e.target.value, setToDo)
                                }
                                _focus={{
                                    boxShadow: 'none',
                                    borderColor: 'black',
                                }}
                            />
                        </FormControl>

                        <FormControl>
                            <FormLabel>Date</FormLabel>

                            <Input
                                borderRadius={12}
                                placeholder="Task name"
                                type="datetime-local"
                                onChange={(e) =>
                                    setInputValue(e.target.value, setDateTime)
                                }
                                _focus={{
                                    boxShadow: 'none',
                                    borderColor: 'black',
                                }}
                            />
                        </FormControl>
                    </VStack>
                </ModalBody>

                <ModalFooter>
                    <Button borderRadius={12} onClick={onClose} mr={3}>
                        Cancel
                    </Button>
                    <Button
                        color="white"
                        bg="black"
                        _hover={{ color: 'black', bg: 'gray.300' }}
                        borderRadius={12}
                        onClick={saveToTemporaryStorage}
                    >
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateToDoModal;
