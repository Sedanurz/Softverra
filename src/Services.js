import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Services(){
return (
    
      <div>
        <Navbar />
          {/* Breadcrumbs */}
        <section className="section novi-background breadcrumbs-custom bg-image context-dark" style={{backgroundImage: 'url(images/breadcrumbs-image-1.jpg)', position: 'relative', overflow: 'hidden'}}>
          {/* Blur overlay */}
          <div style={{position: 'absolute', inset: 0, width: '100%', height: '100%', backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.3)', zIndex: 1}} />
          <div className="breadcrumbs-custom-inner" style={{position: 'relative', zIndex: 2}}>
            <div className="container breadcrumbs-custom-container">
              <div className="breadcrumbs-custom-main">
          
                <h2 className="text-uppercase breadcrumbs-custom-title text-center" style={{color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)', marginTop: '1rem'}}>HİZMETLER</h2></div>
              <div className="text-center mt-4">
                <h3 className="fw-bold" style={{color: '#b3b7b3'}}>Softverra ile hizmetlerinizi kaliteleştirin.</h3>
              </div>
              <ul className="breadcrumbs-custom-path text-center">
                <li><a href="index.html">Anasayfa</a></li>
                <li className="active">Hizmetler</li>
              </ul>
            </div>
          </div>
        </section>
        <div className="mt-5" />
        <div className="text-center mb-5">
          <h2 className="text-uppercase fw-bold display-6 text-center mb-4">
            <span className="softverra-gradient-text">HİZMETLER</span>
          </h2>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n.softverra-gradient-text {\n  background: linear-gradient(90deg, #38ffae 20%, #6366f1 0%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  font-weight: 800;\n  letter-spacing: .8px;\n}\n" }} />
        <div>
          <section className="container my-5">
            {/* Büyük kart */}
            <div className="row mt-4 justify-content-center">
              <div className="col-12">
                <div className="card shadow-lg border-0 softverra-gradient-card text-white overflow-hidden" style={{minHeight: '260px'}}>
                  <div className="row g-0 align-items-center">
                    {/* Sol Resim Alanı */}
                    <div className="col-md-4 d-none d-md-block">
                      <img src="images/ChatGPT Image 11 Tem 2025 00_40_35.png" alt="Personel Hizmeti" className="img-fluid h-100 w-100 object-fit-cover" style={{minHeight: '260px', objectFit: 'cover', filter: 'brightness(0.89)'}} />
                    </div>
                    {/* Sağ Metin Alanı */}
                    <div className="col-md-8 p-4">
                      <h4 className="card-title fw-bold mb-3" style={{letterSpacing: '.5px', fontSize: '1.5rem'}}>
                        Personel Hizmeti <span className="fw-normal" style={{opacity: '.7', color: '#38ffae'}}>(Outsourcing)</span>
                      </h4>
                      <p className="card-text mb-4" style={{fontSize: '1.06rem', lineHeight: '1.6'}}>
                        <span className="fw-semibold" style={{fontSize: '1.08rem'}}>İşinizin Yükünü Hafifletiyoruz, Ekibinizi Güçlendiriyoruz.</span><br />
                        Softverra olarak, bilişim sektöründe uzmanlaşmış insan kaynağını sizin adınıza yönetiyor, bordrosu bizim üzerimizde olan profesyonelleri ihtiyaç duyduğunuz alanlarda görevlendiriyor, işinizin yükünü hafifletip, ekibinizi güçlendiriyoruz.
                      </p>
                      <div className="feature-badges mt-3 d-flex flex-column gap-3">
                        <div className="feature-chip px-3 py-2 d-flex align-items-center">
                          <span className="feature-icon me-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-clock" />
                          </span>
                          <span className="small fw-medium">Personel yönetimiyle vakit kaybetmezsiniz</span>
                        </div>
                        <div className="feature-chip px-3 py-2 d-flex align-items-center">
                          <span className="feature-icon me-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-file-invoice" />
                          </span>
                          <span className="small fw-medium">SGK, bordro, izin gibi yasal süreçlerle uğraşmazsınız</span>
                        </div>
                        <div className="feature-chip px-3 py-2 d-flex align-items-center">
                          <span className="feature-icon me-2 d-flex align-items-center justify-content-center">
                            <i className="fas fa-bolt" />
                          </span>
                          <span className="small fw-medium">Esnek, hızlı ve güvenilir bir çözümle ekibinizi büyütürsünüz</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <style dangerouslySetInnerHTML={{__html: "\n.softverra-gradient-card {\n  /* KART ARKAPLANI - Gradient ve soft glow */\n  background: linear-gradient(108deg, #23293d 67%, #38ffae 120%);\n  border-radius: 2rem;\n  box-shadow: 0 8px 40px 0 #38ffae23, 0 2px 16px 0 #6366f133;\n  border: 0;\n  overflow: hidden;\n  position: relative;\n}\n.softverra-gradient-card .card-title {\n  color: #fff;\n  text-shadow: 0 2px 10px #23293da1, 0 1px 1px #38ffae44;\n}\n.feature-chip {\n  background: linear-gradient(90deg, rgba(56,255,174,0.12) 40%, rgba(99,102,241,0.13) 100%);\n  border-radius: 1.3rem;\n  color: #fff;\n  font-size: 1.03rem;\n  font-weight: 500;\n  box-shadow: 0 2px 8px #23293d14;\n  border: 1px solid rgba(56,255,174,0.07);\n  transition: background .24s, box-shadow .18s;\n}\n.feature-chip:hover {\n  background: linear-gradient(90deg, #38ffae 30%, #6366f1 120%);\n  color: #23293d;\n  box-shadow: 0 8px 18px 0 #6366f1a7;\n}\n.feature-icon {\n  width: 2.3rem;\n  height: 2.3rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #6366f1 20%, #38ffae 120%);\n  color: #fff;\n  font-size: 1.22rem;\n  box-shadow: 0 2px 8px 0 #38ffae18;\n  transition: background .2s, color .2s;\n  flex-shrink: 0;\n  justify-content: center;\n}\n.feature-chip:hover .feature-icon {\n  background: #fff;\n  color: #38ffae;\n}\n@media (max-width: 991.98px) {\n  .softverra-gradient-card { border-radius: 1.1rem;}\n}\n" }} />
            {/* Font Awesome CDN (Zaten varsa tekrar eklemene gerek yok!) */}
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
            {/* Özelleştirilmiş Badge Stilleri */}
            <style dangerouslySetInnerHTML={{__html: "\n.feature-badges .feature-chip {\n  transition: background .2s, box-shadow .2s, transform .2s;\n  box-shadow: 0 2px 12px 0 rgba(56,255,174,0.08);\n  border: 1px solid rgba(255,255,255,0.08);\n}\n.feature-badges .feature-chip:hover {\n  background: #38ffae22;\n  box-shadow: 0 4px 18px 0 #38ffae33;\n  transform: scale(1.035);\n}\n.feature-badges .feature-icon {\n  font-size: 1.1rem;\n  transition: background .19s;\n}\n" }} />
            <div className="container py-4">
              <div className="row g-4 justify-content-center">
                {/* 1. Kart: Degrade ve Yarım Oval Köşe */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 text-center shadow-sm p-4" style={{background: 'linear-gradient(120deg, #e0eaff 60%, #fff 100%)', borderRadius: '2rem 1.5rem 3rem 1rem'}}>
                    <div className="mb-3" style={{fontSize: '2.3rem', color: '#2d6ae0', background: '#f5fafd', borderRadius: '50%', width: '58px', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', boxShadow: '0 2px 10px #d6e4ff77'}}>
                      <i className="fas fa-users" />
                    </div>
                    <h5 className="card-title fw-bold mb-2 softverra-gradient-text" style={{fontSize: '1.14rem'}}>
                      Bilişim İnsan Kaynakları Danışmanlığı
                    </h5>
                    <p className="card-text mb-0 small" style={{color: '#2d3453'}}>
                      Yazılım, sistem, siber güvenlik, dijital pazarlama ve diğer IT alanlarında doğru uzmanları projelerinize entegre ediyoruz.
                    </p>
                  </div>
                </div>
                <style dangerouslySetInnerHTML={{__html: "\n.softverra-gradient-text {\n  background: linear-gradient(90deg, #38ffae 20%, #6366f1 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  font-weight: 800;\n  letter-spacing: .8px;\n}\n" }} />
                {/* 2. Kart: Renk Bloğu & Sol Üst Köşe Yuvarlak */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 text-center shadow-sm p-4" style={{background: '#f6f3fe', borderRadius: '3rem 1rem 1.7rem 2rem', boxShadow: '0 8px 32px #e2e2fd33'}}>
                    <div className="mb-3" style={{fontSize: '2.3rem', color: '#fff', background: 'linear-gradient(135deg,#6366f1 55%,#818cf8 100%)', borderRadius: '40% 50% 35% 65% / 45% 55% 55% 45%', width: '58px', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
                      <i className="fas fa-laptop-code" />
                    </div>
                    <h5 className="card-title fw-bold mb-2 softverra-gradient-text" style={{fontSize: '1.14rem'}}>
                      Bilişim / Yazılım Danışmanlığı
                    </h5>
                    <p className="card-text mb-0 small" style={{color: '#2d3453'}}>
                      Şirketlerin teknik altyapılarını analiz ediyor, doğru teknolojik çözümleri sunuyoruz.
                    </p>
                  </div>
                </div>
                {/* Zaten eklediysen tekrar ekleme! */}
                <style dangerouslySetInnerHTML={{__html: "\n.softverra-gradient-text {\n  background: linear-gradient(90deg, #38ffae 20%, #6366f1 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  font-weight: 800;\n  letter-spacing: .8px;\n}\n" }} />
                {/* 3. Kart: Kenarlıklı, Sola Dalgalı ve Mint Renk Detay */}
                <div className="col-12 col-md-4">
                  <div className="card h-100 border-0 text-center shadow-sm p-4 position-relative" style={{background: '#f9fefd', border: '2.5px solid #38d9a966', borderRadius: '1.5rem 3rem 1.5rem 1.5rem'}}>
                    <div style={{position: 'absolute', left: '-18px', top: '-18px', zIndex: 0}}>
                      <svg width={70} height={70}><ellipse cx={30} cy={36} rx={30} ry={24} fill="#38d9a912" /></svg>
                    </div>
                    <div className="mb-3 position-relative" style={{fontSize: '2.3rem', color: '#38d9a9', background: '#e9fbf4', borderRadius: '35% 65% 60% 40% / 50% 60% 40% 50%', width: '58px', height: '58px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto', boxShadow: '0 1px 7px #9afbd977'}}>
                      <i className="fas fa-chalkboard-teacher" />
                    </div>
                    <h5 className="card-title fw-bold mb-2 softverra-gradient-text" style={{fontSize: '1.14rem'}}>
                      Eğitim Danışmanlığı
                    </h5>
                    <p className="card-text mb-0 small" style={{color: '#2d3453'}}>
                      Kurum içi teknoloji eğitimleri, özel yazılım bootcamp’leri ve dijital yetkinlik gelişim programları hazırlıyoruz.
                    </p>
                  </div>
                </div>
                {/* Gradient text stilini eklediysen tekrar eklemene gerek yok */}
                <style dangerouslySetInnerHTML={{__html: "\n.softverra-gradient-text {\n  background: linear-gradient(90deg, #38ffae 20%, #6366f1 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  text-fill-color: transparent;\n  font-weight: 800;\n  letter-spacing: .8px;\n}\n" }} />
              </div>
              {/* Font Awesome CDN (sayfanda yoksa ekle!) */}
              <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
            </div>
          </section>
          <div className="container py-5">
            <div className="row g-4 justify-content-center align-items-stretch">
              {/* Nasıl Çalışır? (Mint ve Lacivert tonlu kart) */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border-0 shadow-lg rounded-4 text-white bg-dark position-relative p-0 overflow-hidden" style={{background: 'linear-gradient(135deg,#23293d 65%, #38ffae 150%)'}}>
                  <div className="p-4 text-center">
                    <div className="mb-2" style={{fontSize: '2.35rem'}}>
                      <span className="badge-circle mx-auto d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', padding: 0, background: 'linear-gradient(135deg,#38ffae 30%,#23293d 100%)', border: 0}}>
                        <i className="fas fa-people-group" />
                      </span>
                    </div>
                    <h5 className="fw-bold mt-2 mb-2 softverra-gradient-text" style={{fontSize: '1.18rem'}}>Nasıl Çalışır? <span className="fw-normal" style={{opacity: '.6'}} /></h5><br />
                    <div className="mb-2 small" style={{fontWeight: 600, color: '#fff'}}> <strong>İhtiyacınızı Dinliyoruz:</strong> Projeniz veya süreciniz için gerekli teknik rol ve yetkinlikleri belirliyoruz.</div>
                    <div className="mb-2 small" style={{fontWeight: 600, color: '#fff'}}> <strong>Doğru Adayları Seçiyoruz: </strong> Sektörde deneyimli uzmanlarımızı, sizinle uyumlu olacak şekilde seçiyoruz.</div>
                    <div className="mb-2 small" style={{fontWeight: 600, color: '#fff'}}> <strong>Bizim Kadromuz, Sizin Ekip Arkadaşınız: </strong> Personel tüm bordro ve yasal işlemleriyle Softverra’ya bağlı olur ama fiilen sizin işiniz için çalışır.</div>
                    <div className="text-start small bg-white bg-opacity-10  ">
                    </div>
                  </div>
                </div>
              </div>
              {/* Hangi Alanlarda? (Gradient Mavi-Mint Kart) */}
              <div className="col-12 col-md-6">
                <div className="card h-100 border-0 shadow-lg rounded-4 text-white position-relative p-0 overflow-hidden" style={{background: 'linear-gradient(110deg, #6366f1 50%, #38ffae 110%)'}}>
                  <div className="p-4 text-center">
                    <div className="mb-2" style={{fontSize: '2.35rem'}}>
                      <span className="badge-circle mx-auto d-flex align-items-center justify-content-center" style={{width: '60px', height: '60px', padding: 0, background: 'linear-gradient(135deg,#6366f1 60%,#38ffae 100%)', border: 0}}>
                        <i className="fas fa-bullseye" />
                      </span>
                    </div>
                    <h5 className="fw-bold mt-2 mb-2 softverra-gradient-text" style={{fontSize: '1.18rem'}}>Hangi Alanlarda?</h5>
                    <div className="mb-2 small" style={{fontWeight: 600}}>İhtiyacınız olan her IT uzmanlığı, Softverra ile ulaşabileceğiniz bir telefon uzağınızda.</div>
                    <div className="mb-3" style={{fontSize: '.98rem'}}>
                      <span style={{color: '#fff', fontWeight: 500}}>Uzmanlıklar:</span>
                    </div>
                    <div className="text-start small bg-white bg-opacity-10 rounded-3 p-3 mb-0 mx-auto" style={{maxWidth: '340px'}}>
                      <span className="badge bg-primary bg-opacity-75 mb-2" style={{color: '#fff', background: '#6366f1'}}>Uzmanlıklar</span>
                      <div className="lh-base" style={{color: '#fff'}}>
                        • Yazılım Geliştirici (Frontend, Backend, Full Stack)<br />
                        • Sistem Yöneticisi ve Network Uzmanları<br />
                        • QA / Test Uzmanları<br />
                        • Proje Yöneticileri ve Agile Koçları<br />
                        • Eğitim ve Destek Personeli
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Softverra Renk & Badge Stilleri */}
            <style dangerouslySetInnerHTML={{__html: "\n    .badge-circle {\n      width: 56px;\n      height: 56px;\n      background: linear-gradient(135deg, #23293d 55%, #38ffae 105%);\n      border-radius: 50%;\n      color: #fff;\n      font-size: 2.1rem;\n      box-shadow: 0 4px 18px 0 #38ffae22;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      border: 2px solid #fff;\n      margin-bottom: 10px;\n      transition: box-shadow .18s, transform .18s;\n    }\n    .badge-circle i { font-size: 1.55em; }\n    .badge-circle:hover { box-shadow:0 8px 32px 0 #6366f144; transform:scale(1.07);}\n    .softverra-gradient-text {\n      background: linear-gradient(90deg, #38ffae 20%, #6366f1 100%);\n      -webkit-background-clip: text;\n      -webkit-text-fill-color: transparent;\n      background-clip: text;\n      text-fill-color: transparent;\n      font-weight: 800;\n      letter-spacing: .8px;\n    }\n    .card.rounded-4 { border-radius:1.4rem !important; }\n    .card .badge { font-size:.98rem; letter-spacing:.02em;}\n    @media (max-width: 991.98px) {\n      .card.rounded-4 { border-radius:1rem !important;}\n    }\n    @media (max-width: 767.98px) {\n      .card.rounded-4 { border-radius:0.8rem !important;}\n      .card { margin-bottom: 1.2rem;}\n    }\n    .card.text-dark .badge.bg-primary {\n      background: #6366f1 !important;\n    }\n    .card { margin-bottom:1rem;}\n  " }} />
            <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center my-5">
          <div className="softverra-badge text-center position-relative">
            <div className="badge-circle d-flex flex-column justify-content-center align-items-center mx-auto mb-3">
              <span className="fw-bold" style={{fontSize: '1.18rem', lineHeight: '1.45'}}>
                Softverra ile <span style={{color: '#38ffae'}}>riski azaltın</span>,<br />
                <span style={{color: '#6366f1'}}>esnekliği artırın.</span><br />
                <small className="d-block mt-2 fw-normal text-white-50" style={{fontSize: '1.02rem'}}>
                  Gelin, insan kaynağı yükünüzü biz üstlenelim;<br />
                  <span className="text-white">siz işinize&nbsp;odaklanın.</span>
                </small>
              </span>
            </div>
            <a href="/contacts.html" className="btn btn-lg btn-gradient-softverra px-4 rounded-pill fw-bold shadow" style={{letterSpacing: '.5px'}}>
              Hemen Bilgi Al
            </a>
          </div>
        </div>
        
      <style dangerouslySetInnerHTML={{__html: "\n.badge-circle {\n  width: 270px;\n  height: 270px;\n  background: linear-gradient(135deg, #23293d 55%, #38ffae 105%);\n  border-radius: 50%;\n  box-shadow: 0 6px 38px 0 #38ffae22, 0 2px 12px 0 #23293d88;\n  color: #fff;\n  padding: 2.5rem 1.5rem;\n  margin-bottom: 1.7rem;\n  position: relative;\n  border: 4px solid #fff;\n  transition: box-shadow .25s, transform .25s;\n}\n.badge-circle:hover {\n  box-shadow: 0 12px 48px 0 #38ffae44, 0 4px 18px 0 #23293dcc;\n  transform: scale(1.03) rotate(-1deg);\n}\n.btn-gradient-softverra {\n  background: linear-gradient(90deg, #38ffae 12%, #6366f1 100%);\n  color: #fff;\n  border: none;\n  transition: background .2s, box-shadow .2s, color .18s;\n  box-shadow: 0 4px 18px 0 #38ffae22;\n}\n.btn-gradient-softverra:hover, .btn-gradient-softverra:focus {\n  background: linear-gradient(90deg, #6366f1 10%, #38ffae 90%);\n  color: #fff;\n  box-shadow: 0 6px 30px 0 #6366f122;\n  text-decoration: none;\n}\n@media (max-width: 575.98px) {\n  .badge-circle {\n    width: 95vw;\n    max-width: 330px;\n    height: 220px;\n    padding: 1.2rem 1rem;\n    font-size: .98rem;\n  }\n}\n" }} />
   
        <Footer/>
      </div>
    
    );
}
export default Services;