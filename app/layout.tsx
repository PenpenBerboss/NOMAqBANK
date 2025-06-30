import './globals.css';
import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from '@/components/ThemeProvider';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: 'NOMAQbank - Préparation EACMC Partie I',
  description: 'Première plateforme francophone de préparation à l\'EACMC Partie I. Plus de 5000 QCM pour réussir votre examen.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavBar />
            {children}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}