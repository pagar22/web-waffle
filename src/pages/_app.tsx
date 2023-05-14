import { AppProps } from "next/app";
import { Inter } from "next/font/google";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { theme } from "src/app/theme";

const inter = Inter({ subsets: ["latin"] });
interface FontProps {
  children: React.ReactNode;
}

const cache = createCache({ key: "css", prepend: true });

export default function MyApp({ Component, pageProps }: AppProps) {
  const FontProvider = ({ children }: FontProps) => {
    return <main className={inter.className}>{children}</main>;
  };

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <FontProvider>
          <Component {...pageProps} />
        </FontProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}
