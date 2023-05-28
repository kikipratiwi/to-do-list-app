import { ReactElement } from 'react';
import {
    Box,
    Button,
    Image,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    VStack,
} from '@chakra-ui/react';
import { UilAngleUp } from '@iconscout/react-unicons';

import logo from '../assets/icons/logo.png';
import { NavBar } from '.';

const SideBar: React.FC = (): ReactElement => {
    return (
        <VStack h="full" alignItems="flex-start">
            <Image w={10} ml={12} src={logo} />

            <NavBar />

            <Box pl={12} w="full">
                <Menu>
                    <MenuButton
                        alignItems="center"
                        as={Button}
                        borderColor="black"
                        borderRadius={12}
                        borderWidth="1px"
                        color="black"
                        fontSize={12}
                        iconSpacing={1}
                        py={5}
                        rightIcon={<UilAngleUp />}
                        transition="all 0.2s"
                        variant="outline"
                        width="full"
                        _hover={{ bg: 'gray.100' }}
                        _expanded={{ bg: 'gray.100' }}
                    >
                        Workspace
                    </MenuButton>
                    <MenuList color="black" fontSize={14} borderColor="black">
                        <MenuItem>Your Workspace Name #1</MenuItem>
                        <MenuItem>Your Workspace Name #2</MenuItem>
                        <MenuItem>Your Workspace Name #3</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
        </VStack>
    );
};

export default SideBar;
