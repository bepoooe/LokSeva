import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import ClientWrapper from '@/components/ClientWrapper'; // Import Client Component

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  weight: ['800', '700', '600', '500', '400', '300'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>
        <ClientWrapper> 
          <Navbar />
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
