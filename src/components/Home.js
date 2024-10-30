import React from 'react'
import './Home.css'
import price from '../assets/price.jpg'
import experience from '../assets/experience.jpg'
import colors from '../assets/colors.jpg'
import test from '../assets/test.jpeg'
import person1 from '../assets/person1.jpg'
import person2 from '../assets/person2.jpg'
import person3 from '../assets/person3.jpg'
import { useNavigate } from 'react-router-dom'
function Home() {

    const navigateGallery = useNavigate();
    const navigateContact = useNavigate();
    const handleNavigateContact = () =>{
        navigateContact("/contact");
    };
    const handleNavigateGallery = () => {
        navigateGallery("/galerie");
    };

    const projects = [
        { id: 1, imgSrc: test, alt: 'Project 1' },
        { id: 2, imgSrc: test, alt: 'Project 2' },
        { id: 3, imgSrc: test, alt: 'Project 3' },
        { id: 4, imgSrc: test, alt: 'Project 4' },
        { id: 5, imgSrc: test, alt: 'Project 5' },
        { id: 6, imgSrc: test, alt: 'Project 6' },
        { id: 7, imgSrc: test, alt: 'Project 7' },
        { id: 8, imgSrc: test, alt: 'Project 8' },
      ];
      const testimonials = [
        {
          id: 1,
          name: 'Bogdan C.',
          feedback: 'Sunt extrem de multumit de noua noastra terasa. Proces rapid si eficient. Multumim echipei pentru profesionalism!',
          image: person1,
        },
        {
          id: 2,
          name: 'Maria P.',
          feedback: 'Calitatea serviciilor oferite a fost excepțională și fiecare aspect al proiectului a fost tratat cu o atenție deosebită.',
          image: person2,
        },
        {
          id: 3,
          name: 'Alexandra M.',
          feedback: 'Recomand cu toată încrederea serviciile oferite de această echipă. De la primul contact și până la finalizare, totul a decurs perfect.',
          image: person3,
        },
      ];
  return (
    <div className='container-fluid'>
<section id='hero' class="px-5 py-6 py-xxl-10 hcf-bp-center hcf-bs-cover hcf-overlay hcf-transform">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-11 col-lg-9 col-xl-7 col-xxl-6 text-center text-white">
        <h1 class="display-3 fw-bold mb-3">Beton amprentat</h1>
        <p class="lead mb-5">Pavajele din beton amprentat ofera un aspect foarte placut pentru curtea casei, pensiunii/hotelului, restaurantului sau chiar a companiei dumneavoastra.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <a href='https://wa.me/+40720870413' type="button" class="btn btn-danger btn-lg px-4 gap-3">Suna acum</a>
          <button onClick={handleNavigateContact} type="button" class="btn btn-outline-light btn-lg px-4">Contact</button>
        </div>
      </div>
    </div>
  </div>
</section>
<section id='services' className='services section-padding'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                <div className='section-header text-center p-5'>
                    <h2 className='fw-bold'>Cele mai bune servicii</h2>
                    <p className='fw-semibold'>Rapid si eficient.</p>
                </div>
            </div>
        </div>
        
        <div className='row container p-2'>
            <div className='col-12 col-md-12 col-lg-4'>
                <div className='card text-white text-center bg-dark pb-2'>
                    <img src={price} className='card-img-top'/>
                    <div className='card-body'>
                    <i class="fa-solid fa-object-subtract"></i>
                    <h3 className='card-title'>Calitate</h3>
                    <p className='lead'>Venim in sprijinul dumneavoastra cu cel mai bun raport calitate-pret de pe piata de beton amprentat din Romania!</p>
                    <button onClick={handleNavigateContact} className='btn btn-danger text-light'>Contact</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-12 col-lg-4'>
                <div className='card text-white text-center bg-dark pb-2'>
                    <img src={experience} className='card-img-top'/>
                    <div className='card-body'>
                    <i class="fa-solid fa-object-subtract"></i>
                    <h3 className='card-title'>Experienta</h3>
                    <p className='lead'>Specialistii nostri va pun la dispozitie intreaga lor experienta in domeniu de peste 15 ani acumulata pana in prezent.</p>
                    <button onClick={handleNavigateContact} className='btn btn-danger text-light'>Contact</button>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-12 col-lg-4'>
                <div className='card text-white text-center bg-dark pb-2'>
                    <img src={colors} className=' img-fluid card-img-top'/>
                    <div className='card-body'>
                    <i class="fa-solid fa-object-subtract"></i>
                    <h3 className='card-title'>Modele si culori</h3>
                    <p className='lead'>Va punem la dispozitie un paletar de culori si un catalog de modele pentru beton amprentat extrem de diversificat</p>
                    <button onClick={handleNavigateContact} className='btn btn-danger text-light'>Contact</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</section>
<section className="container my-5 projects">
      <h2 className="text-center mb-4 fw-bold">Proiecte finalizate</h2>
      <div className="row mt-4">
        {projects.map((project) => (
          <div className="col-sm-6 col-md-3 mb-4" key={project.id}>
            <img src={project.imgSrc} alt={project.alt} className="img-fluid rounded" />
          </div>
        ))}
      </div>
      <button onClick={handleNavigateGallery} className='btn btn-danger text-light'>Galerie</button>
    </section>

    <section className="container py-5 mb-5" >
      <h2 className="text-center mb-5 text-black fw-bold">Ce spun clientii nostri</h2>
      <div className="row justify-content-center">
        {testimonials.map((testimonial) => (
          <div className="col-sm-10 col-md-6 col-lg-4 mb-4" key={testimonial.id}>
            <div className="card testimonial-card bg-dark text-white">
              <img src={testimonial.image} className="card-img-top rounded-circle mx-auto mt-4" alt={testimonial.name} />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.feedback}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>


    </div>
  )
}

export default Home