import { Box, HStack, Text, VStack } from '@chakra-ui/react';
import { COLORS } from '../constants';

const ThisWeek = () => {
    const dayName = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const days = [1, 2, 3, 4, 5, 6, 7];
    const today = 3;
    return (
        <HStack w="full" justifyContent="space-between" alignItems="start">
            {days.map((day, index) => {
                const isToday = today === day;
                return (
                    <VStack
                        key={'date' + day}
                        spacing={0}
                        color={isToday ? COLORS.yellow : 'black'}
                        fontWeight={isToday ? 'bold' : 500}
                    >
                        <Text>{dayName[index]}</Text>

                        <Box position="relative">
                            <Text fontWeight="bold">{day}</Text>

                            {isToday && (
                                <Box
                                    position="absolute"
                                    bottom={-5}
                                    fontWeight="bold"
                                    color={COLORS.yellow}
                                    fontSize="2xl"
                                >
                                    ·
                                </Box>
                            )}
                        </Box>
                    </VStack>
                );
            })}
        </HStack>
    );
};

export default ThisWeek;
