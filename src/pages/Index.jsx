import React, { useState } from "react";
import { Box, Heading, Button, Text, VStack, Grid, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from "@chakra-ui/react";
import { FaRandom, FaUser } from "react-icons/fa";

const Index = () => {
  const [profiles, setProfiles] = useState([]);

  const generateCPN = () => {
    const cpn = Math.floor(Math.random() * 1000000000)
      .toString()
      .padStart(9, "0");
    return cpn;
  };

  const generateProfile = () => {
    const firstNames = ["John", "Jane", "Michael", "Emily", "David", "Sarah"];
    const lastNames = ["Smith", "Johnson", "Brown", "Davis", "Miller", "Wilson"];

    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 30) + 18;
    const cpn = generateCPN();

    return {
      firstName,
      lastName,
      age,
      cpn,
    };
  };

  const addProfile = () => {
    const newProfile = generateProfile();
    setProfiles([...profiles, newProfile]);
  };

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8}>
        CPN Profile Generator
      </Heading>

      <Grid templateColumns="1fr 2fr" gap={8}>
        <VStack align="stretch" spacing={4}>
          <Button leftIcon={<FaUser />} colorScheme="blue" onClick={addProfile}>
            Generate Profile
          </Button>
          <Button leftIcon={<FaRandom />} colorScheme="green" onClick={() => setProfiles([])}>
            Clear Profiles
          </Button>
        </VStack>

        <Box>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Age</Th>
                  <Th>CPN</Th>
                </Tr>
              </Thead>
              <Tbody>
                {profiles.map((profile, index) => (
                  <Tr key={index}>
                    <Td>{profile.firstName}</Td>
                    <Td>{profile.lastName}</Td>
                    <Td>{profile.age}</Td>
                    <Td>{profile.cpn}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          {profiles.length === 0 && <Text mt={4}>No profiles generated yet.</Text>}
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
