function Footer() {
  return (
   

      <footer className="section novi-background softverra-footer text-white py-5" id="footer">
        <div className="container">
          <div className="row gy-4">
            {/* Sol: Logo + Açıklama + Sosyal Medya */}
            <div className="col-lg-5 col-md-12">
              <a href="index.html" className="d-flex align-items-center mb-2">
                <span className="h4 mb-0 text-white fw-bold softverra-logo-glow">SOFTVERRA</span>
              </a>
              <p className="mb-3">Esnek, güvenilir ve profesyonel çözümlerle işinizi büyütüyor, kadronuzu güçlendiriyoruz.</p>
              <div className="d-flex" style={{gap: '1rem'}}>
                <a href="#" className="softverra-social"><i className="fab fa-facebook-f" /></a>
                <a href="#" className="softverra-social"><i className="fab fa-twitter" /></a>
                <a href="#" className="softverra-social"><i className="fab fa-instagram" /></a>
                <a href="#" className="softverra-social"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
            {/* Orta: Menü */}
            <div className="col-lg-2 col-6">
              <h5 className="fw-bold mb-3 softverra-footer-title">Hızlı Bağlantı</h5>
              <ul className="list-unstyled">
                <li><a className="text-white-50 footer-link" href="/Home">Anasayfa</a></li>
                <li><a className="text-white-50 footer-link" href="/About">Hakkımızda</a></li>
                <li><a className="text-white-50 footer-link" href="/Services">Hizmetlerimiz</a></li>
                <li><a className="text-white-50 footer-link" href="/Contact">İletişim</a></li>
              </ul>
            </div>
            {/* Orta: Hizmetler */}
            <div className="col-lg-2 col-6">
              <h5 className="fw-bold mb-3 softverra-footer-title">Hizmetlerimiz</h5>
              <ul className="list-unstyled">
                <li><a className="text-white-50 footer-link" href="/Services">Bordrolama</a></li>
                <li><a className="text-white-50 footer-link" href="/Services">İK Temini</a></li>
                <li><a className="text-white-50 footer-link" href="/Services">Danışmanlık</a></li>
                <li><a className="text-white-50 footer-link" href="/Services">Eğitim Teknolojileri</a></li>
                <li><a className="text-white-50 footer-link" href="/Services">Outsourcing</a></li>
              </ul>
            </div>
            {/* Sağ: İletişim */}
            <div className="col-lg-3 col-md-12 text-center text-lg-start">
              <h5 className="fw-bold mb-3 softverra-footer-title">Bize Ulaşın</h5>
              <p className="mb-1"><i className="mdi mdi-map-marker me-2" />Esentepe Mah. Büyükdere Cad.</p>
              <p className="mb-1">LOFT Rezidans A Blok No:201/40</p>
              <p className="mb-1">Şişli / İstanbul</p>
              <div className="d-flex align-items-center mt-1 contact-info">
                <span className="me-2"><i className="fas fa-phone-alt" /></span>
                <a href="tel:+1234567890" className="text-white footer-link">+90 212 909 87 42</a>
                <span style={{width: '40px', display: 'inline-block'}} />
                <span className="me-2"><i className="fas fa-envelope" /></span>
                <a href="mailto:info@inhouse.com" className="text-white footer-link">info@softverra.com</a>
              </div>
            </div>
          </div>
        </div>
        {/* Alt */}
        <div className="container mt-4 text-center border-top pt-3 softverra-footer-bottom">
          <p className="mb-0">© 2025 <span className="softverra-logo-glow">Softverra</span> Tüm Hakları Saklıdır.</p>
          <div className="credits">
            Designed by <a href="#" className="text-white-50">SBM</a>
          </div>
        </div>
<style dangerouslySetInnerHTML={{__html: `
  .softverra-footer {
    background: linear-gradient(120deg, #23293d 60%, #38ffae 210%);
    color: #fff;
    border-radius: 0;
    box-shadow: 0 -2px 32px #38ffae14;
    letter-spacing: 0.01em;
  }
  .softverra-footer-title {
    color: #38ffae;
    letter-spacing: .5px;
    text-shadow: 0 1px 8px #38ffae2b;
  }
  .softverra-logo-glow {
    color: #38ffae;
    text-shadow: 0 4px 32px #38ffae45, 0 1px 1px #23293dbb;
    font-weight: 800;
    letter-spacing: 1.2px;
  }
  .softverra-social {
    width: 38px; height: 38px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    background: linear-gradient(135deg,#6366f1 0%, #38ffae 120%);
    color: #fff; font-size: 1.23rem;
    box-shadow: 0 1px 10px #23293d10;
    transition: background .22s, color .22s, box-shadow .22s;
    text-decoration: none !important;
  }
  .softverra-social:hover {
    background: linear-gradient(90deg, #38ffae 0%, #6366f1 80%);
    color: #23293d;
    box-shadow: 0 2px 14px #38ffae55, 0 1px 8px #6366f122;
    text-decoration: none !important;
  }
  .footer-link {
    transition: color .19s;
    text-decoration: none !important;
  }
  .footer-link:hover {
    color: #38ffae !important;
    text-decoration: none !important;
  }
  .softverra-footer-bottom {
    border-color: #38ffae44 !important;
    color: #b8ffe3;
    font-size: .98rem;
    letter-spacing: 0.02em;
  }
  .credits a {
    color:#38ffae !important;
    text-decoration: none !important;
  }
  .credits a:hover {
    color:#38ffae !important;
    text-decoration: none !important;
  }
  @media (max-width: 767.98px) {
    .softverra-footer { padding: 2.3rem 0 1.2rem 0; }
  }
`}} />
      </footer>
    
  );
}
export default Footer;