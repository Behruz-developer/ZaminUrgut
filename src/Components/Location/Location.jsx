/* eslint-disable react/no-unescaped-entities */
import universal from "../../assets/images/joylashgan.png";

const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location_box">

          <div className="location_card1" data-aos="fade-right" data-aos-offset="-200">
            <h3 className="location_title">Joylashgan o`rni</h3>
            <p className="location_text">
              Zamin — bu nafaqat zamonaviy xonadonlar, balki shahar yuragida joylashgan qulaylik va imkoniyatlar markazi. Loyiha sizning har bir kuningizni yengillashtirish va yanada boyitish uchun moʻljallangan.            </p>
            <p className="location_text">
            Majmuamiz shahar markaziga yaqin joylashgan boʻlib, bu sizning barcha muhim maskanlarga oson va tez yetib borishingizni taʼminlaydi. Ijtimoiy infratuzilma, ish joylari, savdo markazlari va koʻngilochar maskanlar — barchasi sizning atrofingizda!            </p>
          </div>
          <div className="location_card_left" data-aos="fade-left" data-aos-offset="-200">
            <img src={universal} alt="" className="location_img" />
          </div>
          <div className="location_card2" data-aos="fade-right" data-aos-offset="-200">
            <p className="location_text2">
              Central Avenue — Rivojlangan shahar infratuzilmasi qulayliklari va toza
              havoni bir yerda jamlagan turar-joy majmuasi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
