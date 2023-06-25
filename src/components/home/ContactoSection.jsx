import contactValues from './contactoValues.json'

function Contacto () {
    return (
        <section id="contacto" className="w-full h-auto py-5 bg-slate-50 dark:bg-slate-900 flex flex-wrap p-2">
            <iframe className="w-[45%] h-5/6" src={ contactValues.UrlLocation } style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      
            <div id="contacto-info" className="w-[45%] h-5/6 justify-between items-center">
                <div id="contacto-up" className="w-full h-1/2 text-center">
                    <h1 id="contacto-up-title" className="text-2xl font-bold uppercase px-4"> { contactValues.tituloInfo } </h1>
                    <ul id="contacto-up-info">
                        <li id="contacto-redes">
                            <ul id="contacto-redes-inner">
                                <li id="contacto-facebook"> <img src={ contactValues.ImgUrlFacebook }/> </li>
                                <li id="contacto-instagram"> <img src={ contactValues.ImgUrlInstagram }/> </li>
                                <li id="contacto-twitter"> <img src={ contactValues.ImgUrlTwitter }/> </li>
                            </ul>
                        </li>
                        <li id="contacto-direccion" className=""> 
                            <p className="px-4 py-2 text-base font-semibold"> { contactValues.DireccionName } </p>
                            <p className="px-4 py-2 text-base"> { contactValues.DireccionValue } </p>
                        </li>
                        <li id="contacto-telefono"> 
                            <p className="px-4 py-2 text-base font-semibold"> { contactValues.TelefonoName } </p>
                            <p className="px-4 py-2 text-base"> { contactValues.TelefonoValue } </p>                       
                         </li>
                    </ul>                
                </div>
                <div id="contacto-down" className="w-full h-1/2 text-center">
                    <h1 id="contacto-down-title" className="text-2xl font-bold uppercase px-4"> { contactValues.tituloForm } </h1>
                    <form className="w-full">
                        <input type="text" className="w-2/5 border" placeholder="nombre"></input>
                        <input type="email" className="w-2/5 border" placeholder="email"></input>
                        <input type="text" className="w-full border" placeholder="mensaje"></input>
                        <input type="button" className="w-2/5 border"> { contactValues.BotonEnviar } </input>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contacto;