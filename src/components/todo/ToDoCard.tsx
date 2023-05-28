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

export type ToDoCardProps = {
    taskName: string;
    time: string;
    todo: string;
    isComplete: boolean;
    isFirst?: boolean;
};

const ToDoCard: React.FC<ToDoCardProps> = ({
    todo,
    taskName,
    time,
    isFirst,
    isComplete,
}: ToDoCardProps): ReactElement => {
    return (
        <HStack h={isFirst ? '170px' : '100px'} spacing={4}>
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
                    boxShadow={
                        isFirst
                            ? 'rgba(17, 17, 26, 0.1) 0px 4px 12px, rgba(17, 17, 26, 0.05) 0px 4px 10px;'
                            : 'none'
                    }
                    bgColor={isFirst ? COLORS.yellow : 'white'}
                    borderRadius={12}
                    color="black"
                    pt={2}
                    pb={isFirst ? 2 : 0}
                    px={4}
                    size="sm"
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
                                <Text>{taskName}</Text>
                            </HStack>

                            <IconButton
                                borderRadius={12}
                                variant="outline"
                                bgColor={isComplete ? COLORS.yellow : 'white'}
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
