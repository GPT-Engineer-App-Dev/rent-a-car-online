import { Box, Button, Container, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CarRental</Heading>
        <HStack spacing={8}>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/services">Services</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box bg="gray.900" color="white" py={20} textAlign="center">
        <Heading size="2xl" mb={4}>Rent Your Dream Car</Heading>
        <Text fontSize="xl" mb={6}>Explore our wide range of cars and find the perfect one for you.</Text>
        <Button as={RouterLink} to="/services" colorScheme="teal" size="lg">Rent a Car Now</Button>
      </Box>

      {/* Featured Cars Section */}
      <Box py={20} textAlign="center">
        <Heading mb={10}>Featured Cars</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box>
            <Image src="/images/car1.jpg" alt="Car 1" mb={4} />
            <Text>Car 1</Text>
          </Box>
          <Box>
            <Image src="/images/car2.jpg" alt="Car 2" mb={4} />
            <Text>Car 2</Text>
          </Box>
          <Box>
            <Image src="/images/car3.jpg" alt="Car 3" mb={4} />
            <Text>Car 3</Text>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20} textAlign="center">
        <Heading mb={10}>Customer Testimonials</Heading>
        <VStack spacing={10}>
          <Box>
            <Text fontSize="lg" mb={4}>"Great service! The car was in excellent condition and the process was smooth."</Text>
            <Text>- John Doe</Text>
          </Box>
          <Box>
            <Text fontSize="lg" mb={4}>"Highly recommend CarRental. The staff was friendly and helpful."</Text>
            <Text>- Jane Smith</Text>
          </Box>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box py={20} textAlign="center">
        <Heading mb={10}>Contact Us</Heading>
        <VStack spacing={4}>
          <Text>Email: info@carrental.com</Text>
          <Text>Phone: 123-456-7890</Text>
          <Text>Address: 123 Main St, City, Country</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;