import { Poppins } from 'next/font/google';
import AppProvider from '@/components/common/AppProvider';
import Container from '@/components/admin/Container';
import '@/app/globals.css';
import NProgressProvider from '@/components/common/NprogressProvider';
import { Suspense } from 'react';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Seikhlasnya Admin',
  description: 'Aplikasi donasi digital',
};

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning={false}>
      <body className={poppins.variable}>
        <Suspense>
          <NProgressProvider />
        </Suspense>
        <AppProvider>
          <Container>
            <main>{children}</main>
          </Container>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
