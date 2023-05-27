import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardBody,
    CardHeader,
    Divider,
    HStack,
    Heading,
    Image,
    Input,
    InputGroup,
    InputLeftElement,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    Progress,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';

import logo from '../assets/icons/logo.png';
import NavBar from '../components/NavBar';
import { UilAngleUp, UilSearch, UilNotes } from '@iconscout/react-unicons';
import { COLORS } from '../constants';

const ThirdQuestionPage: React.FC = (): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <HStack
            textColor={COLORS.gray}
            bgColor="white"
            h="100vh"
            py={10}
            spacing={16}
        >
            <VStack h="full" alignItems="flex-start">
                <Image w={10} ml={12} src={logo} />

                <NavBar />

                <Box pl={12} w="full">
                    <Menu>
                        <MenuButton
                            alignItems="center"
                            as={Button}
                            borderColor="black"
                            borderRadius={10}
                            borderWidth="1px"
                            color="black"
                            fontSize={12}
                            iconSpacing={1}
                            rightIcon={<UilAngleUp />}
                            transition="all 0.2s"
                            variant="outline"
                            width="full"
                            py={5}
                            _hover={{ bg: 'gray.100' }}
                            _expanded={{ bg: 'gray.100' }}
                        >
                            Workspace
                        </MenuButton>
                        <MenuList color={COLORS.gray}>
                            <MenuItem>Your Workspace Name #1</MenuItem>
                            <MenuItem>Your Workspace Name #2</MenuItem>
                            <MenuItem>Your Workspace Name #3</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </VStack>

            <VStack
                alignItems="start"
                flexGrow={1}
                h="full"
                spacing={0}
                w="full"
            >
                <Text fontSize="lg" fontWeight="medium" mb={3}>
                    Hello, Jessica!
                </Text>

                <Box pb="22px">
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="black"
                        lineHeight="normal"
                    >
                        You've got
                    </Text>

                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="black"
                        lineHeight="normal"
                        display="inline-block"
                    >
                        {`${8} task${8 > 1 ? 's' : ''} today`} 🗒️
                    </Text>
                </Box>

                <Box pb="40px" w="full">
                    <Button
                        onClick={onOpen}
                        justifyContent="start"
                        bgColor={COLORS.semigray}
                        color={COLORS.gray}
                        iconSpacing={3}
                        borderRadius={10}
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

                <VStack alignItems="start" spacing="22px" w="full">
                    <Text
                        fontSize="4xl"
                        fontWeight="bold"
                        color="black"
                        lineHeight="normal"
                    >
                        My Tasks
                    </Text>

                    <HStack>
                        <ButtonGroup variant="link" spacing="6">
                            <Button color={COLORS.orange}>Recently</Button>
                            <Button color={COLORS.gray}>Today</Button>
                            <Button color={COLORS.gray}>Upcoming</Button>
                            <Button color={COLORS.gray}>Later</Button>
                        </ButtonGroup>
                    </HStack>

                    {/* <Box flexGrow={1} overscrollY="auto" w="full"> */}
                    <VStack alignItems="start" flexGrow={1} spacing={5}>
                        <Card
                            key={1}
                            size="sm"
                            p={4}
                            borderRadius={10}
                            variant="elevated"
                            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;"
                            cursor="pointer"
                        >
                            <CardHeader pb={1}>
                                <Text fontWeight="bold">Make Hero Section</Text>
                            </CardHeader>
                            <CardBody pt={0}>
                                <Text color={COLORS.gray} fontWeight={500}>
                                    Make a hero section on landing page
                                </Text>

                                <VStack w="full" pt={5}>
                                    <HStack
                                        w="full"
                                        justifyContent="space-between"
                                    >
                                        <Text fontWeight="bold">Progress</Text>
                                        <Text
                                            fontWeight="bold"
                                            color={COLORS.orange}
                                        >
                                            80%
                                        </Text>
                                    </HStack>

                                    <Box w="full">
                                        <Progress
                                            size="sm"
                                            borderRadius={10}
                                            colorScheme="orange"
                                            value={80}
                                            bgColor="#fde9b3"
                                        />
                                    </Box>
                                </VStack>
                            </CardBody>
                        </Card>

                        <Card
                            key={1}
                            size="sm"
                            p={4}
                            borderRadius={10}
                            variant="elevated"
                            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;"
                            cursor="pointer"
                        >
                            <CardHeader pb={1}>
                                <Text fontWeight="bold">Make Hero Section</Text>
                            </CardHeader>
                            <CardBody pt={0}>
                                <Text color={COLORS.gray} fontWeight={500}>
                                    Make a hero section on landing page
                                </Text>

                                <VStack w="full" pt={5}>
                                    <HStack
                                        w="full"
                                        justifyContent="space-between"
                                    >
                                        <Text fontWeight="bold">Progress</Text>
                                        <Text
                                            fontWeight="bold"
                                            color={COLORS.orange}
                                        >
                                            80%
                                        </Text>
                                    </HStack>

                                    <Box w="full">
                                        <Progress
                                            size="sm"
                                            borderRadius={10}
                                            colorScheme="orange"
                                            value={80}
                                            bgColor="#fde9b3"
                                        />
                                    </Box>
                                </VStack>
                            </CardBody>
                        </Card>

                        <Card
                            key={1}
                            size="sm"
                            p={4}
                            borderRadius={10}
                            variant="elevated"
                            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;"
                            cursor="pointer"
                        >
                            <CardHeader pb={1}>
                                <Text fontWeight="bold">Make Hero Section</Text>
                            </CardHeader>
                            <CardBody pt={0}>
                                <Text color={COLORS.gray} fontWeight={500}>
                                    Make a hero section on landing page
                                </Text>

                                <VStack w="full" pt={5}>
                                    <HStack
                                        w="full"
                                        justifyContent="space-between"
                                    >
                                        <Text fontWeight="bold">Progress</Text>
                                        <Text
                                            fontWeight="bold"
                                            color={COLORS.orange}
                                        >
                                            80%
                                        </Text>
                                    </HStack>

                                    <Box w="full">
                                        <Progress
                                            size="sm"
                                            borderRadius={10}
                                            colorScheme="orange"
                                            value={80}
                                            bgColor="#fde9b3"
                                        />
                                    </Box>
                                </VStack>
                            </CardBody>
                        </Card>
                    </VStack>
                    {/* </Box> */}
                </VStack>
            </VStack>

            <VStack w="100%">
                <div>Calendar</div>
            </VStack>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent borderRadius={10}>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                h="full"
                                w="40px"
                            >
                                <UilSearch color="black" size={22} />
                            </InputLeftElement>
                            <Input
                                autoFocus={false}
                                border="none"
                                borderColor="black"
                                borderRadius={10}
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
                                _focus={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                _placeholder={{ color: COLORS.gray }}
                            />
                        </InputGroup>
                        {/* <Divider /> */}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </HStack>
    );
};

export default ThirdQuestionPage;
