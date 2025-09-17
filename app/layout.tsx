import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pratishtha Verma - Frontend Developer & React Enthusiast",
  description: "Portfolio of Pratishtha Verma - Frontend Developer specializing in React.js, Next.js, and modern web technologies. Explore my projects and experience.",
  keywords: "Pratishtha Verma, Frontend Developer, React.js, Next.js, JavaScript, TypeScript, Web Development, Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
