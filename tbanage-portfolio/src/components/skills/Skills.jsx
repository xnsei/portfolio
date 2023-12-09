import React from 'react';
import TechStackModel from "../../models/TechStackModel.jsx";
import { technologies } from "../../constants/index.js";
import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";


const grassTeal = "#88ccca";
const pink = "#ff63c3";

const Skills = () => {
    const greetingColor = useColorModeValue(pink, grassTeal);
    return (
        <Flex
            wrap="wrap"
            width={"100%"} // Responsive width
            height="30vh"
            margin="200px auto"
            justifyContent="center"
            alignItems="center"
            className="skills-container"
        >
            <Text
                width="100%"
                color={greetingColor}
                fontSize="1.5rem"
                fontWeight="500"
                className="greetings"
            >
                Tech Stack I use but not limited to
            </Text>
            {technologies.map((skill) => (
                <Box
                    key={skill.name}
                    margin="0"
                    width="150px"
                    height="120px"
                    className="skill"
                >
                    <TechStackModel icon={skill.icon} />
                </Box>
            ))}
        </Flex>
    );
};

export default Skills;
