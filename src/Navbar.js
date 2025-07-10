import { FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
  return (
      <header>
      {/* Üst Bilgi Barı */}
    <div className="rd-navbar-aside-outer border-bottom" style={{ background: "#255115ed", color: "#fff" }}>
  <div className="container">
    <div className="row align-items-center py-2">
      {/* Sol: Telefon & Mail */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-start justify-content-center ps-md-3">
        <span className="me-4">
          <i className="fas fa-phone-alt me-2" />
          <a href="tel:+1234567890" className="text-white text-decoration-none">+1 234 567 890</a>
        </span>
        <span className="me-4">
          <i className="fas fa-envelope me-2" />
          <a href="mailto:info@inhouse.com" className="text-white text-decoration-none">info@inhouse.com</a>
        </span>
      </div>
      {/* Sağ: Sosyal */}
      <div className="col-12 col-md-6 d-flex align-items-center justify-content-md-end justify-content-center mt-2 mt-md-0 pe-md-3">
        <div style={{ display: "flex", gap: "1.2rem" }}>
          <a href="#" className="social-icon text-white fs-5"><i className="fab fa-facebook-f" /></a>
          <a href="#" className="social-icon text-white fs-5"><i className="fab fa-twitter" /></a>
          <a href="#" className="social-icon text-white fs-5"><i className="fab fa-instagram" /></a>
          <a href="#" className="social-icon text-white fs-5"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
    </div>
  </div>
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
        width: 200px;
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