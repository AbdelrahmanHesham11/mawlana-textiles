import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

export const metadata = {
  title: "Mawlana Textile Company | شركة مولانا للاستيراد وتجارة الأقمشة",
  description:
    "Mawlana Textile Company - Egypt's premier fabric destination since 1950. Importing premium fabrics from China to Egypt. Located at Al-Azhar Street, Cairo.",
  keywords:
    "Mawlana, مولانا, textile, fabrics, أقمشة, import, China, Egypt, cotton, silk, polyester, Al-Azhar, Cairo",
  openGraph: {
    title: "Mawlana Textile Company | شركة مولانا للاستيراد وتجارة الأقمشة",
    description:
      "Egypt's premier fabric destination since 1950. Importing premium fabrics from China.",
    type: "website",
    locale: "en_EG",
    alternateLocale: "ar_EG",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <meta name="theme-color" content="#1a2744" />
      </head>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
