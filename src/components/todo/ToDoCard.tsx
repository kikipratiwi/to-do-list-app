import React, { ReactElement } from 'react';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    HStack,
    IconButton,
    Text,
    VStack,
} from '@chakra-ui/react';
import { UilCheck } from '@iconscout/react-unicons';

import { COLORS } from '../../constants';
import { ToDo } from '../../store/slices/todo.slice';
import moment from 'moment';

export interface ToDoCardProps extends ToDo {
    taskTitle: string;
    isFirst?: boolean;
}

const ToDoCard: React.FC<ToDoCardProps> = ({
    todo,
    taskTitle,
    date,
    isChecked,
    isFirst,
}: ToDoCardProps): ReactElement => {
    const time = moment(date).format('LT');

    return (
        <HStack h={isFirst ? '170px' : '125px'} spacing={4}>
            <VStack h="full">
                <Box
                    w="13px"
                    h="13px"
                    rounded="full"
                    bgColor={isFirst ? COLORS.yellow : 'white'}
                    {...(!isFirst && {
                        borderWidth: 2,
                        borderColor: COLORS.yellow,
                        borderStyle: 'solid',
                    })}
                />

                <Box
                    width="3px"
                    h="full"
                    bgColor={COLORS.yellow}
                    rounded="full"
                />
            </VStack>

            <Box pt={2}>
                <Card
                    key={1}
                    bgColor={isFirst ? COLORS.yellow : 'transparent'}
                    borderRadius={12}
                    boxShadow={
                        isFirst
                            ? 'rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;'
                            : 'none'
                    }
                    color="black"
                    pb={isFirst ? 2 : 0}
                    pt={2}
                    px={4}
                    size="sm"
                    variant="filled"
                    w="full"
                >
                    <CardHeader pb={0}>
                        <HStack
                            w="full"
                            alignItems="start"
                            justifyContent="space-between"
                            spacing={3}
                        >
                            <Text fontWeight="bold" flexGrow={1}>
                                {todo}
                            </Text>

                            <Text
                                color={isFirst ? 'black' : COLORS.gray}
                                fontWeight="semibold"
                                minWidth="fit-content"
                            >
                                {time}
                            </Text>
                        </HStack>
                    </CardHeader>

                    <CardBody pt={0}>
                        <HStack
                            w="full"
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <HStack
                                color={isFirst ? 'blackAlpha.700' : COLORS.gray}
                                fontSize="sm"
                                fontWeight={500}
                            >
                                <Text fontStyle="italic">in task</Text>
                                <Text>{taskTitle}</Text>
                            </HStack>

                            <IconButton
                                borderRadius={12}
                                variant="outline"
                                bgColor={isChecked ? COLORS.yellow : 'white'}
                                aria-label="Check"
                                outline={12}
                                icon={<UilCheck />}
                                _hover={{}}
                            />
                        </HStack>
                    </CardBody>
                </Card>
            </Box>
        </HStack>
    );
};

export default ToDoCard;
