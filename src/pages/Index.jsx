import React, { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Select, Input, Button, Image, useToast } from "@chakra-ui/react";
import { FaExchangeAlt } from "react-icons/fa";

const Index = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const toast = useToast();

  const handleSwap = () => {
    // TODO: Implement swap logic using smart contracts
    toast({
      title: "Swap Initiated",
      description: `Swapping ${fromAmount} ${fromToken} for ${toAmount} ${toToken}`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={8}>
      <VStack spacing={8} alignItems="center">
        <Heading as="h1" size="2xl">
          Multi-Chain Atomic Swaps
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Exchange cryptocurrencies across different blockchains without a third-party intermediary.
        </Text>
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MTI0NDY5MDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Blockchain" />

        <HStack spacing={4} width="100%">
          <VStack spacing={2} flex={1}>
            <Select placeholder="Select From Token" value={fromToken} onChange={(e) => setFromToken(e.target.value)}>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="USDT">Tether (USDT)</option>
            </Select>
            <Input placeholder="Amount" value={fromAmount} onChange={(e) => setFromAmount(e.target.value)} />
          </VStack>

          <Box>
            <FaExchangeAlt size={24} />
          </Box>

          <VStack spacing={2} flex={1}>
            <Select placeholder="Select To Token" value={toToken} onChange={(e) => setToToken(e.target.value)}>
              <option value="ETH">Ethereum (ETH)</option>
              <option value="BTC">Bitcoin (BTC)</option>
              <option value="USDT">Tether (USDT)</option>
            </Select>
            <Input placeholder="Amount" value={toAmount} onChange={(e) => setToAmount(e.target.value)} />
          </VStack>
        </HStack>

        <Button colorScheme="blue" size="lg" onClick={handleSwap}>
          Initiate Swap
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
