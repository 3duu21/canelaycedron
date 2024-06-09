
import React, { useState } from 'react'
import logo from '../img/canelaycedronLogo.png'
import bg from '../img/headercarrusel2.jpg'

function Footer() {

    let Links = [
        { name: "Inicio", link: "#inicio" },
        { name: "Somos", link: "#somos" },
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


    return (
        <footer className='relative w-full' style={style}>
            <div className='relative inset-0 bg-primary opacity-90 z-0'>
                <div className='flex justify-between pl-52 pr-52 sm:flex-col sm:pl-0 sm:pr-0'>
                    <div className='flex flex-row items-center mt-14 mb-10 ml-20 sm:flex-col sm:ml-0'>
                        <div className='gap-3 flex flex-col items-center justify-center text-tertiary'>
                            <div className=''>
                                <a href='/'>
                                    <img className='mb-5 h-[220px] sm:ml-0 sm:h-24 z-20' src={logo} />
                                </a>
                            </div>
                            <div className='flex gap-5'>

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
                        </div>
                        <ul className='pl-10 sm:mt-[10px] sm:pl-0'>
                            {
                                Links.map((link) => (
                                    <li className='text-lg'>
                                        <a className=' text-tertiary hover:text-special duration-300 text-xl' href={link.link}>{link.name}</a>
                                    </li>
                                ))
                            }
                        </ul>

                    </div>

                    <div className='flex flex-col justify-center mt-8 mr-40 sm:mr-0 mb-5'>
                        <div>
                            <p className='text-tertiary text-2xl'>Contáctanos: </p>
                        </div>
                        <div>
                            <a href='https://wa.me/34555005500' className='text-tertiary text-2xl hover:text-special duration-300'>+56982568627</a>
                        </div>
                    </div>
                </div>
                <p className='mt-5 pb-5 text-tertiary'>Todos los derechos reservados 2024. Canela  & Cedron © / Eduardo Zapata</p>
            </div>
        </footer>
    );
}

export default Footer

