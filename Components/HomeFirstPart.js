"use client";
import React from 'react';
import video from '../public/display/NMSliderVideo.mp4'; 
import { useTranslation } from 'react-i18next'; 
import Image from 'next/image';
import '../styles/Componentstyle/homefirstpart.css'  

export default function HomeFirstPart() {
    // react-i18next kullanarak dil çevirilerini almak için ihtiyacımız olan fonksiyonları içe aktarıyoruz
    const { t, i18n } = useTranslation('common');

    // Dil değiştirme işlevi
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className='first-part'>
            {/* Video bileşeni */}
            <video id='nm-video' autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>

            {/* Ana sayfanın metin bölümü */}
            <section id='main-paragraph'>
                <div className='head'>
                    {/* Başlık ve altyazı */}
                    <p id='who'>{t("who")}</p>
                    <h1 id='the-future'>{t("the-future")}</h1>
                </div>

                {/* Açıklama metni */}
                <p id='declaration'>{t("declaration")}</p>
            </section>

            {/* Butonlat */}
            <div className='btn'>
               
                <button id='mecellem-btn'>Mecellem</button>
                <button id='learn-btn'>{t("learn-btn")}</button>
            </div>
        </div>
    )
}
