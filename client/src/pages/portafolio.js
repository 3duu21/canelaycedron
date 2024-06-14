import React from 'react'
import portafolio1 from '../img/portafolio1.jpg'
import portafolio2 from '../img/portafolio2.jpg'
import portafolio3 from '../img/portafolio3.jpg'
import portafolio4 from '../img/portafolio4.jpg'
import portafolio5 from '../img/portafolio5.jpg'
import portafolio6 from '../img/portafolio6.jpg'
import portafolio7 from '../img/portafolio7.jpg'
import portafolio8 from '../img/portafolio8.jpg'
import portafolio9 from '../img/portafolio9.jpg'
import portafolio10 from '../img/portafolio10.jpg'
import portafolio11 from '../img/portafolio11.jpg'
import portafolio12 from '../img/portafolio12.jpg'
import portafolio13 from '../img/portafolio13.jpg'

const images = [
    portafolio1,
    portafolio2,
    portafolio3,
    portafolio4,
    portafolio5,
    portafolio6,
    portafolio7,
    portafolio8,
    portafolio9,
    portafolio10,
    portafolio11,
    portafolio12,
  ];
  
  const App = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [currentImage, setCurrentImage] = React.useState('');
  
    const openModal = (imgSrc) => {
      setCurrentImage(imgSrc);
      setIsOpen(true);
    };
  
    const closeModal = () => {
      setIsOpen(false);
      setCurrentImage('');
    };
  
    return (
        <div className="container mx-auto px-4 py-8 ">
          <h1 className='text-6xl mb-10 sm:text-3xl' >Portafolio</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-20 sm:p-5">
        {images.map((imgSrc, index) => (
          <div key={index} className="relative overflow-hidden">
            <img
              src={imgSrc}
              alt={`Imagen ${index + 1}`}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => openModal(imgSrc)}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <span
            className="absolute top-0 right-0 mt-4 mr-4 text-white text-3xl cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <img className="modal-content max-w-full max-h-full" src={currentImage} alt="Imagen ampliada" />
        </div>
      )}
    </div>
    );
  };
  
  export default App;