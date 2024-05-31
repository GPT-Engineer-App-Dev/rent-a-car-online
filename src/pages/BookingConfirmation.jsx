import { Box, Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const BookingConfirmation = () => {
  const location = useLocation();
  const [bookingDetails, setBookingDetails] = useState(null);
  const [referenceNumber, setReferenceNumber] = useState("");

  useEffect(() => {
    const details = location.state;
    if (details) {
      setBookingDetails(details);
      generateReferenceNumber();
    }
  }, [location]);

  const generateReferenceNumber = () => {
    const refNumber = Math.random().toString(36).substr(2, 9).toUpperCase();
    setReferenceNumber(refNumber);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmail = () => {
    // Logic to send confirmation via email
    alert("Confirmation has been sent to your email.");
  };

  if (!bookingDetails) {
    return (
      <Container>
        <Heading size="lg" my={10}>No booking details found.</Heading>
      </Container>
    );
  }

  return (
    <Container>
      <VStack spacing={6} my={10}>
        <Heading size="lg">Booking Confirmation</Heading>
        <Box>
          <Heading size="md" mb={2}>Summary</Heading>
          <Text><strong>Pick-up Location:</strong> {bookingDetails.pickupLocation}</Text>
          <Text><strong>Drop-off Location:</strong> {bookingDetails.dropoffLocation}</Text>
          <Text><strong>Pick-up Date:</strong> {bookingDetails.pickupDate}</Text>
          <Text><strong>Drop-off Date:</strong> {bookingDetails.dropoffDate}</Text>
          <Text><strong>Car Type:</strong> {bookingDetails.carType}</Text>
        </Box>
        <Box>
          <Heading size="md" mb={2}>Confirmation</Heading>
          <Text><strong>Reference Number:</strong> {referenceNumber}</Text>
        </Box>
        <VStack spacing={4}>
          <Button colorScheme="teal" onClick={handlePrint}>Print Confirmation</Button>
          <Button colorScheme="teal" onClick={handleEmail}>Email Confirmation</Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default BookingConfirmation;