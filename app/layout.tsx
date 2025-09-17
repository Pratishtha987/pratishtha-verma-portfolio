"use client";

import { useEffect, useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <html lang="en">
        <head>
          <title>Pratishtha Verma - Frontend Developer & React Enthusiast</title>
          <meta name="description" content="Portfolio of Pratishtha Verma - Frontend Developer specializing in React.js, Next.js, and modern web technologies. Explore my projects and experience." />
          <meta name="keywords" content="Pratishtha Verma, Frontend Developer, React.js, Next.js, JavaScript, TypeScript, Web Development, Portfolio" />
        </head>
        <body className="antialiased">
          <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-2xl font-bold text-gray-600">Loading...</div>
          </div>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
        <title>Pratishtha Verma - Frontend Developer & React Enthusiast</title>
        <meta name="description" content="Portfolio of Pratishtha Verma - Frontend Developer specializing in React.js, Next.js, and modern web technologies. Explore my projects and experience." />
        <meta name="keywords" content="Pratishtha Verma, Frontend Developer, React.js, Next.js, JavaScript, TypeScript, Web Development, Portfolio" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
