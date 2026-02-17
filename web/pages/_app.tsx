// File: web/pages/_app.tsx
// Next.js App component that wraps all pages. Provides global context providers including

import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/next";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: Record<string, unknown>
    ) => void;
  }
}

// React Query client instance for data fetching and caching
const queryClient = new QueryClient();

// Function: Root app component that wraps all pages with necessary providers
export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag !== "undefined") {
        window.gtag("config", "G-SEMNMJQ9CM", {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Analytics />
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
