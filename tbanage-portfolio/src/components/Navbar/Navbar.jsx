import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { IoLogoGithub } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { Flex, Box, IconButton, useColorMode, useColorModeValue, Link } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const Navbar = () => {
    const { toggleColorMode } = useColorMode();

    const backgroundColor = useColorModeValue("#e6d2cf", "#1a1a1d");
    const fontColor = useColorModeValue('#58585e', '#f0e7db');
    const linkHoverColor = useColorModeValue("#ff63c3", "#88ccca");

    const ScrollOffsets = [
        { id: 'home', offset: -70 },
        { id: 'experience', offset: 0 },
        { id: 'projects', offset: -350 },
        { id: 'contact', offset: -360 },
    ]

    return (
        <Flex
            as="nav"
            style={{ backgroundColor }}
            align="center"
            justify="center"
            padding="10px 20px"
            position="fixed"
            top="0"
            w="100%"
            zIndex="1000"
            fontSize="1.2rem"
            fontWeight={500}
            alignItems="center"
            justifyContent="center"
        >
            <Flex as="ul" width="60%" listStyleType="none" display="flex" justifyContent="space-evenly" padding="0">
                <Box as="li" color={fontColor}>
                    <span>Tanmay Banage</span>
                </Box>
                {ScrollOffsets.map((item, index) => {
                    const {id, offset} = item;
                    return(
                        <Box as="li" key={index} mx="10px" color={fontColor}>
                            <ScrollLink
                                activeClass="active"
                                to={id}
                                spy={true}
                                smooth={true}
                                offset={offset}
                                duration={500}
                            >
                                <Link
                                    color={fontColor}
                                    _hover={{ color: linkHoverColor }}
                                    _activeLink={{ color: linkHoverColor }}
                                >
                                    {id.charAt(0).toUpperCase() + id.slice(1)}
                                </Link>
                            </ScrollLink>
                        </Box>
                    )
                    // console.log(item.id, item.value)
                })}
                <Box  as="li">
                    <Link color={fontColor} display="inline-flex" alignItems="center" href="https://github.com/xnsei/portfolio/tree/main/tbanage-portfolio" isExternal>
                        <IoLogoGithub />
                        <span style={{ marginLeft: '5px' }}>Source</span>
                    </Link>
                </Box>
                <Box as="li">
                    <AnimatePresence mode='wait' initial={false}>
                        <motion.div
                            style={{ display: 'inline-block' }}
                            key={useColorModeValue('light', 'dark')}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <IconButton
                                aria-label="Toggle theme"
                                colorScheme={useColorModeValue('purple', 'orange')}
                                icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
                                onClick={toggleColorMode}
                            />
                        </motion.div>
                    </AnimatePresence>
                </Box>
            </Flex>
        </Flex>
    );
};

export default Navbar;
