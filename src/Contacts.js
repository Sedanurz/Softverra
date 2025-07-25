import { DiVim } from "react-icons/di";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contacts() {
  return (
    <div>
        <Navbar />
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
                <li><a href="/Home">Anasayfa</a></li>
                <li className="active">NEDEN BİZ?</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="section bg-light py-5">
        <div className="container">
          <div className="row justify-content-center align-items-center mb-5">
            {/* Bilgiler Solda */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="text-center text-lg-start">
                <div className="d-flex flex-column align-items-center align-items-lg-start gap-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className="icon-circle bg-success text-white d-flex align-items-center justify-content-center me-2" style={{width: '48px', height: '48px', fontSize: '1.5rem'}}>
                      <i className="fas fa-envelope" />
                    </span>
                    <a href="mailto:info@softverra.com" className="fs-5 fw-medium text-success text-decoration-none">info@softverra.com</a>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="icon-circle bg-success text-white d-flex align-items-center justify-content-center me-2" style={{width: '48px', height: '48px', fontSize: '1.5rem'}}>
                      <i className="fas fa-phone-alt" />
                    </span>
                    <a href="tel:02129098742" className="fs-5 fw-medium text-success text-decoration-none">0212 909 87 42</a>
                  </div>
                  <div className="d-flex align-items-center gap-3">
                    <span className="icon-circle bg-success text-white d-flex align-items-center justify-content-center me-2" style={{width: '48px', height: '48px', fontSize: '1.5rem'}}>
                      <i className="fas fa-map-marker-alt" />
                    </span>
                    <span className="fs-6 fw-medium text-success">SOFTVERRA TEKNOLOJİ A.Ş
ESENTEPE MAH. BÜYÜKDERE CAD. LOFT RESİDANCE A. BLOK NO:201 
 <p>ŞİŞLİ/İSTANBUL</p></span>

                   
                  </div>
                </div>
              </div>
            </div>
            {/* Harita Sağda */}
            <div className="col-lg-6">
              <div className="rounded shadow overflow-hidden" style={{minHeight: '300px'}}>
               <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.582444825779!2d29.005493087729565!3d41.08086489744391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab70449295f6f%3A0x6f24bceeb952c6b6!2sLevent%20Loft%201!5e1!3m2!1str!2str!4v1752493645402!5m2!1str!2str"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  title="Softverra Konum Haritası"
/>
</div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{__html: "\n          .icon-circle {\n            border-radius: 50%;\n            box-shadow: 0 2px 8px rgba(25,135,84,0.15);\n            transition: background 0.2s;\n          }\n          .icon-circle:hover {\n            background: #157347 !important;\n          }\n        " }} />
      </section>
        <Footer />
    </div>
  );
}
export default Contacts;
