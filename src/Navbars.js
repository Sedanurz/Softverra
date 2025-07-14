function Navbars() {
  return (
    <header className="section page-header">
        {/* RD Navbar*/}
        <div className="rd-navbar-wrap">
          <nav className="rd-navbar rd-navbar-corporate" data-layout="rd-navbar-fixed" data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed" data-lg-layout="rd-navbar-static" data-lg-device-layout="rd-navbar-static" data-lg-stick-up="true" data-lg-stick-up-offset="118px" data-xl-layout="rd-navbar-static" data-xl-device-layout="rd-navbar-static" data-xl-stick-up="true" data-xl-stick-up-offset="118px" data-xxl-layout="rd-navbar-static" data-xxl-device-layout="rd-navbar-static" data-xxl-stick-up-offset="118px" data-xxl-stick-up="true">
            <div className="rd-navbar-aside-outer softverra-navbar-aside-bg">
              <div className="rd-navbar-aside py-2">
                {/* RD Navbar Panel*/}
                <div className="row d-flex align-items-center justify-content-between" />
                <div className="rd-navbar-panel">
                  <button className="rd-navbar-toggle" data-rd-navbar-toggle="#rd-navbar-nav-wrap-1"><span /></button>
                  <a className="rd-navbar-brand" href="index.html">
                    <img src="images/logo-default-151x44.png" alt="" />
                  </a>
                </div>
                {/* Sol Taraf: Yazı */}
                <div className="col-6 text-start">
                  <div className="d-flex align-items-center mt-1 contact-info">
                    <span className="me-2"><i className="fas fa-phone-alt" /></span>
                    <a href="tel:+90 212 909 87 42" className="text-white me-3 softverra-link">+90 212 909 87 42</a>
                    <span style={{width: '10px', display: 'inline-block'}} />
                    <span className="me-2"><i className="fas fa-envelope" /></span>
                    <a href="mailto:info@softverra.com" className="text-white softverra-link">info@softverra.com</a>
                  </div>
                </div>
                {/* Sağ Taraf: Sosyal Medya İkonları */}
                <div className="col-6 d-flex justify-content-end align-items-center">
                  <div className="d-flex" style={{gap: '1rem'}}>
                    <a href="#" className="softverra-social"><i className="fab fa-facebook-f" /></a>
                    <a href="#" className="softverra-social"><i className="fab fa-twitter" /></a>
                    <a href="#" className="softverra-social"><i className="fab fa-instagram" /></a>
                    <a href="#" className="softverra-social"><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
              <style dangerouslySetInnerHTML={{__html: "\n    .softverra-navbar-aside-bg {\n      background: linear-gradient(90deg, #22283b 80%, #38ffae 200%);\n      border-radius: 0 0 2.2rem 2.2rem;\n      box-shadow: 0 4px 32px #38ffae18;\n    }\n    .rd-navbar-aside {\n      background: transparent !important;\n      color: #fff;\n    }\n    .rd-navbar-panel .rd-navbar-brand img {\n      filter: drop-shadow(0 0 12px #38ffae33);\n      max-height: 48px;\n    }\n    .contact-info i {\n      color: #38ffae;\n      opacity: .85;\n      font-size: 1rem;\n    }\n    .softverra-link {\n      color: #fff;\n      font-weight: 500;\n      transition: color .18s;\n    }\n    .softverra-link:hover,\n    .softverra-link:focus {\n      color: #38ffae;\n      text-decoration: underline;\n    }\n    .softverra-social {\n      width: 36px; height: 36px;\n      border-radius: 50%;\n      display: flex; align-items: center; justify-content: center;\n      background: linear-gradient(135deg, #6366f1 0%, #38ffae 120%);\n      color: #fff;\n      font-size: 1.15rem;\n      box-shadow: 0 1px 12px #23293d10;\n      border: none;\n      transition: background .23s, color .21s, box-shadow .18s;\n    }\n    .softverra-social:hover,\n    .softverra-social:focus {\n      background: linear-gradient(90deg, #38ffae 0%, #6366f1 80%);\n      color: #181c23;\n      box-shadow: 0 4px 14px #38ffae40, 0 1px 8px #6366f130;\n      text-decoration: none;\n    }\n    @media (max-width:991.98px) {\n      .softverra-navbar-aside-bg { border-radius: 0 0 1.1rem 1.1rem; }\n    }\n  " }} />
            </div>
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main d-flex align-items-center justify-content-between">
                {/* LOGO */}
                <div className="rd-navbar-brand me-4">
                  <a href="index.html"><img src="images/a123.jpg" alt="" width={225} height={75} /></a>
                </div>
                {/* NAVIGATION */}
               
              </div>
            </div>
          </nav>
        </div>
      </header>
  );
}
export default Navbars;