import React, { useState } from 'react';

export type withDisclosureType = {
    isOpen?: boolean;
    open?: () => void;
    close?: () => void;
};

const withDisclosure = <Props,>(PassedComponent: React.FC<Props>) => {
    return (props: Props) => {
        const [isOpen, setIsOpen] = useState<boolean>();
        const open = (): void => setIsOpen(true);
        const close = (): void => setIsOpen(false);

        return (
            <PassedComponent
                {...props}
                isOpen={isOpen}
                open={open}
                close={close}
            />
        );
    };
};

export default withDisclosure;
