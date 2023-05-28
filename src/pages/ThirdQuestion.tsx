import React, { ReactElement } from 'react';
import {
    Box,
    Button,
    HStack,
    IconButton,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { UilStopwatch, UilPlus } from '@iconscout/react-unicons';
import moment from 'moment';

import {
    CreateTaskModal,
    HeadingText,
    MyTasks,
    MyToDos,
    Search,
    SideBar,
    ThisWeek,
    TopBar,
} from '../components';
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
            <SideBar />

            <VStack w="full" h="full" alignItems="start" pr={12}>
                <HStack alignItems="start" spacing={16} w="full">
                    <VStack alignItems="start" w="55%" spacing={0}>
                        <Text fontSize="lg" fontWeight="medium" mb={3}>
                            Hello, Jessica!
                        </Text>

                        <Box pb="22px">
                            <HeadingText>You've got</HeadingText>
                            <HeadingText>
                                {`${8} task${8 > 1 ? 's' : ''} today`} 🗒️
                            </HeadingText>
                        </Box>

                        <Search />
                    </VStack>

                    <VStack alignItems="start" w="45%" spacing={12}>
                        <TopBar />

                        <Box
                            p={6}
                            borderRadius={12}
                            boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;"
                            w="full"
                        >
                            <HStack w="full" justifyContent="space-between">
                                <Box>
                                    <Text fontWeight="bold" color="black">
                                        Task time tracker
                                    </Text>
                                    <Text color={COLORS.gray} fontWeight={500}>
                                        You can start tarcking your task here
                                    </Text>
                                </Box>

                                <IconButton
                                    borderRadius={12}
                                    variant="solid"
                                    bgColor={COLORS.yellow}
                                    aria-label="Stopwatch"
                                    icon={<UilStopwatch color="black" />}
                                />
                            </HStack>
                        </Box>
                    </VStack>
                </HStack>

                <HStack alignItems="start" w="full" flexGrow={1} spacing={16}>
                    <Box w="55%">
                        <MyTasks />
                    </Box>

                    <VStack w="45%" alignItems="start" spacing={6}>
                        <HStack w="full" justifyContent="space-between">
                            <Box>
                                <Text
                                    color={COLORS.gray}
                                    fontWeight={500}
                                    fontSize="2xl"
                                >
                                    {moment().format('LL')}
                                </Text>
                                <HeadingText>Today</HeadingText>
                            </Box>

                            <Button
                                leftIcon={<UilPlus color="white" />}
                                bgColor="black"
                                variant="solid"
                                color="white"
                                borderRadius={12}
                                fontSize={14}
                                p={8}
                                onClick={onOpen}
                                _hover={{
                                    bgColor: COLORS.gray,
                                }}
                            >
                                Add task
                            </Button>
                        </HStack>

                        <ThisWeek />

                        <MyToDos />
                    </VStack>
                </HStack>
            </VStack>

            <CreateTaskModal isOpen={isOpen} onClose={onClose} />
        </HStack>
    );
};

export default ThirdQuestionPage;
