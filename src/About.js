import Footer from "./Footer";
import Navbar from "./Navbar";

function About(){
    return(
        
        <div >
            <Navbar />
              <section
  className="section novi-background breadcrumbs-custom bg-image context-dark"
  style={{
    backgroundImage: 'url(images/breadcrumbs-image-1.jpg)',
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '2rem',    // eskiden 4rem veya daha fazlaysa küçülttük
    paddingBottom: '2rem', // hem üst hem alt padding'i yarıya indirdik
    minHeight: '200px'     // gerekirse sabit bir minimum yükseklik
  }}
>
  {/* Blur overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      backdropFilter: 'blur(8px)',
      background: 'rgba(0,0,0,0.3)',
      zIndex: 1
    }}
  />
  <div className="breadcrumbs-custom-inner" style={{ position: 'relative', zIndex: 2 }}>
    <div className="container breadcrumbs-custom-container">
      <div className="breadcrumbs-custom-main text-center">
        <h2
          className="text-uppercase breadcrumbs-custom-title"
          style={{
            color: '#fff',
            textShadow: '0 2px 8px rgba(0,0,0,0.7)',
            margin: 0,         // başlık üstü boşluğu sıfırladık
            padding: 0,        // padding’i sıfırlayarak daha sıkı yerleştirdik
            fontSize: '4rem'   // yazı boyutunu biraz düşürebilirsiniz
          }}
        >
          BİZ KİMİZ?
        </h2>
        <h3
          className="fw-bold mt-3"
          style={{
            color: '#b3b7b3',
            fontSize: '2.25rem' // alt başlık boyutunu küçülttük
          }}
        >
          Softverra'ya dair merak ettikleriniz.
        </h3>
      </div>
      <ul className="breadcrumbs-custom-path text-center" style={{ marginTop: '1rem' }}>
        <li><a href="/Home">Anasayfa</a></li>
        <li className="active">Hakkımızda</li>
      </ul>
    </div>
  </div>
</section>

          {/* Hakkımızda Bölümü */}
        <section className="section section-lg bg-white wow animate_animated animate_fadeInUp" data-wow-delay="0.1s">
            <div className="container">
              <div className="text-center mb-5">
                <p className="d-inline-block rounded-pill py-1 px-4 fw-bolder animate_animated animateheartBeat animate_infinite"
                  style={{ fontSize: '32px', border: '2px solid #333', color: '#000' }}>
                  <i className="fas fa-users me-2" /> Biz Kimiz?
                </p>
                <h2 className="text-uppercase fw-bold display-6 text-center mb-4">
                  <span className="text-success">Softverra’ya</span> Dair Merak Ettikleriniz
                </h2>
              </div>
              <div className="row g-5 justify-content-center align-items-center">
                {/* Sol: Görsel */}
                <div className="col-lg-6 text-center wow animate_animated animate_fadeInLeft" data-wow-delay="0.3s">
                  <img className="img-fluid rounded shadow" src="images/ChatGPT Image 9 Tem 2025 13_56_59.png" alt="Softverra" style={{ maxWidth: '100%', height: 'auto' }} />
                </div>
                {/* Sağ: Metin */}
                <div className="col-lg-6 wow animate_animated animate_fadeInRight" data-wow-delay="0.5s">
                  <p className="quote-classic-text text-justify mb-3">
                    <strong>SOFTVERRA</strong>, bilişim alanında uzman insan kaynağı sağlama, teknoloji danışmanlığı ve kurumsal eğitim çözümleri sunmak üzere kurulmuş, yenilikçi bir teknoloji firmasıdır. Biz, teknolojinin asıl gücünün <strong>“doğru insanla”</strong> birleştiğinde ortaya çıktığına inanıyoruz.
                  </p>
                  <p className="quote-classic-text text-justify mb-3">
                    Dijital çağda şirketlerin rekabet gücünü artırması; sadece iyi yazılımlar değil, aynı zamanda bu yazılımları geliştiren, yöneten ve sürdüren doğru ekiplerle mümkündür. Softverra olarak, bu ihtiyaca çözüm üretmek için yola çıktık.
                  </p>
                  <p className="text-primary mb-4">
                    Amacımız; kurumların yükünü hafifletmek, teknolojik kapasitelerini artırmak ve onlara <strong className="text-decoration-underline">nitelikli, sürdürülebilir iş gücü</strong> sunmaktır.
                  </p>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{ color: '#198754' }} /> Müşteri Memnuniyeti
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{ color: '#198754' }} /> Teknoloji Uyumluluğu
                    </li>
                    <li className="mb-2">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{ color: '#198754' }} /> Hizmet Kalitesi
                    </li>
                  </ul>
                  <a
  href="/contacts.html"
  className="btn btn-primary btn-contact rounded-pill py-3 px-5 mt-3 animate__animated animate__pulse animate__infinite"
  style={{ borderRadius: '2rem', hover: { backgroundColor: '#255115ed' }  }}
>
  Değerlerimiz <i className="fa fa-arrow-right text-white ms-2" />
</a>
                </div>
              </div>
            </div>
          </section>
          {/* Değerlerimiz Bölümü */}
         <section id="values" className="section bg-light py-5">
  <div className="container">
    <h2 className="text-center fw-bold mb-5">Değerlerimiz</h2>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
      {/* Güvenilirlik */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.2s">
          <div className="mb-3">
            <i className="fas fa-shield-alt fa-2x text-primary"></i>
          </div>
          <h5 className="fw-bold mb-2">Güvenilirlik</h5>
          <p className="mb-0 text-muted">İş süreçlerinde şeffaf ve güvenilir bir yaklaşım sergileriz.</p>
        </div>
      </div>
      {/* Kalite Odaklılık */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.3s">
          <div className="mb-3">
            <i className="fas fa-check-circle fa-2x text-success"></i>
          </div>
          <h5 className="fw-bold mb-2">Kalite Odaklılık</h5>
          <p className="mb-0 text-muted">Yüksek standartlarda hizmet sunmayı önceliğimiz olarak belirleriz.</p>
        </div>
      </div>
      {/* Şeffaflık */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.4s">
          <div className="mb-3">
            <i className="fas fa-eye fa-2x text-info"></i>
          </div>
          <h5 className="fw-bold mb-2">Şeffaflık</h5>
          <p className="mb-0 text-muted">Tüm iş ilişkilerimizde açık ve net bir iletişim kurarız.</p>
        </div>
      </div>
      {/* İnsana Saygı */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.5s">
          <div className="mb-3">
            <i className="fas fa-user-friends fa-2x text-warning"></i>
          </div>
          <h5 className="fw-bold mb-2">İnsana Saygı</h5>
          <p className="mb-0 text-muted">Tüm paydaşlarımızın değerini bilir, saygı çerçevesinde yaklaşırız.</p>
        </div>
      </div>
      {/* Sürekli Gelişim */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.6s">
          <div className="mb-3">
            <i className="fas fa-chart-line fa-2x text-primary"></i>
          </div>
          <h5 className="fw-bold mb-2">Sürekli Gelişim</h5>
          <p className="mb-0 text-muted">Kendimizi ve hizmetlerimizi daima ileri taşımayı hedefleriz.</p>
        </div>
      </div>
      {/* Etik İlkeler */}
      <div className="col">
        <div className="card h-100 border-0 shadow-sm p-4 rounded-3 text-center animate__animated animate__fadeInUp" style={{ background: '#fff' }} data-wow-delay="0.7s">
          <div className="mb-3">
            <i className="fas fa-balance-scale fa-2x text-danger"></i>
          </div>
          <h5 className="fw-bold mb-2">Etik İlkeler</h5>
          <p className="mb-0 text-muted">Adil, dürüst ve ilkeli çalışmayı temel değerimiz olarak kabul ederiz.</p>
        </div>
      </div>
    </div>
  </div>
</section>

          {/* Neden Softverra */}
          <section className="section py-5 wow fadeInUp" data-wow-delay="0.2s">
            <div className="container">
              {/* Neden Softverra Başlık */}
              <div className="row justify-content-center mb-4">
                <div className="col-lg-8 text-center">
                  <h3 className="text-success fw-bold">Neden Softverra?</h3>
                </div>
              </div>
              {/* İçerik */}
              <div className="row justify-content-center align-items-start g-5">
                {/* Neden Biz */}
                <div className="col-lg-6">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{color: '#198754'}} />
                      Teknolojiyi insanla birleştiren bütüncül bakış açısı
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{color: '#198754', animationDelay: '0.1s'}} />
                      Yüksek yetkinlikli ve denetlenmiş teknik kadro
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{color: '#198754', animationDelay: '0.2s'}} />
                      Hızlı, esnek ve yasalara %100 uyumlu personel temini
                    </li>
                    <li className="mb-3">
                      <i className="fas fa-circle-check fa-bounce fa-lg me-2" style={{color: '#198754', animationDelay: '0.3s'}} />
                      Şeffaf iletişim, etik değerler ve uzun vadeli iş ortaklığı
                    </li>
                  </ul>
                </div>
                {/* Vizyon & Misyon Kartları */}
                <div className="col-lg-6">
  <div className="row g-4 justify-content-center">
    {/* VİZYON */}
    <div className="col-md-6">
      <div
        className="card h-100 text-center border-0 shadow-sm p-4 rounded-3 animate__animated animate__fadeInUp"
        data-wow-delay="0.2s"
      >
        <div className="icon-wrapper mb-3">
          <i className="fas fa-lightbulb fa-2x text-primary animate__animated animate__tada animate__infinite" />
        </div>
        <h5 className="fw-bold mb-2">VİZYONUMUZ</h5>
        <p className="small text-muted mb-0">
          Geleceğin iş dünyasında, teknolojiyle insanı birleştirerek verimliliği, sürdürülebilirliği ve dönüşümü destekleyen öncü bir marka olmak.
        </p>
      </div>
    </div>
    {/* MİSYON */}
    <div className="col-md-6">
      <div
        className="card h-100 text-center border-0 shadow-sm p-4 rounded-3 animate__animated animate__fadeInUp"
        data-wow-delay="0.3s"
      >
        <div className="icon-wrapper mb-3">
          <i className="fas fa-rocket fa-2x text-danger animate__animated animate__pulse animate__infinite" />
        </div>
        <h5 className="fw-bold mb-2">MİSYONUMUZ</h5>
        <p className="small text-muted mb-0">
          Şirketlerin dijital projelerine doğru insan kaynağı sunmak, eğitim ve danışmanlık sağlayarak geleceğe hazırlamak.
        </p>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
          </section>
          <section className="section py-5 bg-light">
            <div className="container">
              <div className="card shadow p-4 mx-auto" style={{maxWidth: '600px', borderRadius: '50px / 100px'}}>
                <div className="card-body text-center">
                  <h3 className="card-title fw-bold mb-3">Biz Hazırız. Ya Siz?</h3>
                  <p className="quote-classic-text text-justify mb-3">
                    <strong>SOFTVERRA</strong> olarak, işinize özel çözümler sunmak ve sizi ileriye taşımak için buradayız.Teknoloji artık bir lüks değil, ihtiyaç
                    . Ama bu yolculukta yalnız değilsiniz.Gelin,  <strong>iş gücünüzü birlikte yeniden tanımlayalım.</strong> 
                  </p>
                 {/* React komponentinizde */}
<a
  href="/contacts.html"
  className="btn btn-primary btn-contact rounded-pill py-3 px-5 mt-3 animate__animated animate__pulse animate__infinite"
  style={{ borderRadius: '2rem' }}
>
  İletişim <i className="fa fa-arrow-right text-white ms-2" />
</a>

                </div>
              </div>
            </div>
          </section>
          <Footer />
          </div>
    );
}
export default About;