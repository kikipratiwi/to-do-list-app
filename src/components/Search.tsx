import { ReactElement } from 'react';
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    Modal,
    ModalBody,
    ModalContent,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react';
import { COLORS } from '../constants';

import { UilSearch } from '@iconscout/react-unicons';

const Search: React.FC = (): ReactElement => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box pb="40px" w="full">
                <Button
                    onClick={onOpen}
                    justifyContent="start"
                    bgColor={COLORS.semigray}
                    color={COLORS.gray}
                    iconSpacing={3}
                    borderRadius={12}
                    size="sm"
                    w="full"
                    py={6}
                    pl={6}
                    pr={2}
                    leftIcon={<UilSearch color="black" size={18} />}
                    outline={2}
                    outlineColor="transparent"
                    _hover={{
                        bgColor: COLORS.semigray,
                        outline: '2px black solid',
                    }}
                >
                    Search something...
                </Button>
            </Box>

            <Modal isOpen={isOpen} onClose={onClose} size="lg">
                <ModalOverlay />
                <ModalContent borderRadius={12}>
                    <ModalBody>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents="none"
                                h="full"
                                w="40px"
                            >
                                <UilSearch size={22} />
                            </InputLeftElement>
                            <Input
                                autoFocus={false}
                                border="none"
                                borderColor="black"
                                borderRadius={12}
                                bgColor="white"
                                color="black"
                                fontWeight="semibold"
                                height="55px"
                                maxLength={64}
                                onClick={onOpen}
                                pl="50px"
                                placeholder="Search something..."
                                size="lg"
                                type="text"
                                variant="filled"
                                _focus={{
                                    border: 'none',
                                    boxShadow: 'none',
                                }}
                                _placeholder={{ color: COLORS.gray }}
                            />
                        </InputGroup>
                        {/* <Divider /> */}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;
