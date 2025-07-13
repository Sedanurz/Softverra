import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
      <header>
      {/* Üst Bilgi Barı */}
<div className="rd-navbar-aside-outer softverra-navbar-aside-bg">
  <div className="container">
    <div className="row py-2 align-items-center">
      {/* Sol taraf: Telefon ve Mail */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center mb-2 mb-md-0">
        <div className="d-flex align-items-center contact-info">
          <span className="me-2"><i className="fas fa-phone-alt"></i></span>
          <a href="tel:+902129098742" className="text-white me-3 softverra-link">+90 212 909 87 42</a>
          <span style={{width: "10px", display: "inline-block"}}></span>
          <span className="me-2"><i className="fas fa-envelope"></i></span>
          <a href="mailto:info@softverra.com" className="text-white softverra-link">info@softverra.com</a>
        </div>
      </div>
      {/* Sağ taraf: Sosyal Medya İkonları */}
      <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center align-items-center">
        <div className="d-flex" style={{gap: "1rem"}}>
          <a href="#" className="softverra-social"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="softverra-social"><i className="fab fa-twitter"></i></a>
          <a href="#" className="softverra-social"><i className="fab fa-instagram"></i></a>
          <a href="#" className="softverra-social"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
    </div>
  </div>
  {/* Style - aynı component içinde kullanmak için: */}
  <style>{`
    .softverra-navbar-aside-bg {
      background: linear-gradient(90deg, #22283b 80%, #38ffae 200%);
      border-radius: 0 0 2.2rem 2.2rem;
      box-shadow: 0 4px 32px #38ffae18;
    }
    .contact-info i {
      color: #38ffae;
      opacity: .85;
      font-size: 1rem;
    }
    .softverra-link {
      color: #fff;
      font-weight: 500;
      transition: color .18s;
      text-decoration: none !important;
    }
    .softverra-link:hover,
    .softverra-link:focus {
      color: #38ffae;
      text-decoration: underline !important;
    }
    .softverra-social {
      width: 36px; height: 36px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      background: linear-gradient(135deg, #6366f1 0%, #38ffae 120%);
      color: #fff;
      font-size: 1.15rem;
      box-shadow: 0 1px 12px #23293d10;
      border: none;
      transition: background .23s, color .21s, box-shadow .18s;
      text-decoration: none !important;
    }
    .softverra-social:hover,
    .softverra-social:focus {
      background: linear-gradient(90deg, #38ffae 0%, #6366f1 80%);
      color: #181c23;
      box-shadow: 0 4px 14px #38ffae40, 0 1px 8px #6366f130;
      text-decoration: none !important;
    }
    @media (max-width:991.98px) {
      .softverra-navbar-aside-bg { border-radius: 0 0 1.1rem 1.1rem; }
    }
  `}</style>
</div>



      {/* Logo ve Menü */}
 <nav
  className="navbar navbar-expand-lg"
  style={{
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  }}
>
  <div
    className="container d-flex justify-content-between align-items-center"
    style={{
      maxWidth: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem'
    }}
  >
    {/* Logo */}
    <a className="navbar-brand" href="/">
      <img
        src="images/logo.png"
        alt="Logo"
        className="navbar-logo"
      />
    </a>

    {/* Hamburger Menü */}
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Menü Linkleri */}
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav gap-4 fw-bold text-uppercase">
        <li className="nav-item"><a className="nav-link" href="/Home">ANASAYFA</a></li>
        <li className="nav-item"><a className="nav-link" href="/About">HAKKIMIZDA</a></li>
        <li className="nav-item"><a className="nav-link" href="/Services">HİZMETLER</a></li>
        <li className="nav-item"><a className="nav-link" href="/WhyUs">NEDEN BİZ?</a></li>
        <li className="nav-item"><a className="nav-link" href="/Contacts">İLETİŞİM</a></li>
      </ul>
    </div>
  </div>

  {/* Inline CSS ile logo boyutu ve hover efekti */}
  <style>
    {`
      .navbar-logo {
        height: 170px;   /* Logo yüksekliği 150px */
        width: 170px;
        transition: transform .25s ease;
        margin-top: -40px; /* Logo yukarı kaydırma */
        margin-bottom: -40px; /* Logo aşağı kaydırma */
      }
      .navbar-logo:hover {
        transform: scale(1.1);
      }
    `}
  </style>
</nav>
    </header>
)};
export default Navbar;