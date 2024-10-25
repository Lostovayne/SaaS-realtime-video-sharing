import { ThemeProvider } from '@/components/theme';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Opal',
  description: 'Share AI powered videos with your friends',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${manrope.className}  antialiased bg-[#171717]`}>
          <ThemeProvider>{children}</ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
