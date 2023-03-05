import React from "react";
import "./footer.scss";
import { Link } from "@react-email/link";
import FacebookIcon from "../../assets/FbIcon.png";
import PhonekIcon from "../../assets/PhoneIcon.png";
import EmailIcon from "../../assets/EmailIcon.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  const Callto = ({ phone, children }) => {
    return <a href={`tel:${phone}`}>{children}</a>;
  };

  return (
    <>
      <footer>
        <div className="top">
          <div className="footer-logo">
            <img className="logo" src={Logo} alt="Logo KÓNYA BOR" />
          </div>

          <div className="adress">
            <h5>ODWIEDŹ NAS</h5>
            <h4>
              Kossuth Lajos utca 111<br></br> Bodrogkeresztúr, Hungary
            </h4>
          </div>
          <div className="contact">
            <div>
              <a href="https://www.facebook.com/profile.php?id=100076293632539">
                <img src={FacebookIcon} />
              </a>
            </div>
            <div>
              <img src={PhonekIcon} />
              <Callto phone="+36 30 415 7026">+36 30 415 7026</Callto>
            </div>
            <div>
              <img src={EmailIcon} />
              <Link href="konya.istvan@vipmail.hu">
                konya.istvan@vipmail.hu
              </Link>
            </div>
          </div>

          <div className="contact-btn">
            <Link>Napisz do nas</Link>
          </div>

          <div className="hours-days">
            <div className="hours">
              <p className="hour">Godziny otwarcia</p>
              <p>10:00 - 20:00</p>
            </div>
            <div className="days">
              <p className="open">P</p>
              <p className="open">W</p>
              <p className="open">Ś</p>
              <p className="open">C</p>
              <p className="open">Pt</p>
              <p className="open">S</p>
              <p className="closed">N</p>
            </div>
          </div>
        </div>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10644.206723161875!2d21.35079955177496!3d48.167085202128426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4738ad5bdbf3b94f%3A0x724feedfa56df9c1!2sK%C3%B3nya%20Bor!5e0!3m2!1spl!2spl!4v1677791108211!5m2!1spl!2spl"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
        <div className="bottom">
          <div>
            <p>KÓNYA BOR © 2023</p>
          </div>
          <div>
            <p>
              Wykonanie:
              <Link href="https://jstankiewicz.pl/">jstankiewicz</Link>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
