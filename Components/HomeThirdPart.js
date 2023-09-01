"use client";
import React, { useState,useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import '../styles/Componentstyle/homethirdpart.css'

// Kartların geçişi için kullanılacak kütüphaneyi import ediyoruz.
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//Her karttaki farklı ikonları içe aktarıyoruz.
import card1Icon from '../public/display/mahfuz-icon.svg'
import card2Icon from '../public/display/muhakemat-icon.svg'
import card3Icon from '../public/display/mulk-icon.svg'
import card4Icon from '../public/display/muellif-icon.svg'
import card5Icon from '../public/display/muamelat-icon.svg'
import card6Icon from '../public/display/mukavele-icon.svg'
import card7Icon from '../public/display/murakabe-icon.svg'
import card8Icon from '../public/display/mahsusat-icon.svg'
import card9Icon from '../public/display/munakasa-icon.svg'
import card10Icon from '../public/display/malumat-icon.svg'
import card11Icon from '../public/display/mahir-icon.svg'
import card12Icon from '../public/display/mursit-icon.svg'


export default function Home() {
      
  // react-i18next kullanarak dil çevirilerini almak için ihtiyacımız olan fonksiyonları içe aktarıyoruz
  const { t, i18n } = useTranslation('common');
  // Dil değiştirme işlevi
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  // Swiper bileşeni için referans oluşturuyoruz
  const swiperRef = useRef(null);
  // Her kartın üzerine gelinip gelinmediğini izlemek için bir durum dizisi kullanıyoruz
  const [isHovered, setIsHovered] = useState([]);

  // Kartın üzerine gelindiğinde veya üzerinden çıkıldığında bu işlevi çağırır
  const handleHover = (index) => {
    const updatedHovered = [...isHovered];
    updatedHovered[index] = !updatedHovered[index];
    setIsHovered(updatedHovered);
  };

  //Kart verileri
  const cardsData = [
    {
      id: 1,
      title: "Mahfuz",
      icon: card1Icon,
      description: t("card1-p"),
      helper: t("ai-helper"),
      helperDescription: t("card1-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card1-saver-p"),
    },
    {
      id: 2,
      title: "Muhakemat",
      icon: card2Icon,
      description: t("card2-p"),
      helper: t("ai-helper"),
      helperDescription: t("card2-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card2-saver-p"),
    },
    {
      id: 3,
      title: "Mülk",
      icon: card3Icon,
      description: t("card3-p"),
      helper: t("ai-helper"),
      helperDescription: t("card3-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card3-saver-p"),
    },
    {
      id: 4,
      title: "Müellif",
      icon: card4Icon,
      description: t("card4-p"),
      helper: t("ai-helper"),
      helperDescription: t("card4-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card4-saver-p"),
    },
    {
      id: 5,
      title: "Muamelat",
      icon: card5Icon,
      description: t("card5-p"),
      helper: t("ai-helper"),
      helperDescription: t("card5-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card5-saver-p"),
    },
    {
      id: 6,
      title: "Mukavele",
      icon: card6Icon,
      description: t("card6-p"),
      helper: t("ai-helper"),
      helperDescription: t("card6-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card6-saver-p"),
    },
    {
      id: 7,
      title: "Murakabe",
      icon: card7Icon,
      description: t("card7-p"),
      helper: t("ai-helper"),
      helperDescription: t("card7-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card7-saver-p"),
    },
    {
      id: 8,
      title: "Mahsusat",
      icon: card8Icon,
      description: t("card8-p"),
      helper: t("ai-helper"),
      helperDescription: t("card8-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card8-saver-p"),
    },
    {
      id: 9,
      title: "Münakasa",
      icon: card9Icon,
      description: t("card9-p"),
      helper: t("ai-helper"),
      helperDescription: t("card9-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card9-saver-p"),
    },
    {
      id: 10,
      title: "Malumat",
      icon: card10Icon,
      description: t("card10-p"),
      helper: t("ai-helper"),
      helperDescription: t("card10-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card10-saver-p"),
    },
    {
      id: 11,
      title: "Mahir",
      icon: card11Icon,
      description: t("card11-p"),
      helper: t("ai-helper"),
      helperDescription: t("card11-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card11-saver-p"),
    },
    {
      id: 12,
      title: "Mürşit",
      icon: card12Icon,
      description: t("card12-p"),
      helper: t("ai-helper"),
      helperDescription: t("card12-helper-p"),
      timeSaver: t("time-saver"),
      timeSaverDescription: t("card12-saver-p"),
    },
  ];
  
  return(

    <div className='three-part'>

      <div className='three-head'> 
        <p id="how-our">{t("how-our")}</p> 
        <p id="can-help">{t("can-help")}</p> 
      </div>          
      {/* Bütün kartları cards classına sahip olan div'e alıyoruz. */}
      <div className="cards"> 
        <Swiper
          // Geçiş animasyonunun özelliklerini veriyoruz.
          ref={swiperRef} 
          slidesPerView={4}
          loop={true}
          autoplay={{ delay: 0 }}
          speed={2000}
          // pagination={{ clickable: true }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {cardsData.map((card, index) => (
            // Swiper bileşeninde her kartı temsil eden bir SwiperSlide oluşturuyoruz.
            <SwiperSlide  key={card.id} >
              <div
                id={`card${index + 1}`}
                key={card.id}
                // Kartın üzerine gelip gelmediğini kontrol etmek için CSS sınıfını ekliyoruz.
                className={`card ${isHovered[index] ? 'hovered' : ''}`}
                // Kartın üzerine gelindiğinde otomatik oynatmayı durduruyoruz üzerinden ayrılınca da tekrar başlatıyoruz.
                onMouseEnter={() => {swiperRef.current.swiper.autoplay.stop() }}  
                onMouseLeave={() => { swiperRef.current.swiper.autoplay.start() }}      
              >
                <div 
                  className={"front-side"}
                  onMouseEnter={() => handleHover(index)} // back-side'a geçiş için
                >
                  {/* Kart ikonları */}
                  <div className="card-icon">
                    <Image src={card.icon} alt="icon" width={100} height={100} />
                  </div>
                  <p className="card-head">{card.title}</p>
                  <p className="card-p">{card.description}</p>
                </div>
                <div 
                  className={"back-side"}
                  onMouseLeave={() => { handleHover(index) }} // front-side'a geçiş için
                >
                  <h3 className="ai-helper">{card.helper}</h3>
                  <p className="card-helper-p">{card.helperDescription}</p>
                  <h3 className="time-saver">{card.timeSaver}</h3>
                  <p className="card-saver-p">{card.timeSaverDescription}</p>
                </div>

                  <p className="read-more" id={`card${index + 1}-more`}>{t("read-more")} &emsp; <span className="greater-than">&gt;</span> </p>
              </div>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
  )
}
