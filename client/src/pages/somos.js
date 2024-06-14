import React from 'react'
import logo from '../img/canelaycedronLogo.png'

function somos() {
    return (
        <div className='h-auto bg-gradient-to-r from-slate-200 to-slate-500 '>
            <div className='flex flex-row items-center justify-center sm:flex-col p-32 gap-32 sm:p-5 sm:gap-12 md:gap-20 md:p-24'>
                <div className=''>
                    <h1 className='text-6xl mb-10 sm:text-3xl sm:mb-0' >Nosotros</h1>
                    <p className='font-light mt-10 mr-20 ml-20 sm:text-md sm:mb-0 sm:m-5'>Somos un grupo de jóvenes profesionales dedicados integralmente a 
                        organizar su evento con las mismas motivaciones e ímpetu con la que usted lo haría, pero con la capacitación  y conocimiento de lo nuevo, 
                        adecuándonos a los requerimientos de nuestros habituales y nuevos clientes, manteniendo los estándares de calidad, además de estar abiertos a 
                        nuevas ideas o sugerencias con la seriedad que se requiere
                        Nuestro equipo se relaciona con los mismos valores:

                    </p>
                        <ul className='mt-5'>

                            ⚫Comunicación
                            ⚫Innovación
                            ⚫Creatividad
                            ⚫Motivación
                            ⚫Estética y armonía
                            ⚫Compromiso
                        </ul>
                </div>
                <div className='flex'>
                    <img className='w-auto sm:w-48 md:w-[1500px]' src={logo} />
                </div>
            </div>
        </div>
    )
}

export default somos
