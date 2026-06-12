import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ResearchForge • Elite Open-Source Research Agent",
  description: "Production-grade research agent for indie hackers and AI builders. GitHub-first, self-improving, input-resilient. Built for Fusionpanda and AGENTS.md workflows.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#09090b] text-[#f4f4f5] antialiased">
        {children}
        <Toaster 
          position="top-center" 
          richColors 
          closeButton 
          className="sonner-toast"
        />
      </body>
    </html>
  );
}