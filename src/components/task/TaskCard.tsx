import React, { ReactElement } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
    useDisclosure,
} from '@chakra-ui/react';
import { UilEllipsisV, UilFileCheckAlt } from '@iconscout/react-unicons';
import { COLORS } from '../../constants';
import { ConfirmationModal, DetailTaskModal, TaskProgress } from '..';
import { Task } from '../../store/slices/task.slice';

export interface TaskCardProps extends Task {
    isOdd?: boolean;
    progress: number;
}

const TaskCard: React.FC<TaskCardProps> = ({
    id,
    description,
    isOdd,
    title,
    totalCompletedTask,
    totalTask,
    progress,
}: TaskCardProps): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {
        isOpen: isDetailTaskOpen,
        onOpen: onOpenDetailTask,
        onClose: onCloseDetailTask,
    } = useDisclosure();

    return (
        <>
            <Card
                key={id}
                bgColor={isOdd ? 'black' : 'white'}
                borderRadius={12}
                boxShadow="rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;"
                color={isOdd ? 'white' : 'black'}
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

                <CardBody pt={0} onClick={onOpenDetailTask} cursor="pointer">
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

                        <TaskProgress progress={progress} />
                    </VStack>
                </CardBody>
            </Card>

            <ConfirmationModal isOpen={isOpen} onClose={onClose} />

            <DetailTaskModal
                isOpen={isDetailTaskOpen}
                onClose={onCloseDetailTask}
            />
        </>
    );
};

export default TaskCard;
