'use client';
// Google Fonts'tan Inter fontunu içe aktarıyoruz
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

// Çeviri dosyalarını içe aktarıyoruz
import "../public/locales/en/common.json";
import "../public/locales/tr/common.json";

// Next.js bileşenlerini ve stilleri içe aktarıyoruz
import Link from 'next/Link'
import '../styles/global.css'
import '../styles/font.css'

// react-i18next kütüphanesini içe aktarıyoruz
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

// react-helmet ile başlık bileşenini içe aktarıyoruz
import { Helmet } from 'react-helmet';

// RootLayout bileşeni başlıyor
export default function RootLayout({ children }) {
  // Çeviri işlevini kullanmak için react-i18next kütüphanesini kullanıyoruz
  const { t } = useTranslation("common");
 
  return (
    // Temel HTML şablonunu oluşturuyoruz
    <html lang="en">
      <Helmet>
        {/* Sayfa başlığını dil dosyasından alıyoruz */}
        <title>{t('pageTitle')}</title>
      </Helmet>
    
      <body id='layout body'>
        <div id='layout-div'> </div>
        {/* Sayfa içeriğini render etmek için çocuk bileşenleri kullanıyoruz */}
        {children}
      </body>
    </html>
  )
}
