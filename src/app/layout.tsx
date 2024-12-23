import "./globals.css";
import type { Metadata } from "next";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
import localFont from "next/font/local";
import { ThemeProvider } from "@crm/components";
import { Toaster } from "@crm/components/ui/toaster";
import { cn } from "@crm/lib/utils";
import NextTopLoader from "nextjs-toploader";

const mtn = localFont({
  src: [
    {
      path: "../assets/mtn/MTNBrighterSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/mtn/MTNBrighterSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "crm",
  description: "learn, earn and master your money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      {/* <UserProvider> */}
      <body
        className={cn(
          `${mtn.className} ${mtn.style}`,
          "antialiased bg-background text-foreground"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
          disableTransitionOnChange
        >
          <NextTopLoader color="#2563EB" />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
      {/* </UserProvider> */}
    </html>
  );
}
