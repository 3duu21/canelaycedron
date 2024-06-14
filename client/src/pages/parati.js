import React from 'react'
import coffeBreak from '../img/cofee.svg'
import matrimonio from '../img/matrimonio.svg'
import desayuno from '../img/desayuno.svg'
import almuerzo from '../img/almuerzo.svg'
import eventos from '../img/eventos.svg'
import coctel from '../img/coctel.svg'



function parati() {
    return (
        <div className='h-auto bg-tertiary'>
            <div className='flex flex-row sm:flex-col p-32 gap-52 sm:gap-10 sm:p-5 md:gap-10 md:p-16'>
                <div className=''>
                    <h1 className='text-6xl mb-10 sm:text-xl' >Para Ti</h1>
                    <p className='font-light mb-5 sm:text-sm'> <p className='font-bold'>GASTRONOMIA</p>

                        Nuestros menús se adaptan al gusto y posibilidad de cada cliente,ofreciendo diversos tipos de estilos y servicios,
                        Que van desde desayunos, Coffee break, cocktail, brunch, almuerzos, cenas, matrimonios, clases y competencias gastronómicas. Nos enfocamos en una atención personalizadas a nuestros clientes para llevar a cabo con seguridad y profesionalismo los nuevos desafíos que nos propongan.
                    </p>
                    <p className='font-light mb-5 sm:text-sm'>
                        <p className='font-bold'>DECORACIÓN</p>

                        Representa uno de los puntos importantes en cada evento,ya que es la imagen del mismo.Contamos con las personas capacitadas en el tema,teniendo en cuenta los diferentes
                        colores que se buscan exaltar,la distribución de los diversos espacios,y el gusto personal de cada persona.
                        Todo ello favoreciendo la cómoda circulación,logrando un lugar armónico y estético dentro del paisaje que nos rodea.
                        Además realizamos decoración corporativa si así se requiere, como también rustica, vintage, clásicos, modernos, etc.
                    </p>
                    <p className='font-light mb-5 sm:text-sm'>
                        <p className='font-bold'>SERVICIOS</p>
                        cocineros profesionales y autodidactas con pasión por la cocina, garzones mixtura de personas con experiencia y
                        jóvenes con ganas de aprender, siempre con una atención amable y personalizada
                    </p>
                </div>
                <div className='grid gap-16 grid-cols-3 sm:grid-cols-2 sm:gap-28 sm:w-auto sm:pl-14 sm:pr-14'>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={coffeBreak} />
                        <p>Coffee Break</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={matrimonio} />
                        <p>Matrimonios</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={desayuno} />
                        <p>Desayunos(Buffet)</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={almuerzo} />
                        <p>Almuerzos(Buffet)</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={eventos} />
                        <p>Eventos a medida</p>
                    </div>
                    <div className='flex flex-col items-center justify-center'>
                        <img className='w-auto mix-blend-multiply' src={coctel} />
                        <p>Cóctel</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default parati
