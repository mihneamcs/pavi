import React from 'react'
import './Galerie.css'
import test from '../assets/test.jpeg'
import { useNavigate } from 'react-router-dom';
function Galerie() {

    const navigateHome = useNavigate();
    const navigateContact = useNavigate();
    const handleNavigateHome = () =>{
        navigateHome("/");
    };
    const handleNavigateContact = () => {
        navigateContact("/contact");
    };

    const images = [
        { id: 1, src: test, alt: 'Gallery Image 1' },
        { id: 2, src: test, alt: 'Gallery Image 2' },
        { id: 3, src: test, alt: 'Gallery Image 3' },
        { id: 4, src: test, alt: 'Gallery Image 4' },
        { id: 5, src: test, alt: 'Gallery Image 5' },
        { id: 6, src: test, alt: 'Gallery Image 6' },
        { id: 7, src: test, alt: 'Gallery Image 7' },
        { id: 8, src: test, alt: 'Gallery Image 8' },
        { id: 9, src: test, alt: 'Gallery Image 9' },
        { id: 10, src: test, alt: 'Gallery Image 10' },
        { id: 11, src: test, alt: 'Gallery Image 11' },
        { id: 12, src: test, alt: 'Gallery Image 12' },
        { id: 13, src: test, alt: 'Gallery Image 13' },
        { id: 14, src: test, alt: 'Gallery Image 14' },
        { id: 15, src: test, alt: 'Gallery Image 15' },
        { id: 16, src: test, alt: 'Gallery Image 16' },
        { id: 17, src: test, alt: 'Gallery Image 17' },
        { id: 18, src: test, alt: 'Gallery Image 18' },
        { id: 19, src: test, alt: 'Gallery Image 19' },
        { id: 20, src: test, alt: 'Gallery Image 20' },
        { id: 21, src: test, alt: 'Gallery Image 21' },
      ];
  return (
    <div>
       <div class="container-fluid hero-section">
       <section id='hero-section' class="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform">
        <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
        <h1 class="display-3 fw-bold mb-3">Lucrari finalizate</h1>
        <p class="lead mb-5">O gama larga de modele si culori va stau la dispozitie.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button onClick={handleNavigateHome} type="button" class="btn btn-danger btn-lg px-4 gap-3">Acasa</button>
          <button onClick={handleNavigateContact} type="button" class="btn btn-outline-light btn-lg px-4">Contact</button>
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
      <div className="container my-5">
        <div className="row">
          {images.map((image) => (
            <div className="col-lg-4 col-md-6 mb-4" key={image.id}>
              <img src={image.src} alt={image.alt} className="img-fluid rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Galerie