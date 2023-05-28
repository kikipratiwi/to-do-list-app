import { ReactElement } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    Divider,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { COLORS } from '../constants';

import { UilSearch } from '@iconscout/react-unicons';
import { DetailTaskModal } from '.';

const Search: React.FC = (): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isDetailTaskOpen,
        onOpen: onOpenDetailTask,
        onClose: onCloseDetailTask,
    } = useDisclosure();

    return (
        <>
            <Box pb="40px" w="full">
                <Button
                    onClick={onOpen}
                    justifyContent="start"
                    bgColor={COLORS.semigray}
                    color={COLORS.gray}
                    iconSpacing={3}
                    borderRadius={12}
                    size="sm"
                    w="full"
                    py={6}
                    pl={6}
                    pr={2}
                    leftIcon={<UilSearch color="black" size={18} />}
                    outline={2}
                    outlineColor="transparent"
                    _hover={{
                        bgColor: COLORS.semigray,
                        outline: '2px black solid',
                    }}
                >
                    Search something...
                </Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="xl">
                <ModalOverlay />
                <ModalContent borderRadius={12}>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                h="full"
                                w="40px"
                            >
                                <UilSearch size={22} />
                            </InputLeftElement>
                            <Input
                                autoFocus={false}
                                border="none"
                                borderColor="black"
                                borderRadius={12}
                                bgColor="white"
                                color="black"
                                fontWeight="semibold"
                                height="55px"
                                maxLength={64}
                                onClick={onOpen}
                                pl="50px"
                                placeholder="Search something..."
                                size="lg"
                                type="text"
                                variant="filled"
                                _hover={{}}
                                _focus={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                _placeholder={{ color: COLORS.gray }}
                            />
                        </InputGroup>

                        <VStack w="full" spacing={4} pb={4}>
                            <Divider />

                            <Card
                                onClick={onOpenDetailTask}
                                cursor="pointer"
                                variant="elevated"
                                bg={COLORS.semigray}
                                _hover={{ bg: COLORS.yellow, color: 'black' }}
                                p={2}
                                w="full"
                                size="sm"
                            >
                                <CardBody p={0}>
                                    <VStack
                                        alignItems="start"
                                        spacing={0}
                                        pl={2}
                                    >
                                        <Text fontSize="sm" fontWeight={500}>
                                            Task
                                        </Text>

                                        <Text
                                            fontWeight="semibold"
                                            fontSize="xl"
                                        >
                                            Result #1
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card
                                onClick={onOpenDetailTask}
                                cursor="pointer"
                                variant="elevated"
                                bg={COLORS.semigray}
                                _hover={{ bg: COLORS.yellow, color: 'black' }}
                                p={2}
                                w="full"
                                size="sm"
                            >
                                <CardBody p={0}>
                                    <VStack
                                        alignItems="start"
                                        spacing={0}
                                        pl={2}
                                    >
                                        <Text fontSize="sm" fontWeight={500}>
                                            To Do
                                        </Text>

                                        <Text
                                            fontWeight="semibold"
                                            fontSize="xl"
                                        >
                                            Result #2
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </VStack>
                    </ModalBody>
                </ModalContent>
            </Modal>

            <DetailTaskModal
                isOpen={isDetailTaskOpen}
                onClose={onCloseDetailTask}
            />
        </>
    );
};

export default Search;
