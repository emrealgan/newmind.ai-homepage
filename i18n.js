// i18next ve react-i18next kütüphanelerini içe aktarıyoruz
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Çeviri dosyalarını içe aktarıyoruz
import enCommon from './public/locales/en/common.json';
import trCommon from './public/locales/tr/common.json';

// i18n'yi yapılandırıyoruz
i18n
  .use(initReactI18next) // react-i18next'i başlatıyoruz
  .init({
    lng: 'en', // Varsayılan dil: İlk açıldığında görüntülenecek dil
    fallbackLng: 'en', // Desteklenmeyen bir dil seçildiğinde kullanılacak dil
    resources: {
      en: {
        common: enCommon, // İngilizce çeviri dosyasını tanımlıyoruz
      },
      tr: {
        common: trCommon, // Türkçe çeviri dosyasını tanımlıyoruz
      },
    },
    interpolation: {
      escapeValue: false, // HTML veya diğer etiketleri çevirirken otomatik olarak kaçış karakterleri eklemesini devre dışı bırakır
    },
  });

// Başka yerlerden erişilebilmesi için dil değiştirme işlevini dışarı aktarıyoruz
export const changeLanguage = (lng) => {
  i18n.changeLanguage(lng); // Seçilen dili değiştirir
};

export default i18n; // i18n yapılandırmasını dışa aktarıyoruz
