import React, { useState } from 'react'; // Importa useState desde React

const Contacto = () => { // Cambia el nombre de la función a Contacto (con mayúscula inicial)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Maneja la lógica para enviar el formulario
        setFormData({ name: '', email: '', message: '' }); // Limpia el formulario después de enviar
    };

    return (
        <div className="p-14 flex flex-row sm:flex-col sm:items-center sm:justify-center sm:p-5 bg-gradient-to-r from-slate-100 to-slate-500">
            {/* Columna Izquierda: Texto adicional */}
            <div className=" pr-8 p-10  sm:flex sm:flex-col sm:items-center">
                <h1 className="text-2xl font-light mb-4 text-start">Contacto</h1>
                <p className="font-bold text-5xl text-start md:text-center sm:tecen">
                    ¿Tienes algunas dudas?, contactate con nosotros.
                </p>
                <p className='text-start mt-9 flex items-center gap-5'>
                    <ion-icon name="call-outline"></ion-icon>
                    <a href='https://wa.me/34555005500' className='font-light text-black text-xl'>+56982568627</a>
                </p>
                <p className='text-start mt-2 sm:mb-10 text-xl font-light flex items-center gap-5'>
                    <ion-icon name="mail-outline"></ion-icon>
                    marcelo@canelaycedron.cl
                </p>
            </div>

            {/* Columna Derecha: Formulario de Contacto */}
            <div className="flex items-center justify-center">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-medium">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="sm:w-[350px] mt-1 sm:m-auto p-1 block w-full border-gray-300 h-[40px] rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-lg font-medium">Correo Electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 p-1 sm:w-[350px] block w-full sm:m-auto h-[40px] border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-lg font-medium ">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            className="mt-1 p-1 sm:w-[350px] block w-[500px] sm:m-auto h-auto border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            required
                        ></textarea>
                    </div>
                    <div className="text-right">
                        <button
                            type="submit"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm bg-white hover:bg-special duration-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
