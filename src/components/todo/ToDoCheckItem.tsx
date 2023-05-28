import React, { ReactElement } from 'react';
import { Card, Checkbox, Text, VStack } from '@chakra-ui/react';
import moment from 'moment';

type ToDoCheckItem = {
    label: string;
    date?: Date;
};

const ToDoCheckItem: React.FC<ToDoCheckItem> = ({
    label,
    date,
}: ToDoCheckItem): ReactElement => {
    return (
        <Card variant="outline" p={2} w="full">
            <Checkbox
                size="lg"
                value="naruto"
                colorScheme="gray"
                defaultChecked
            >
                <VStack alignItems="start" spacing={0} pl={2}>
                    <Text fontWeight="semibold" fontSize="sm">
                        {label}
                    </Text>

                    <Text fontSize="xs">{moment(date).format('LLL')}</Text>
                </VStack>
            </Checkbox>
        </Card>
    );
};

export default ToDoCheckItem;
