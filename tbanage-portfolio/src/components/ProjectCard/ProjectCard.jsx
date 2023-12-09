import React from 'react';
import { Box, Image, Heading, Text, Link, useColorModeValue } from '@chakra-ui/react';

const ProjectCard = ({ project }) => {
    const backgroundColor = useColorModeValue("#f0e7db", "#202023");
    const fontColor = useColorModeValue("#58585e", "#f0e7db");
    const designerThemeColor = useColorModeValue("#ff63c3", "#88ccca");
    const titleColor = useColorModeValue('#000000', '#ffffff');

    return (
        <Box
            maxW="25%"
            m="20px"
            border="2px solid"
            borderColor={fontColor}
            transition="transform 0.3s ease, border-color 0.3s ease"
            borderRadius="25px"
            cursor="pointer"
            overflow="hidden"
            _hover={{
                transform: "translateY(-5px)",
                borderColor: designerThemeColor,
            }}
            backgroundColor={backgroundColor}
        >
            <Box className="project-image-container">
                <Image
                    src={project.img}
                    alt={project.title}
                    className="project-image"
                    transition="transform 0.3s ease"
                    _hover={{
                        transform: "scale(1.05)"
                    }}
                />
            </Box>
            <Box textAlign="center" p="15px">
                <Heading
                    as="h3"
                    size="lg"
                    my="10px"
                    fontWeight="500"
                    color={titleColor}
                >
                    {project.title}
                </Heading>
                <Text fontSize="1em" color={fontColor}>
                    {project.description}
                </Text>
                <Box
                    my="25px"
                    mx={"auto"}
                    className="project-links"
                >
                    {project.projectUrl && (
                        <Link
                            href={project.projectUrl}
                            isExternal
                            p="8px 15px"
                            m="10px"
                            textDecoration="none"
                            color={fontColor}
                            borderRadius="25px"
                            border="2px solid"
                            borderColor={fontColor}
                            _hover={{
                                color: designerThemeColor,
                                borderColor: designerThemeColor,
                            }}
                        >
                            View Project
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            isExternal
                            p="8px 15px"
                            my="50px"
                            m="10px"
                            textDecoration="none"
                            color={fontColor}
                            borderRadius="25px"
                            border="2px solid"
                            borderColor={fontColor}
                            _hover={{
                                color: designerThemeColor,
                                borderColor: designerThemeColor,
                            }}
                        >
                            Github
                        </Link>
                    )}
                </Box>
            </Box>
        </Box>
    );
}

export default ProjectCard;
