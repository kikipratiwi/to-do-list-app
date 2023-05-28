import { Text } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';

type HeadingTextProps = {
    children: ReactNode;
};

const HeadingText: React.FC<HeadingTextProps> = ({
    children,
}: HeadingTextProps): ReactElement => {
    return (
        <Text
            color="black"
            fontSize="4xl"
            fontWeight="bold"
            lineHeight="normal"
        >
            {children}
        </Text>
    );
};

export default HeadingText;
