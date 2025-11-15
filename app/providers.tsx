"use client";

// import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Temporarily disabled theme - always use light theme
  return <>{children}</>;
  
  // To re-enable theme, uncomment below:
  // return (
  //   <ThemeProvider defaultTheme="light" enableSystem={false} attribute="class">
  //     {children}
  //   </ThemeProvider>
  // );
}
