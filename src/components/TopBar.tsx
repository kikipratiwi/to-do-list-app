import React, { ReactElement } from 'react';
import { Avatar, Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { UilBell, UilInbox } from '@iconscout/react-unicons';

import avatar from '../assets/images/avatar.png';
import { COLORS } from '../constants';

const TopBar: React.FC = (): ReactElement => {
    return (
        <HStack w="full" justifyContent="space-between" spacing="1">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar
                    name="Jessica Smith"
                    src={avatar}
                    bgColor={COLORS.yellow}
                />

                <Box>
                    <Text fontWeight="bold" color="black">
                        Jessica Smith
                    </Text>
                    <Text fontWeight="semibold">Marketing Expert</Text>
                </Box>
            </Flex>

            <IconButton
                variant="ghost"
                rounded="full"
                aria-label="Notification"
                icon={<UilBell color="black" />}
            />

            <IconButton
                variant="ghost"
                rounded="full"
                aria-label="Inbox"
                icon={<UilInbox color="black" />}
            />
        </HStack>
    );
};

export default TopBar;
