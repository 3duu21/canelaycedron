
import React, { useState } from 'react'
import logo from '../img/canelaycedronLogo.png'
import bg from '../img/headercarrusel2.jpg'

function Header() {

  let Links = [
    { name: "Inicio", link: "#inicio" },
    { name: "Somos", link: "../pages/somos" },
    { name: "Servicios", link: "#servicios" },
    { name: "Portafolio ", link: "#portafolio" },
    { name: "Contacto", link: "#contacto" }
  ]

  const style = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }

  let [open, setOpen] = useState(false)

  return (
    <main className='w-full h-screen' style={style}>
      <div className='absolute inset-0 bg-primary opacity-90 z-0'>
        <div className='md:flex pt-3 md:px-10 px-7' >
          <div className='flex items-center justify-between sm:block '>
            <a href='/'>
              <div className='p-2 pb-2 sm:pb-5 flex flex-row z-50 sm:z-50'>
                <img className='ml-20 h-[120px] sm:ml-0 sm:h-24 z-20' src={logo} />
              </div>
            </a>

            <div onClick={() => setOpen(!open)} className='absolute right-8 top-14 cursor-pointer z-20 hidden sm:block'>
              <span className='text-3xl'>
                <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
              </span>
            </div>
            <ul className={`text-tertiary flex items-center mr-28 font-semibold gap-6 sm:shadow-md pb-0 sm:pb-1 sm:block sm:absolute static sm:bg-primary sm:left-0 sm:w-full w-auto pl-0 sm:pl-0 sm:transition-all sm:duration-500 sm:ease-in 
          ${open ? 'top-16' : 'top-[-390px] opacity-100 sm:opacity-0'}`}>
              {
                Links.map((link) => (
                  <li className='ml-0 text-lg my-7'>
                    <a className='hover:text-special duration-300' href={link.link}>{link.name}</a>
                  </li>
                ))
              }
              <div className='gap-3 flex items-center justify-center'>
                <a href="https://wa.me/34555005500" className='ml-0 text-3xl flex sm:block'>
                  <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
                <a href='https://www.facebook.com/canelaycedron' className='ml-0 text-3xl flex sm:block'>
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
                <a href='https://www.instagram.com/cheffmarce/' className='ml-0 text-3xl flex sm:block'>
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className='flex mt-52 mr-80 ml-64 sm:mt-32 sm:ml-20 sm:mr-0'>
          <p className='text-3xl text-special font-bold sm:text-lg md:text-xl slide-in-left'>
            Calidad a tu alcance
          </p>
        </div>
        <div className='flex mt-5 mr-80 ml-10 sm:mt-5 sm:ml-3 sm:mr-3'>
          <p className='text-7xl text-tertiary font-bold sm:text-2xl slide-in-left'>
            CANELA & CEDRÓN PRODUCCIONES GASTRONÓMICAS
          </p>
        </div>
        <div className='flex mt-10 mr-80 ml-60 sm:mt-5 sm:ml-3 sm:mr-3'>
          <a href='#contacto' className='p-5 text-xl sm:p-4 sm:text-sm bg-white rounded-full hover:bg-special transition-all ease-in duration-300 slide-in-left'>
            Contacto
          </a>
        </div>
      </div>
    </main>
  );
}

export default Header

