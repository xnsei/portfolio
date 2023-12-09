import {Box, color, Heading, Link, List, ListItem, useColorModeValue, VStack} from "@chakra-ui/react";
import Skills from "../../components/skills/Skills.jsx";
import { experiences } from "../../constants/index.js";
import { motion } from "framer-motion";
import { simpleFadeIn } from "../../utils/motion.js";

const MotionBox = motion(Box);

const grassTeal = "#88ccca";
const pink = "#ff63c3";
const lightFont = "#f0e7db";
const darkFont = "#58585e";
const ExperienceItem = ({ jobTitle, company, companyURL, period, description }) => {
    const colorTheme = useColorModeValue(darkFont, lightFont);

    return (
        <Box className="experience-item">
            <Link
                href={companyURL}
                isExternal
                className="company"
                color={colorTheme}
                fontWeight="600"
                fontSize="2.5rem"
            >
                {company}
            </Link>
            <Heading color={colorTheme} mt={1} as="h2" className="job-title" fontWeight="500" fontSize="1.5rem">
                {jobTitle}
            </Heading>
            <Heading my={1} fontWeight={400} className="period" color={"#999"} fontSize="1rem">
                {period}
            </Heading>
            <List
                mt={4}
                fontSize="1.2rem"
                fontWeight="400"
                lineHeight="1.6"
                color={colorTheme}
                listStyleType="disc"
                pl={14}
            >
                {description.map((desc, index) => (
                    <ListItem key={index}>{desc}</ListItem>
                ))}
            </List>
        </Box>
    );
};

const Experience = () => {
    return (
        <VStack spacing={0} width="100%">
            <MotionBox
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleFadeIn}
                margin="180px auto"
                maxWidth="100%"
                minWidth="60%"
                width="50%"
                fontFamily="M PLUS Rounded 1c"
                className="experience_container"
            >
                <Box className="child_container">
                    <Heading mb={3} width="60%" as="p" className="greetings" color={useColorModeValue(pink, grassTeal)} fontSize="1.5rem" fontWeight="500">
                        My professional experience includes..
                    </Heading>
                    {experiences.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </Box>
                <Skills />
            </MotionBox>
        </VStack>
    );
};

export default Experience;
