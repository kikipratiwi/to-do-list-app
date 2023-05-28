import React, { ReactElement, ReactNode } from 'react';
import { Box, Button, Image, VStack } from '@chakra-ui/react';

import dashboardActiveIcon from '../assets/icons/dashboard-active.png';
import gooleDocsIcon from '../assets/icons/google-docs.png';
import pieGraphIcon from '../assets/icons/pie-graph.png';
import settingsIcon from '../assets/icons/setting.png';
import teamworkIcon from '../assets/icons/teamwork.png';

type NavigationType = {
    active: boolean;
    label: string;
    icon: ReactNode;
};

const NavBar: React.FC = (): ReactElement => {
    const navigations: NavigationType[] = [
        {
            active: true,
            label: 'Dashboard',
            icon: <Image src={dashboardActiveIcon} />,
        },
        {
            active: false,
            label: 'Analytics',
            icon: <Image src={pieGraphIcon} />,
        },
        {
            active: false,
            label: 'Teams',
            icon: <Image src={teamworkIcon} />,
        },
        {
            active: false,
            label: 'Documents',
            icon: <Image src={gooleDocsIcon} />,
        },
        {
            active: false,
            label: 'Settings',
            icon: <Image src={settingsIcon} />,
        },
    ];

    return (
        <VStack flexGrow={1} pt="90px">
            {navigations.map(
                ({ active, label, icon }: NavigationType): ReactNode => {
                    return (
                        <Button
                            bgColor={active ? 'black' : 'white'}
                            borderBottomLeftRadius={0}
                            borderRightRadius={10}
                            borderTopLeftRadius={0}
                            color={active ? 'white' : 'black'}
                            fontSize={12}
                            iconSpacing={3}
                            justifyContent="start"
                            leftIcon={<Box w={4}>{icon}</Box>}
                            pl={12}
                            pr={2}
                            py={7}
                            w="250px"
                            {...(active && {
                                _hover: {
                                    bgColor: 'gray.200',
                                    color: 'black',
                                },
                            })}
                        >
                            {label}
                        </Button>
                    );
                },
            )}
        </VStack>
    );
};

export default NavBar;
