import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-imgContainer">
        <img
          src="/illustration.png"
          fill="true"
          alt="illust"
          className="about-img"
        />

        <div className="about-imgText">
          <h1 className="about-imgTitle">Kenta</h1>
        </div>
      </div>
      <div className="about-textContainer">
        <div className="about-item">
          <h1 className="about-title">Biz Kimiz ?</h1>
          <p className="about-desc">
            Yıldız Teknik Üniversite'sinden 2022 yılında mezun olmuş iki plancı
            olarak kariyerimize başlarken okul hayatımızda yaşadığımız
            zorlukları düşündük ve bu zorluklara yönelik öğretici ve eğlenceli
            içerikler oluşturmak amacıyla sayfamızı kurmaya karar verdik.
          </p>
        </div>
        <div className="about-item">
          <h1 className="about-title">Ne Yapıyoruz ?</h1>
          <p className="about-desc">
            Aynı insanlarda olduğu gibi kentlerin de parmak izlerinin olduğu
            bakış açısıyla yola çıktığımız logomuzla sizlere, özgün değerleri
            olan ve dinamizmleriyle birbirinden tamamen ayrışan kentleri ve
            onlara ilişkin bileşenleri aktarmak istiyoruz.
          </p>

          <Link to={"/contact"}>
            <button url="contact" text="İletişim">
              İletişim
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
