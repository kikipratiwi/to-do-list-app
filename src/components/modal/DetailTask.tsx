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

import { TaskProgress, ToDoCheckItem } from '..';
import { COLORS } from '../../constants';

type CreateTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const CreateTaskModal: React.FC<CreateTaskModalProps> = ({
    isOpen,
    onClose,
}: CreateTaskModalProps): ReactElement => {
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
                <ModalCloseButton rounded="full" />

                <ModalBody pb={6}>
                    <VStack alignItems="start" spacing={6}>
                        <VStack alignItems="start">
                            <Text fontWeight="bold">Task Name</Text>

                            <Text color={COLORS.gray} fontWeight={500}>
                                description task
                            </Text>
                        </VStack>

                        <TaskProgress progress={80} />

                        <VStack alignItems="start" w="full">
                            <HStack>
                                <UilFileCheckAlt color="gray" />
                                <Text
                                    color="blackAlpha.600"
                                    fontWeight={500}
                                    fontSize="sm"
                                >
                                    3 task / 5 task
                                </Text>
                            </HStack>

                            <VStack alignItems="start" w="full">
                                <ToDoCheckItem
                                    label="Added to do item willl be appear here"
                                    date={new Date()}
                                />
                                <ToDoCheckItem
                                    label="Added to do item willl be appear here"
                                    date={new Date()}
                                />
                                <ToDoCheckItem
                                    label="Added to do item willl be appear here"
                                    date={new Date()}
                                />
                            </VStack>
                        </VStack>
                    </VStack>
                </ModalBody>

                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default CreateTaskModal;
