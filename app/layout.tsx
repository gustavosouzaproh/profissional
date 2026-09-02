import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Gustavo Souza | Portfólio Profissional',
  description: 'Portfólio profissional de Gustavo Souza — Engenharia de Software, Finanças, Dados e Processos.',
  applicationName: 'Portfólio de Gustavo Souza',
  keywords: ['Gustavo Souza', 'Engenharia de Software', 'Finanças', 'Dados', 'Processos'],
  authors: [{ name: 'Gustavo Souza' }],
  icons: { icon: '/favicon.png' },
  openGraph: {
    title: 'Gustavo Souza | Portfólio Profissional',
    description: 'Engenharia de Software, Finanças, Dados e Processos.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Gustavo Souza | Portfólio Profissional' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gustavo Souza | Portfólio Profissional',
    description: 'Engenharia de Software, Finanças, Dados e Processos.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
