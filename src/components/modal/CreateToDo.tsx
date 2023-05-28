import React, { ReactElement } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    VStack,
} from '@chakra-ui/react';

type CreateToDoModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateToDoModal: React.FC<CreateToDoModalProps> = ({
    isOpen,
    onClose,
}: CreateToDoModalProps): ReactElement => {
    const initialRef = React.useRef(null);

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
                        <FormControl>
                            <FormLabel>To Do</FormLabel>
                            <Input
                                borderRadius={12}
                                mr={2}
                                placeholder="Your action item"
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
                                ref={initialRef}
                                placeholder="Task name"
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
                    >
                        Add
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateToDoModal;
