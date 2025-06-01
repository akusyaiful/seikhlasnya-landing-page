"use client";

import { system } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import SimpleToaster from "../SimpleToaster";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/utils/query-client";

const AppProvider = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider value={system}>
        <SimpleToaster />
        {children}
      </ChakraProvider>
    </QueryClientProvider>
  );
};

export default AppProvider;
