import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" py={4} mt={8} borderTop="1px" borderColor="gray.200">
      <Text textAlign="center" fontSize="sm">
        &copy; {new Date().getFullYear()} CPN Profile Generator. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
