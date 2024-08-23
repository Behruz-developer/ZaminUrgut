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
              Majmua Namangan shahrida qurilmoqda, qulay joylashuv nafaqat shahar markaziga yaqinlikni, balki turli xizmatlar, doʻkonlar va dam olish maskanlarining ham qoʻl ostida boʻlishini taʼminlaydi. Bu yerda siz barcha qulayliklardan bahramand boʻlasiz.
            </p>
            <p className="location_text">
              Oilangiz bilan qulay va osoyishta hayot kechirish uchun eng yaxshi joy! Farzandlaringiz maktabga yaqin, siz esa barcha zarur xizmatlarga osongina yetib borishingiz mumkin.
            </p>
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
