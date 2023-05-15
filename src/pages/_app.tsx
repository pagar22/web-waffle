import React from "react";
import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { QueryClient, QueryClientProvider } from "react-query";

// internal
import { theme } from "src/theme";
import { FirebaseContextProvider } from "@/services/firebase.context";

export interface ContextProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });
const cache = createCache({ key: "css", prepend: true });
const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  const FontProvider = ({ children }: ContextProps) => {
    return <main className={inter.className}>{children}</main>;
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <FontProvider>
          <QueryClientProvider client={queryClient}>
            <FirebaseContextProvider>
              <Component {...pageProps} />
            </FirebaseContextProvider>
          </QueryClientProvider>
        </FontProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
