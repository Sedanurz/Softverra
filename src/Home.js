import Footer from "./Footer";
import Navbar from "./Navbar";

function Home() {
  return (
     <div>
        <Navbar />
        <section
  className="section swiper-container swiper-slider swiper-slider-minimal"
  data-loop="true"
  data-slide-effect="fade"
  data-autoplay={4759}
  data-simulate-touch="true"
>
  <div className="swiper-wrapper">
    <div
      className="swiper-slide"
      style={{
        backgroundImage: "url('/images/slider.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '75vh'              // veya istediğiniz yükseklik
      }}
    >
      <div className="container">
        <div className="jumbotron-classic-content">
          <div className="wow-outer">
            <div className="title-docor-text font-weight-bold title-decorated text-uppercase wow slideInLeft text-white">
              SOFTVERRA
            </div>
          </div>
          <h2 className="text-uppercase text-white font-weight-bold wow-outer">
            <span className="wow slideInDown" data-wow-delay=".2s">
              Geleceği kodlayan insan gücü
            </span>
          </h2>
          <h5 className="text-white wow-outer">
            <span className="wow slideInDown" data-wow-delay=".35s">
              🚀 Softverra ile işinizi büyütün, kadronuzu güçlendirin.
            </span>
          </h5>
        </div>
      </div>
    </div>
  </div>
 
</section>
       
        {/* Services*/}
        <section className="section novi-background section-lg text-center ">
          <div className="container">
            <h3 className="text-uppercase wow-outer"><span className="wow slideInUp">Our Team</span></h3>
            <div className="row row-lg-50 row-35 row-xxl-70 justify-content-center justify-content-lg-start">
              <div className="col-md-10 col-lg-6 wow-outer">
                {/* Profile Creative*/}
                <article className="profile-creative wow slideInLeft">
                  <figure className="profile-creative-figure"><img className="profile-creative-image" src="images/imagesteam-1-270x273.jpg" alt="" width={270} height={273} />
                  </figure>
                  <div className="profile-creative-main">
                    <h5 className="profile-creative-title"><a href="#">Bilişim İnsan Kaynağı Temini</a></h5>
                    <p style={{textAlign: 'justify'}}> Dijital çağın gereksinimlerine uygun olarak, teknoloji alanında uzmanlaşmış nitelikli personelin kurum ve kuruluşlara sağlanması sürecidir.</p>
                  </div>
                </article>
              </div>
              <div className="col-md-10 col-lg-6 wow-outer">
                {/* Profile Creative*/}
                <article className="profile-creative wow slideInLeft" data-wow-delay=".2s">
                  <figure className="profile-creative-figure"><img className="profile-creative-image" src="images/imagesteam-2-270x273.jpg" width={270} height={273} />
                  </figure>
                  <div className="profile-creative-main">
                    <h5 className="profile-creative-title"><a href="#">Bordrolama &amp; Taşeron Personel Hizmeti</a></h5>
                    <p style={{textAlign: 'justify'}}> Dijital çağın gereksinimlerine uygun olarak, teknoloji alanında uzmanlaşmış nitelikli personelin kurum ve kuruluşlara sağlanması sürecidir.</p>
                  </div>
                </article>
              </div>
              <div className="col-md-10 col-lg-6 wow-outer">
                {/* Profile Creative*/}
                <article className="profile-creative wow slideInLeft">
                  <figure className="profile-creative-figure"><img className="profile-creative-image" src="images/imagesteam-3-270x273.jpg" alt="" width={270} height={273} />
                  </figure>
                  <div className="profile-creative-main">
                    <h5 className="profile-creative-title"><a href="#">Eğitim &amp; Teknoloji Danışmanlığı</a></h5>
                    <p style={{textAlign: 'justify'}}> Dijital çağın gereksinimlerine uygun olarak, teknoloji alanında uzmanlaşmış nitelikli personelin kurum ve kuruluşlara sağlanması sürecidir.</p>
                  </div>
                </article>
              </div>
              <div className="col-md-10 col-lg-6 wow-outer">
                {/* Profile Creative*/}
                <article className="profile-creative wow slideInLeft" data-wow-delay=".2s">
                  <figure className="profile-creative-figure"><img className="profile-creative-image" src="images/imagesteam-4-270x273.jpg" width={270} height={273} />
                  </figure>
                  <div className="profile-creative-main">
                    <h5 className="profile-creative-title"><a href="#">Esnek, Güvenilir ve Profesyonel Çözümler</a></h5>
                    <p style={{textAlign: 'justify'}}> Dijital çağın gereksinimlerine uygun olarak, teknoloji alanında uzmanlaşmış nitelikli personelin kurum ve kuruluşlara sağlanması sürecidir.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        {/* Best offer*/}
       <section
  className="section novi-background section-1 bg-primary-darker text-center"
  style={{ position: 'relative', overflow: 'hidden' }}
>
  {/* 1) Blur’lu arka plan */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('/images/imagesbg-1-1920-455.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      filter: 'blur(3px)',
      zIndex: 0,
    }}
  />

  {/* 2) Koyu overlay */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      zIndex: 1,
    }}
  />

  {/* 3) İçerik */}
  <div style={{ position: 'relative', zIndex: 2 }} className="container">
    <div className="row justify-content-center">
      <div className="col-sm-10 col-lg-7 col-xl-6">
        <h2 className="wow-outer">
          <span className="wow slideInDown text-uppercase text-white">
            SOFTVERRA
          </span>
        </h2>
        <h6 className="wow-outer offset-top-4">
          <span className="wow slideInDown text-white" data-wow-delay=".05s">
            SOFTVERRA İLE İŞİNİZİ BÜYÜTÜN, KADRONUZU GÜÇLENDİRİN.
          </span>
        </h6>
        <div className="wow-outer button-outer">
          <a
  href="/contacts.html"
  className="btn btn-primary btn-contact rounded-pill py-3 px-5 mt-3 "
  style={{ borderRadius: '2rem' }}
>
  İletişim <i className="fa fa-arrow-right text-white ms-2" />
</a>
        </div>
      </div>
    </div>
  </div>
</section>
        <section className="section section-lg bg-gray-100">
  <div className="container">
    <div className="row g-4 justify-content-center">
      {/* Card 1 */}
      <div className="col-sm-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-4 text-center 
                        animate_animated animate_fadeInUp"
             style={{ transition: "transform .2s, box-shadow .2s" }}
             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div className="mb-3">
            <i className="fas fa-user fa-3x text-success" />
          </div>
          <h5 className="card-title fw-bold mb-2">Softverra</h5>
          <p className="card-text">
            Softverra, teknoloji odaklı insan kaynakları ve danışmanlık çözümleriyle iş dünyasının dönüşümüne yön veriyor.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="col-sm-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-4 text-center 
                        animate_animated animate_fadeInUp"
             style={{ transition: "transform .2s, box-shadow .2s" }}
             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div className="mb-3">
            <i className="fas fa-comments fa-3x text-info" />
          </div>
          <h5 className="card-title fw-bold mb-2">Danışman Kadro</h5>
          <p className="card-text">
            Yazılım geliştirme, sistem yönetimi, eğitim ve bordrolama alanlarında uzman kadromuzla projelerinize değer katıyoruz.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="col-sm-6 col-lg-4">
        <div className="card h-100 border-0 shadow-sm p-4 text-center 
                        animate_animated animate_fadeInUp"
             style={{ transition: "transform .2s, box-shadow .2s" }}
             onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
             onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          <div className="mb-3">
            <i className="fas fa-star fa-3x text-warning" />
          </div>
          <h5 className="card-title fw-bold mb-2">%100 Garanti</h5>
          <p className="card-text">
            Tüm sonuçlar, %100 Softverra garantisiyle size en doğru seçimi sunar.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
        <Footer />
      </div>
  );
}
export default Home;