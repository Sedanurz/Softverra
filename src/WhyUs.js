import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import Footer from './Footer';
function WhyUs() {
 return (
  
 
  
      <div className="page">
        {/* Page Header*/}
        <Navbar />
        {/* Breadcrumbs */}
        <section className="section novi-background breadcrumbs-custom bg-image context-dark" style={{backgroundImage: 'url(images/breadcrumbs-image-1.jpg)', position: 'relative', overflow: 'hidden'}}>
          {/* Blur overlay */}
          <div style={{position: 'absolute', inset: 0, width: '100%', height: '100%', backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.3)', zIndex: 1}} />
          <div className="breadcrumbs-custom-inner" style={{position: 'relative', zIndex: 2}}>
            <div className="container breadcrumbs-custom-container">
              <div className="breadcrumbs-custom-main">
          
                <h2 className="text-uppercase breadcrumbs-custom-title text-center" style={{color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)', marginTop: '1rem'}}>NEDEN SOFTVERRA?</h2></div>
              <div className="text-center mt-4">
                <h3 className="fw-bold" style={{color: '#b3b7b3'}}>Softverra ile işinizi büyütün, kadronuzu güçlendirin.</h3>
              </div>
              <ul className="breadcrumbs-custom-path text-center">
                <li><a href="index.html">Anasayfa</a></li>
                <li className="active">NEDEN BİZ?</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Biz Kimiz Bölümü */}
        <section className="section section-lg bg-white wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            {/* Üst: Başlık ve Alt Başlık Ortalanmış */}
            <div className="text-center mb-5">
              <h2 className="text-uppercase fw-bold display-6 text-center mb-4">
                <span className="text-success">ALANINDA UZMAN KADRO
                </span></h2>
            </div>
            <div className="row justify-content-center">
            {/* Uzman Kadro Kartları */}
            <div className="row justify-content-center mb-5">
              {/* Kişi 1 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center shadow border-0 p-3">
                  <img src="images/person1.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 1" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">Ahmet Yılmaz</h5>
                    <p className="card-text text-muted mb-2">Yazılım Mühendisi</p>
                    <p className="small mb-3">10+ yıl deneyimli, .NET ve bulut teknolojilerinde uzman.</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                      <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                      <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kişi 2 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center shadow border-0 p-3">
                  <img src="images/person2.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 2" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">Elif Demir</h5>
                    <p className="card-text text-muted mb-2">Proje Yöneticisi</p>
                    <p className="small mb-3">Agile ve Scrum metodolojilerinde sertifikalı, lider yönetici.</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                      <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                      <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kişi 3 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center shadow border-0 p-3">
                  <img src="images/person3.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 3" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">Mehmet Kaya</h5>
                    <p className="card-text text-muted mb-2">Siber Güvenlik Uzmanı</p>
                    <p className="small mb-3">Kurumsal güvenlik ve sızma testlerinde tecrübeli.</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                      <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                      <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                  </div>
                </div>
              </div>
              {/* Kişi 4 */}
              <div className="col-md-6 col-lg-3 mb-4">
                <div className="card h-100 text-center shadow border-0 p-3">
                  <img src="images/person4.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 4" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                  <div className="card-body">
                    <h5 className="card-title fw-bold mb-1">Zeynep Şahin</h5>
                    <p className="card-text text-muted mb-2">Eğitim Teknolojileri Uzmanı</p>
                    <p className="small mb-3">Kurumsal eğitim ve dijital öğrenme projelerinde lider.</p>
                    <div className="d-flex justify-content-center gap-3">
                      <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                      <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                      <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
          {/* Uzman Kadro Kartları */}
          <div className="row justify-content-center mb-5">
            {/* Kişi 1 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow border-0 p-3">
                <img src="images/person1.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 1" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1">Ahmet Yılmaz</h5>
                  <p className="card-text text-muted mb-2">Yazılım Mühendisi</p>
                  <p className="small mb-3">10+ yıl deneyimli, .NET ve bulut teknolojilerinde uzman.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                    <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                    <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Kişi 2 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow border-0 p-3">
                <img src="images/person2.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 2" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1">Elif Demir</h5>
                  <p className="card-text text-muted mb-2">Proje Yöneticisi</p>
                  <p className="small mb-3">Agile ve Scrum metodolojilerinde sertifikalı, lider yönetici.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                    <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                    <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Kişi 3 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow border-0 p-3">
                <img src="images/person3.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 3" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1">Mehmet Kaya</h5>
                  <p className="card-text text-muted mb-2">Siber Güvenlik Uzmanı</p>
                  <p className="small mb-3">Kurumsal güvenlik ve sızma testlerinde tecrübeli.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                    <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                    <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Kişi 4 */}
            <div className="col-md-6 col-lg-3 mb-4">
              <div className="card h-100 text-center shadow border-0 p-3">
                <img src="images/person4.jpg" className="card-img-top rounded-circle mx-auto mt-3" alt="Kişi 4" style={{width: '120px', height: '120px', objectFit: 'cover', border: '4px solid #198754'}} />
                <div className="card-body">
                  <h5 className="card-title fw-bold mb-1">Zeynep Şahin</h5>
                  <p className="card-text text-muted mb-2">Eğitim Teknolojileri Uzmanı</p>
                  <p className="small mb-3">Kurumsal eğitim ve dijital öğrenme projelerinde lider.</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="#" className="text-primary"><i className="fab fa-linkedin fa-lg" /></a>
                    <a href="#" className="text-dark"><i className="fab fa-github fa-lg" /></a>
                    <a href="#" className="text-danger"><i className="fab fa-instagram fa-lg" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </section>
        
      {/* Neden Softverra: Avantajlar Bölümü */}
      <section className="section section-md bg-light wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="text-uppercase fw-bold display-6 mb-3">
              <span className="text-success">NEDEN SOFTVERRA?</span>
            </h2>
            <p className="lead text-muted">İşinizi büyütmek için sunduğumuz avantajlar</p>
          </div>
          <div className="row justify-content-center g-4">
            {/* Avantaj 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-2 animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                <div className="mb-3">
                  <span className="display-5 text-success"><i className="fas fa-bolt" /></span>
                </div>
                <h5 className="fw-bold mb-2">Hızlı ve Esnek Çözümler</h5>
                <p className="text-muted small mb-0">İhtiyacınıza özel, hızlı ve esnek hizmetlerle iş süreçlerinizi kolaylaştırıyoruz.</p>
              </div>
            </div>
            {/* Avantaj 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-2 animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <div className="mb-3">
                  <span className="display-5 text-success"><i className="fas fa-balance-scale" /></span>
                </div>
                <h5 className="fw-bold mb-2">Yasal Süreçlerde Tam Uyumluluk</h5>
                <p className="text-muted small mb-0">Tüm yasal gerekliliklere uygun, güvenli ve sorunsuz hizmet sunuyoruz.</p>
              </div>
            </div>
            {/* Avantaj 3 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-2 animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                <div className="mb-3">
                  <span className="display-5 text-success"><i className="fas fa-project-diagram" /></span>
                </div>
                <h5 className="fw-bold mb-2">Proje Bazlı veya Uzun Dönemli Destek</h5>
                <p className="text-muted small mb-0">Kısa veya uzun vadeli tüm projelerinizde yanınızdayız.</p>
              </div>
            </div>
            {/* Avantaj 4 */}
            <div className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm text-center py-4 px-2 animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                <div className="mb-3">
                  <span className="display-5 text-success"><i className="fas fa-shield-alt" /></span>
                </div>
                <h5 className="fw-bold mb-2">Şeffaf, Güvenilir ve Sürdürülebilir Hizmet</h5>
                <p className="text-muted small mb-0">Açık iletişim, güven ve sürdürülebilirlik ilkesiyle çalışıyoruz.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />
        </div>
        
    );
  }



export default WhyUs;