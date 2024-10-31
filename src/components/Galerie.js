import React from 'react'
import './Galerie.css'
import ph1 from '../assets/lucrari/ph1.jpeg'
import ph2 from '../assets/lucrari/ph2.jpeg'
import ph3 from '../assets/lucrari/ph3.jpeg'
import ph4 from '../assets/lucrari/ph4.jpeg'
import ph5 from '../assets/lucrari/ph5.jpeg'
import ph6 from '../assets/lucrari/ph6.jpeg'
import ph7 from '../assets/lucrari/ph7.jpeg'
import ph8 from '../assets/lucrari/ph8.jpeg'
import ph9 from '../assets/lucrari/ph9.jpeg'
import ph10 from '../assets/lucrari/ph10.jpeg'
import ph11 from '../assets/lucrari/ph11.jpeg'
import ph12 from '../assets/lucrari/ph12.jpeg'
import ph13 from '../assets/lucrari/ph13.jpeg'
import ph14 from '../assets/lucrari/ph14.jpeg'
import ph15 from '../assets/lucrari/ph15.jpeg'
import ph16 from '../assets/lucrari/ph16.jpeg'
import ph17 from '../assets/lucrari/ph17.jpeg'
import ph18 from '../assets/lucrari/ph18.jpeg'
import ph19 from '../assets/lucrari/ph19.jpeg'
import ph20 from '../assets/lucrari/ph20.jpeg'
import ph21 from '../assets/lucrari/ph21.jpeg'
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
        { id: 1, src: ph1, alt: 'Gallery Image 1' },
        { id: 2, src: ph2, alt: 'Gallery Image 2' },
        { id: 3, src: ph3, alt: 'Gallery Image 3' },
        { id: 4, src: ph4, alt: 'Gallery Image 4' },
        { id: 5, src: ph5, alt: 'Gallery Image 5' },
        { id: 6, src: ph6, alt: 'Gallery Image 6' },
        { id: 7, src: ph7, alt: 'Gallery Image 7' },
        { id: 8, src: ph8, alt: 'Gallery Image 8' },
        { id: 9, src: ph9, alt: 'Gallery Image 9' },
        { id: 10, src: ph10, alt: 'Gallery Image 10' },
        { id: 11, src: ph11, alt: 'Gallery Image 11' },
        { id: 12, src: ph12, alt: 'Gallery Image 12' },
        { id: 13, src: ph13, alt: 'Gallery Image 13' },
        { id: 14, src: ph14, alt: 'Gallery Image 14' },
        { id: 15, src: ph15, alt: 'Gallery Image 15' },
        { id: 16, src: ph16, alt: 'Gallery Image 16' },
        { id: 17, src: ph17, alt: 'Gallery Image 17' },
        { id: 18, src: ph18, alt: 'Gallery Image 18' },
        { id: 19, src: ph19, alt: 'Gallery Image 19' },
        { id: 20, src: ph20, alt: 'Gallery Image 20' },
        { id: 21, src: ph21, alt: 'Gallery Image 21' },
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