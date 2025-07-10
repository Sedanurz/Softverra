function Footer() {
  return (
    <footer className="section novi-background bg-gray-700 text-white py-5" id="footer">
            <div className="container">
              <div className="row gy-4">
                {/* Sol: Logo + Açıklama + Sosyal Medya */}
                <div className="col-lg-5 col-md-12">
                  <a href="index.html" className="d-flex align-items-center mb-2">
                    <span className="h4 mb-0 text-white fw-bold">SOFTVERRA</span>
                  </a>
                  <p className="mb-3">Esnek, güvenilir ve profesyonel çözümlerle işinizi büyütüyor, kadronuzu güçlendiriyoruz.</p>
                  <div className="d-flex" style={{gap: '1rem'}}>
                    <a href="#" className="social-icon"><i className="fab fa-facebook-f" /></a>
                    <a href="#" className="social-icon"><i className="fab fa-twitter" /></a>
                    <a href="#" className="social-icon"><i className="fab fa-instagram" /></a>
                    <a href="#" className="social-icon"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
                {/* Orta: Menü */}
                <div className="col-lg-2 col-6">
                  <h5 className="fw-bold text-white mb-3">Hızlı Bağlantı</h5>
                  <ul className="list-unstyled">
                    <li><a className="text-white-50" href="#">Anasayfa</a></li>
                    <li><a className="text-white-50" href="#">Hakkımızda</a></li>
                    <li><a className="text-white-50" href="#">Hizmetlerimiz</a></li>
                    <li><a className="text-white-50" href="#">İletişim</a></li>
                  </ul>
                </div>
                {/* Orta: Hizmetler */}
                <div className="col-lg-2 col-6">
                  <h5 className="fw-bold text-white mb-3">Hizmetlerimiz</h5>
                  <ul className="list-unstyled">
                    <li><a className="text-white-50" href="#">Bordrolama</a></li>
                    <li><a className="text-white-50" href="#">İK Temini</a></li>
                    <li><a className="text-white-50" href="#">Danışmanlık</a></li>
                    <li><a className="text-white-50" href="#">Eğitim Teknolojileri</a></li>
                    <li><a className="text-white-50" href="#">Outsourcing</a></li>
                  </ul>
                </div>
                {/* Sağ: İletişim */}
                <div className="col-lg-3 col-md-12 text-center text-lg-start">
                  <h5 className="fw-bold text-white mb-3">Bize Ulaşın</h5>
                  <p className="mb-1"><i className="mdi mdi-map-marker me-2" />Yıldız Teknik Teknopark</p>
                  <p className="mb-1">Davutpaşa Caddesi, 34220</p>
                  <p className="mb-1">Esenler / İstanbul</p>
                  <div className="d-flex align-items-center mt-1 contact-info">
                    <span className="me-2"><i className="fas fa-phone-alt" /></span>
                    <a href="tel:+1234567890" className="text-white">+1 234 567 890</a>
                    <span style={{width: '40px', display: 'inline-block'}} /> {/* Telefon ve mail arası boşluk */}
                    <span className="me-2"><i className="fas fa-envelope" /></span>
                    <a href="mailto:info@inhouse.com" className="text-white">info@inhouse.com</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Alt */}
            <div className="container mt-4 text-center border-top pt-3">
              <p className="mb-0">© 2025 Tüm Hakları Saklıdır.</p>
              <div className="credits">
                Designed by <a href="#" className="text-white">SBM</a>
              </div>
            </div>
          </footer>
  )};
  export default Footer;