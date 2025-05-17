import { Poppins } from 'next/font/google';
import '@/app/globals.css';
import AppProvider from '@/components/common/AppProvider';
import Layout from '@/components/client/Container';
import Container from '@/components/client/Container';
import { Suspense } from 'react';
import NProgressProvider from '@/components/common/NprogressProvider';
import MetaThemeColor from '@/components/common/MetaThemeColor';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Seikhlasnya',
  description: 'Aplikasi donasi digital',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

const RootLayout = ({ children }) => {
  return (
    <html suppressHydrationWarning={false}>
      <body className={poppins.variable}>
        <Suspense>
          <NProgressProvider />
        </Suspense>
        <MetaThemeColor />
        <AppProvider>
          <Layout>
            <Container>
              <main>{children}</main>
            </Container>
          </Layout>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;
