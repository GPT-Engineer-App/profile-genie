import React from "react";
import { Box, Flex, Heading, Spacer, Button } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ toggleColorMode, colorMode }) => {
  return (
    <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="gray.100">
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          CPN Profile Generator
        </Heading>
      </Flex>

      <Spacer />

      <Box>
        <Button onClick={toggleColorMode}>{colorMode === "light" ? <FaMoon /> : <FaSun />}</Button>
      </Box>
    </Flex>
  );
};

export default Header;
