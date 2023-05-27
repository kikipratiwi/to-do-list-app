import React, { ReactElement } from 'react';
import { Box, Button, Image, VStack } from '@chakra-ui/react';
import dashboardActiveIcon from '../assets/icons/dashboard-active.png';
import pieGraphIcon from '../assets/icons/pie-graph.png';
import teamworkIcon from '../assets/icons/teamwork.png';
import gooleDocsIcon from '../assets/icons/google-docs.png';
import settingsIcon from '../assets/icons/setting.png';
import { COLORS } from '../constants';

const NavBar: React.FC = (): ReactElement => {
    return (
        <VStack flexGrow={1} pt="90px">
            <Button
                justifyContent="start"
                bgColor="black"
                color="white"
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderRightRadius={10}
                iconSpacing={3}
                fontSize={12}
                w="250px"
                py={7}
                pl={12}
                pr={2}
                leftIcon={
                    <Box w={4}>
                        <Image src={dashboardActiveIcon} />
                    </Box>
                }
                _hover={{ bgColor: COLORS.semigray, color: 'black' }}
            >
                Dashboard
            </Button>

            <Button
                justifyContent="start"
                bgColor="white"
                color="black"
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderRightRadius={10}
                iconSpacing={3}
                fontSize={12}
                w="250px"
                py={7}
                pl={12}
                pr={2}
                leftIcon={
                    <Box w={4}>
                        <Image src={pieGraphIcon} />
                    </Box>
                }
            >
                Analytics
            </Button>

            <Button
                justifyContent="start"
                bgColor="white"
                color="black"
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderRightRadius={10}
                iconSpacing={3}
                fontSize={12}
                w="250px"
                py={7}
                pl={12}
                pr={2}
                leftIcon={
                    <Box w={4}>
                        <Image src={teamworkIcon} />
                    </Box>
                }
            >
                Teams
            </Button>

            <Button
                justifyContent="start"
                bgColor="white"
                color="black"
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderRightRadius={10}
                iconSpacing={3}
                fontSize={12}
                w="250px"
                py={7}
                pl={12}
                pr={2}
                leftIcon={
                    <Box w={4}>
                        <Image src={gooleDocsIcon} />
                    </Box>
                }
            >
                Documents
            </Button>

            <Button
                justifyContent="start"
                bgColor="white"
                color="black"
                borderTopLeftRadius={0}
                borderBottomLeftRadius={0}
                borderRightRadius={10}
                iconSpacing={3}
                fontSize={12}
                w="250px"
                py={7}
                pl={12}
                pr={2}
                leftIcon={
                    <Box w={4}>
                        <Image src={settingsIcon} />
                    </Box>
                }
            >
                Settings
            </Button>
        </VStack>
    );
};

export default NavBar;
