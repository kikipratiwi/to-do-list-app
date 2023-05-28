import React, { ReactElement } from 'react';
import { Box, HStack, Progress, Text, VStack } from '@chakra-ui/react';
import { COLORS } from '../../constants';

type TaskProgressProps = {
    progress: number;
};

const TaskProgress: React.FC<TaskProgressProps> = ({
    progress,
}: TaskProgressProps): ReactElement => {
    return (
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
    );
};

export default TaskProgress;
