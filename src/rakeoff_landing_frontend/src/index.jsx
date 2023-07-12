import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { mainBackgroundColor } from "./components/Color";

const container = document.getElementById("app");
const root = createRoot(container);

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: mainBackgroundColor,
      },
    },
  },
});

root.render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
