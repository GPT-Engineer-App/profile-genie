import React, { useState } from "react";
import { Box, Heading, Button, Text, VStack, Grid, Table, Thead, Tbody, Tr, Th, Td, TableContainer, Input, IconButton, Flex } from "@chakra-ui/react";
import { FaRandom, FaUser, FaSearch } from "react-icons/fa";

const PROFILES_PER_PAGE = 10;

const Index = () => {
  const [profiles, setProfiles] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredProfiles = profiles.filter((profile) => {
    const fullName = `${profile.firstName} ${profile.lastName}`.toLowerCase();
    return fullName.includes(searchTerm.toLowerCase()) || profile.cpn.includes(searchTerm);
  });

  const paginatedProfiles = filteredProfiles.slice((page - 1) * PROFILES_PER_PAGE, page * PROFILES_PER_PAGE);

  return (
    <Box p={8}>
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
          <Flex mb={4}>
            <Input placeholder="Search by name or CPN" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} mr={2} />
            <IconButton icon={<FaSearch />} aria-label="Search" />
          </Flex>

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
                {paginatedProfiles.map((profile, index) => (
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
          {filteredProfiles.length === 0 && <Text mt={4}>No profiles found.</Text>}

          <Flex justify="space-between" mt={4}>
            <Button onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))} disabled={page === 1}>
              Previous
            </Button>
            <Button onClick={() => setPage((prevPage) => prevPage + 1)} disabled={page * PROFILES_PER_PAGE >= filteredProfiles.length}>
              Next
            </Button>
          </Flex>
        </Box>
      </Grid>
    </Box>
  );
};

export default Index;
