import React, { ReactElement } from 'react';
import {
    Button,
    Checkbox,
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
import { CreateToDoModal } from '..';

type CreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    isOpen,
    onClose,
}: CreateTaskModalProps): ReactElement => {
    const initialRef = React.useRef(null);
    const {
        isOpen: isCreateTodoOpen,
        onOpen: onOpenCreateTodo,
        onClose: onCloseCreateTodo,
    } = useDisclosure();

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
                            <FormControl>
                                <FormLabel>Task</FormLabel>

                                <Input
                                    borderRadius={12}
                                    ref={initialRef}
                                    placeholder="Task name"
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
                                    ref={initialRef}
                                    placeholder="Description"
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
                                onClick={onOpenCreateTodo}
                            >
                                + Add to do
                            </Button>

                            <Divider pt={2} />

                            <FormControl pt={2}>
                                <FormLabel>Your To do(s)</FormLabel>
                                <VStack pl={4} alignItems="start">
                                    <Checkbox
                                        size="sm"
                                        value="naruto"
                                        colorScheme="gray"
                                        defaultChecked
                                    >
                                        Added to do will be here
                                    </Checkbox>
                                </VStack>
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
                        >
                            Add
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <CreateToDoModal
                isOpen={isCreateTodoOpen}
                onClose={onCloseCreateTodo}
            />
        </>
    );
};

export default CreateTaskModal;
