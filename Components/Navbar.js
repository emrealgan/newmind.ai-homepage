"use client"
// Dil dosyalarını dahil ediyoruz.
import "../public/locales/en/common.json";
import "../public/locales/tr/common.json";

// İkonları içe aktarıyoruz.
import logo from '../public/display/logo.svg';
import langIcon from '../public/display/lang-icon.svg'

// Next.js ve diğer bileşenleri içe aktarıyoruz.
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';
import Link from 'next/Link'

// Stil dosyasını içe aktarıyoruz.
import '../styles/Componentstyle/navbar.css'

// Mantine ve özelleştirilmiş kancaları içe aktarıyoruz.
import { Popover, Text, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';


export default function Navbar() {
  
    // Popup durumunu yönetmek için açılır pencere kancalarını kullanıyoruz
    const [opened, { close, open }] = useDisclosure(false);

    // Çeviri ihtiyacını karşılamak için react-i18next kütüphanesini kullanıyoruz
    const { t } = useTranslation("common");

    // Dil değişikliği işlevi
    const handleLanguageChange = (lng) => {
        // Seçilen dili i18n kütüphanesi aracılığıyla değiştiriyoruz
        i18n.changeLanguage(lng);
        // Popup penceresini kapatıyoruz
        close();
    };

    return (
        <header id='header'>
            <div id='logo'>
                {/* Şirket logosunu gösteriyoruz */}
                <Image src={logo} alt='Logo' width={176} height={34} priority />
            </div>
            <nav id='navbar'>
                {/* Sayfa bağlantıları */}
                <Link href="Company">{t('Company')}</Link>
                <Link href="Products and Solutions">{t('Products and Solutions')}</Link>
                <Link href="Blog">{t('Blog')}</Link>
                <Link href="Career">{t('Career')}</Link>
            </nav>
            <div id='lang' onMouseEnter={open} onMouseLeave={close}>
                {/* Dil seçimi için açılır pencere */}
                <Popover width={"target"} withArrow opened={opened}>
                    <Popover.Target className={"trans-bg"}>
                        <Button id='lang-image'>
                            {/* Dil ikonunu gösteriyoruz */}
                            <Image id='lang-icon' src={langIcon} alt='Lang' width={32} height={32} />
                        </Button>
                    </Popover.Target>
                    <Popover.Dropdown className='lang-btn'>
                        {/* Türkçe ve İngilizce seçenekleri */}
                        <Button onClick={() => handleLanguageChange('tr')}>TR</Button>
                        <Button onClick={() => handleLanguageChange('en')}>ENG</Button>
                    </Popover.Dropdown>
                </Popover>
            </div>
        </header>
    )
}
