import React from 'react'
import './Contact.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import mail from '../assets/mail.jpg'
import { useNavigate } from 'react-router-dom';
function Contact() {
    const navigateHome = useNavigate();
    const navigateGallery = useNavigate();
    const handleNavigateHome = () =>{
        navigateHome("/");
    };
    const handleNavigateGallery = () => {
        navigateGallery("/galerie");
    };
  return (
    <div>
      <div>
       <div class="container-fluid heroContact">
       <section id='heroContact' class="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform">
        <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
        <h1 class="display-3 fw-bold mb-3">Contact</h1>
        <p class="lead mb-5 fw-bold">Va stam la dispozitie oricand.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button onClick={handleNavigateHome} type="button" class="btn btn-danger btn-lg px-4 gap-3">Acasa</button>
          <button  onClick={handleNavigateGallery} type="button" class="btn btn-outline-light btn-lg px-4">Galerie</button>
        </div>
      </div>
    </div>
  </div>
 
</section>
</div>
<section className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card p-4 highlighted-card">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body">
                    <h5 className="card-title">Contact Information</h5>
                    <p className="card-text">
                      <strong>Phone:</strong><a href='https://wa.me/+40720870413'className='text-light'>+40720870413</a>
                    </p>
                    <p className="card-text">
                      <strong>Email:</strong> pavicozo@gmail.com
                    </p>
                    <div className="social-icons mt-3">
                      <a href="https://www.facebook.com/youraccount" className="text-light mx-2">
                        <i className="bi bi-facebook" style={{ fontSize: '2rem' }}></i>
                      </a>
                      <a href="https://www.instagram.com/youraccount" className="text-light mx-2">
                        <i className="bi bi-instagram" style={{ fontSize: '2rem' }}></i>
                      </a>
                      <a href="https://www.tiktok.com/@youraccount" className="text-light mx-2">
                        <i className="bi bi-tiktok" style={{ fontSize: '2rem' }}></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <img src={mail} className="img-fluid rounded-end contact-img" alt="Contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Contact