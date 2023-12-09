import {Box, VStack, Text, Heading, Container, color, useColorModeValue} from "@chakra-ui/react";
import { Suspense } from "react";
import Loader from "../../components/Loader/Loader.jsx";
import { motion } from "framer-motion";
import { simpleFadeIn } from "../../utils/motion.js";
import LostProgrammer from "../../models/LostProgrammer.jsx";

const MotionBox = motion(Box);

const grassTeal = "#88ccca";
const pink = "#ff63c3";

const Home = () => {
    return (
        <VStack spacing={0} width="100%">
            <Suspense fallback={<Loader />}>
                <Box
                    my="auto"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    height="70vh"
                    overflow="hidden"
                >
                    <LostProgrammer />
                </Box>
            </Suspense>
            <MotionBox
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={simpleFadeIn}
                margin="auto"
                maxWidth="100%"
                minWidth="60%"
                width="50%"
                flexDirection="column"
                justifyContent="center"
            >
                <VStack spacing={4} alignItems="flex-start">
                    <Text color={useColorModeValue(pink, grassTeal)} mt={12} mb={-4} fontSize="1.5rem" fontWeight="500">
                        Hi, My Name is
                    </Text>
                    <Heading as="h1" fontSize="3.5rem" fontWeight="600" m={0}>
                        Tanmay Banage
                    </Heading>
                    <Heading as="h2" fontSize="1.5rem" fontWeight="400" mt={-5} ml={3}>
                        I'm a full stack software engineer
                    </Heading>
                </VStack>
                <Box textAlign="justify" mt={12} ml={3}>
                    <Text fontFamily="M PLUS Rounded 1c" fontSize="1.3rem" fontWeight="400">
                        Experienced software engineer with a Bachelor's degree from IIT Indore. Passionate about internet technologies, quick learner, and collaborative team player adept at leveraging diverse frameworks for impactful software solutions. Proven track record in Full stack web development.
                    </Text>
                </Box>
            </MotionBox>
        </VStack>
    );
};

export default Home;
