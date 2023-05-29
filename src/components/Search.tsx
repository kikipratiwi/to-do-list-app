import { ReactElement, useEffect, useState } from 'react';
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
import { useAppSelector } from '../store/store';
import { Task } from '../store/slices/task.slice';

const Search: React.FC = (): ReactElement => {
    const tasks = useAppSelector((state) => state.task.tasks);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isDetailTaskOpen,
        onOpen: onOpenDetailTask,
        onClose: onCloseDetailTask,
    } = useDisclosure();

    const [searchText, setSearchText] = useState<string>('');
    const [selectedTask, setSelectedTask] = useState<Task>({
        id: 0,
        title: '',
        description: '',
        todos: [],
        totalCompletedTask: 0,
        totalTask: 0,
    });

    const regexp = new RegExp(searchText, 'i');

    const filteredTask = searchText
        ? tasks.filter((task) => task.title.match(regexp))
        : [];

    useEffect(() => {
        onOpenDetailTask();
    }, [selectedTask]);

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
                                value={searchText}
                                _placeholder={{ color: COLORS.gray }}
                                _hover={{}}
                                _focus={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>,
                                ) => setSearchText(e.target.value)}
                            />
                        </InputGroup>

                        {filteredTask.length > 0 && (
                            <VStack w="full" spacing={4} pb={4}>
                                <Divider />

                                {filteredTask.map((task, index) => {
                                    return (
                                        <Card
                                            key={'task-result' + index}
                                            onClick={() =>
                                                setSelectedTask(task)
                                            }
                                            cursor="pointer"
                                            variant="elevated"
                                            bg={COLORS.semigray}
                                            _hover={{
                                                bg: COLORS.yellow,
                                                color: 'black',
                                            }}
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
                                                    <Text
                                                        fontSize="sm"
                                                        fontWeight={500}
                                                    >
                                                        #task
                                                    </Text>

                                                    <Text
                                                        fontWeight="semibold"
                                                        fontSize="xl"
                                                    >
                                                        {task.title}
                                                    </Text>
                                                </VStack>
                                            </CardBody>
                                        </Card>
                                    );
                                })}
                            </VStack>
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>

            <DetailTaskModal
                isOpen={isDetailTaskOpen}
                onClose={onCloseDetailTask}
                {...selectedTask}
            />
        </>
    );
};

export default Search;
