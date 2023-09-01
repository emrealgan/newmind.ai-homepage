"use client";
import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import talented1 from '../public/display/talented-img1.svg';
import talented2 from '../public/display/talented-img2.svg';
import talented3 from '../public/display/talented-img3.svg';
import talented4 from '../public/display/talented-img4.svg';
import talented5 from '../public/display/talented-img5.svg';
import '../styles/Componentstyle/homesecondpart.css'

export default function HomeSecondPart() {
    // react-i18next kullanarak dil çevirilerini almak için ihtiyacımız olan fonksiyonları içe aktarıyoruz
    const { t, i18n } = useTranslation('common');

    // Dil değiştirme işlevi
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    // Dönme işlemi için kullanılan sabitler
    const rotationBase = 300;
    const rotationOffset = 17;
    const textCircle = t("textCircle");

    return (
        <div className='second-part'>
            {/* Hakkımızda bölümü */}
            <div className='about-us'>
                <h1 id='about-header'>{t("about-header")}</h1>
                <p id='about-paragraph'>{t("about-paragraph")}</p>
            </div>

            <div className='sides'>
                {/* Sol taraf */}
                <div className='left-side'>
                    <div id='percent'>%97</div>
                    <p id='faster-data'>{t("faster-data")}</p>
                    <div className='explore-our'>
                        {/* Metin halkasını oluşturuyoruz */}
                        {textCircle.split("").map((letter, i) => {
                            const rotationDegree = rotationBase / textCircle.length * (i - rotationOffset);
                            const styles = {
                                transform: `rotate(${rotationDegree}deg)`,
                                fontWeight: i === 17 ? 1000 : 500,
                            };

                            return (
                                <span key={i} style={styles}>
                                    {letter}
                                </span>
                            );
                        })}

                        {/* textCircle'ın ortasındaki vektör */}
                        <div className='vector1'></div>
                        <div id='point'></div>
                    </div>
                    <p id='responses'>{t("responses")}</p>
                </div>

                {/* Orta taraf */}
                <div className='mid'>
                    <div id='office-img'> </div>
                </div>

                {/* Sağ taraf */}
                <div className='right-side'>
                    <p id='seventy'>+70</p>
                    <span id='talented'>{t("talented")}</span>
                    <div className="talented-images">
                        {/* Küçük dairesel resimler */}
                        <div id='talented-img1'> <Image src={talented1} alt='img' width={50} height={50} priority /> </div>
                        <div id='talented-img2'> <Image src={talented2} alt='img' width={50} height={50} priority /> </div>
                        <div id='talented-img3'> <Image src={talented3} alt='img' width={50} height={50} priority /> </div>
                        <div id='talented-img4'> <Image src={talented4} alt='img' width={50} height={50} priority /> </div>
                        <div id='talented-img5'> <Image src={talented5} alt='img' width={50} height={50} priority /> </div>
                    </div>

                    {/* Resimlerin altındaki vektör */}
                    <div className="vector2"> </div>
                    <p id="we-therefore">{t("we-therefore")}</p>
                </div>
            </div>

            <div className='learn-btn2'>
                <button id='learn-btn'>{t("learn-btn")}</button>
            </div>
        </div>
    )
}
