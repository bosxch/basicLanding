import Head from 'next/head';
import "./globals.css";

export const metadata = {
  title: 'Boost Traiding Crypto',
  description: 'Sitio web de ejemplo con Next.js y TypeScript',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
            <Head>
        
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
<link rel="manifest" href="/site.webmanifest"/>

        <title>Título de tu Página</title>
      </Head>

      <body>{children}</body>
    </html>
  );
}
