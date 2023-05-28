import React, { ReactElement } from 'react';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    HStack,
    IconButton,
    Progress,
    Text,
    VStack,
} from '@chakra-ui/react';
import { UilEllipsisV } from '@iconscout/react-unicons';
import { COLORS } from '../../constants';

export type TaskCardProps = {
    description: string;
    progress: number;
    title: string;
    isOdd?: boolean;
    totalCompletedTask?: number;
    totalTask?: number;
};

const TaskCard: React.FC<TaskCardProps> = ({
    title,
    description,
    progress,
    isOdd,
}: TaskCardProps): ReactElement => {
    return (
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

                    <IconButton
                        variant="ghost"
                        rounded="full"
                        aria-label="Three Dot"
                        size="sm"
                        icon={<UilEllipsisV fontSize={12} />}
                        {...(isOdd && { _hover: { bgColor: 'gray' } })}
                    />
                </HStack>
            </CardHeader>

            <CardBody pt={0}>
                <Text color={COLORS.gray} fontWeight={500} w="90%">
                    {description}
                </Text>

                <VStack w="full" pt={5}>
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
            </CardBody>
        </Card>
    );
};

export default TaskCard;
