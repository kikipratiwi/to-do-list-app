import React, { ReactElement } from 'react';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Progress,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { UilEllipsisV, UilFileCheckAlt } from '@iconscout/react-unicons';
import { COLORS } from '../../constants';
import { ConfirmationModal } from '..';

export type TaskCardProps = {
    description: string;
    progress: number;
    title: string;
    isOdd?: boolean;
    totalCompletedTask?: number;
    totalTask?: number;
};

const TaskCard: React.FC<TaskCardProps> = ({
    description,
    isOdd,
    progress,
    title,
    totalCompletedTask,
    totalTask,
}: TaskCardProps): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Card
                key={1}
                bgColor={isOdd ? 'black' : 'white'}
                borderRadius={12}
                boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;"
                color={isOdd ? 'white' : 'black'}
                cursor="pointer"
                p={4}
                size="sm"
                variant="elevated"
                w="full"
            >
                <CardHeader pr={0}>
                    <HStack
                        w="full"
                        justifyContent="space-between"
                        alignItems="end"
                    >
                        <Text fontWeight="bold">{title}</Text>

                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label="Options"
                                icon={
                                    <UilEllipsisV
                                        color={isOdd ? 'white' : 'black'}
                                        fontSize={12}
                                    />
                                }
                                rounded="full"
                                variant="solid"
                                bg={isOdd ? 'black' : 'white'}
                                {...(isOdd && {
                                    _hover: { bgColor: 'gray' },
                                    _active: { bgColor: 'gray' },
                                })}
                            />
                            <MenuList w="50px" color="black">
                                <MenuItem>Edit</MenuItem>
                                <MenuItem onClick={onOpen}>Delete</MenuItem>
                            </MenuList>
                        </Menu>
                    </HStack>
                </CardHeader>

                <CardBody pt={0}>
                    <VStack spacing={4} alignItems="start">
                        <Text color={COLORS.gray} fontWeight={500} w="90%">
                            {description}
                        </Text>

                        <HStack>
                            <UilFileCheckAlt color={isOdd ? 'white' : 'gray'} />
                            <Text
                                color={isOdd ? 'white' : 'blackAlpha.600'}
                                fontWeight={500}
                                fontSize="sm"
                            >
                                {totalCompletedTask} task / {totalTask} task
                            </Text>
                        </HStack>

                        <VStack w="full">
                            <HStack w="full" justifyContent="space-between">
                                <Text fontWeight="bold">Progress</Text>
                                <Text fontWeight="bold" color={COLORS.yellow}>
                                    {progress}%
                                </Text>
                            </HStack>

                            <Box w="full">
                                <Progress
                                    size="sm"
                                    borderRadius={12}
                                    colorScheme="yellow"
                                    bgColor="#fde9b3"
                                    value={progress}
                                />
                            </Box>
                        </VStack>
                    </VStack>
                </CardBody>
            </Card>

            <ConfirmationModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default TaskCard;
