import { Box, Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import AppButton from "../AppButton";

type QuestionCardProps = {
  questions: string;
  category: string;
  totalQuestions?: number;
  questionNumber?: number;
  checkAnswer: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const QuestionCard = ({
  questions,
  category,
  totalQuestions,
  questionNumber,
  checkAnswer,
}: QuestionCardProps) => {
  return (
    <>
      <Box bg="white" w="100%">
        <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
          Your Progress: {questionNumber}/{totalQuestions}
        </Box>
        <Box fontSize="sm" mb={1}>
          {category}
        </Box>
        <Heading as="h1" size="lg">
          <p dangerouslySetInnerHTML={{ __html: questions }} />
        </Heading>
        <Flex direction="column">
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={checkAnswer}
              value="True"
              width="full"
            />
          </Box>
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={checkAnswer}
              value="False"
              width="full"
            />
          </Box>
          <Box w="100%" mt={4}>
            <AppButton
              colorScheme="purple"
              variant="outline"
              onClick={checkAnswer}
              value="Next Question"
              width="full"
            />
          </Box>
          <Spacer />
          <Box></Box>
        </Flex>
      </Box>
    </>
  );
};

export default QuestionCard;
