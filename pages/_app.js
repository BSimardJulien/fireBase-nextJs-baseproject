import { ChakraProvider , CSSReset } from "@chakra-ui/react";
import { AuthProvider } from "../auth";
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider >
      <CSSReset />
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider >
  );
}

export default MyApp;