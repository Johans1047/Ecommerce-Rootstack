export default function Footer() {
    return (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[12%_repeat(4,1fr)_12%] high-contrast">
            <div className="col-start-1 lg:col-start-2 m-3 p-2 flex flex-col items-center border-black dark:border-slate-800 border-t-[1px] sm:border-r-[1px] lg:border-t-0 lg:border-l-[1px] lg:border-l-0 text-sm">
                <h4 className="text-lg font-semibold">Información de Contacto</h4>
                <p className="mt-2"><span className="font-semibold">Teléfono:</span>&nbsp;<a href="https://wa.me/50761234567">+507 6123-4567</a></p>
                <p><span className="font-semibold">Email:</span> <a href="mailto:voyage@explore.com">voyage@explore.com</a></p>
            </div>
            <div className="m-3 p-2 flex flex-col items-center border-black dark:border-slate-800 border-t-[1px] sm:border-r-[1px] md:border-l-[1px] lg:border-t-0 lg:border-l-0 text-[13px]">
                <h4 className="text-lg font-semibold">Enlaces Rápidos</h4>
                <ul className="list-none p-0 mt-2">
                    <li><a className="hover:text-blue-400 dark:hover:text-slate-400" href="/">Inicio</a></li>
                    <li><a className="hover:text-blue-400 dark:hover:text-slate-400" href="/commerce">Comercio</a></li>
                    <li><a className="hover:text-blue-400 dark:hover:text-slate-400" href="/about">Acerca de nosotros</a></li>
                </ul>
            </div>
            <div className="m-3 p-2 flex flex-col items-center border-black dark:border-slate-800 border-t-[1px] sm:border-r-[1px] md:border-r-0 md:border-l-[1px] lg:border-r-[1px] lg:border-t-0 lg:border-l-0">
                <h4 className="text-lg font-semibold">Redes Sociales</h4>
                <div className="flex gap-9 mt-2">
                    <a className="hover:text-blue-400 dark:hover:text-slate-400" href="https://facebook.com"><i className="bi bi-facebook"></i></a>  
                    <a className="hover:text-blue-400 dark:hover:text-slate-400" href="https://instagram.com"><i className="bi bi-instagram"></i></a>  
                    <a className="hover:text-blue-400 dark:hover:text-slate-400" href="https://twitter.com"><i className="bi bi-twitter-x"></i></a>  
                </div>
            </div>
            <div className="m-3 p-2 flex flex-col items-center border-black dark:border-slate-800 border-t-[1px] sm:border-r-[1px] lg:border-t-0 lg:border-r-0 text-sm">
                <h4 className="text-lg font-semibold">Ubicación</h4>
                <p>Av. Balboa, Panamá, Provincia de Panamá</p>
            </div>
        </div>
    );
}
