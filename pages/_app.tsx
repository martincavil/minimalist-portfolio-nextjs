import "../styles/globals.css";
import type { AppProps } from "next/app";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { useRouter } from "next/router";
import { useEffect } from "react";

// Add global type for window.gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  // La déclaration globale pour window.gtag doit être dans un fichier de type (voir next-env.d.ts)
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-0V3YE7VJ9L", {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);
  return (
    <>
      <GoogleAnalytics ga_id="G-0V3YE7VJ9L" />

      <Component {...pageProps} />
    </>
  );
}
