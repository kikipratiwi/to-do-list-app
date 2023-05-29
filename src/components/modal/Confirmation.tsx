import React, { ReactElement } from 'react';
import {
    Button,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';

type ConfirmationModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onAction: () => void;
};

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onAction,
}: ConfirmationModalProps): ReactElement => {
    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Are you sure to delete this task?</ModalHeader>
                <ModalCloseButton rounded="full" />

                <ModalFooter>
                    <Button
                        mr={3}
                        color="white"
                        bg="black"
                        _hover={{ color: 'black', bg: 'gray.300' }}
                        borderRadius={12}
                        onClick={() => {
                            onAction();
                            onClose();
                        }}
                    >
                        Yes
                    </Button>
                    <Button borderRadius={12} onClick={onClose}>
                        Cancel
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default ConfirmationModal;
