// Home.jsx
import React from "react";
import InstagramPosts from "../components/InstagramPosts/InstagramPosts";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homePage-container">
      <InstagramPosts />
      <div className="homePage-content">
        <div className="homePage-text-container">
          <h1 className="homePage-title">Kenta'ya Hoş Geldiniz!</h1>
          <span>
            Yıldız Teknik Üniversite'sinden 2022 yılında mezun olmuş iki plancı
            olarak kariyerimize başlarken okul hayatımızda yaşadığımız
            zorlukları düşündük ve bu zorluklara yönelik öğretici ve eğlenceli
            içerikler oluşturmak amacıyla sayfamızı kurmaya karar verdik. Aynı insanlarda olduğu gibi kentlerin de parmak izlerinin olduğu
            bakış açısıyla yola çıktığımız logomuzla sizlere, özgün değerleri
            olan ve dinamizmleriyle birbirinden tamamen ayrışan kentleri ve
            onlara ilişkin bileşenleri aktarmak istiyoruz.
          </span>
        </div>
        <div className="homePage-button-container">
          <Link to={"/about"} className="homePage-button homePage-primary">
            <span>Daha Fazlasını Öğren</span>
          </Link>
          <Link to={"/contact"} className="homePage-button homePage-secondary">
            <span>İletişim</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
