import React from 'react'
const paseosImg="https://www.ciclomag.com/wp-content/uploads/2013/02/Viajar-en-Bicicleta-Paseo-en-Bicicleta-5-consejos-para-disfrutar.jpg";
const rutaImg="https://www.ripleybelieves.com/img/travel-2018/5-unique-bike-rides-in-usa.jpg";
const competenciasImg="https://www.nationalgeographic.com.es/medio/2017/06/16/transpyr-gran-raid-mtb-pirineos-espana_fcddbc51.jpg";
const Footer = () => {
    return (
            <footer  id="footer" class="footer mt-5 py-3">               
                <div class="container">
                    <div class="row align-items-start ml-5">
                        <div class="card" style={{width: 320}}>
                            <img src={paseosImg} class="card-img-top" width="304" height="236"/>
                            <div class="card-body">
                                <h5 class="card-title">Paseos</h5>
                                <p class="card-text">
                                    Son paseos programados donde podrás compartir con amigos y hacer nuevos
                                </p>
                                <a href="#" class="btn btn-dark btn-block">ir</a>
                            </div>
                        </div>
                        <div class="card" style={{width: 320}}>
                            <img src={rutaImg} class="card-img-top" width="304" height="236"/>
                            <div class="card-body">
                                <h5 class="card-title">Rutas</h5>
                                <p class="card-text">
                                Los fines de semana haremos rutas con al menos 120km, de recorrido, Animate!!
                                </p>
                                <a href="#" class="btn btn-dark btn-block">ir</a>
                            </div>
                        </div>
                        <div class="card" style={{width: 320}}>
                            <img src={competenciasImg} class="card-img-top" width="304" height="236"/>
                            <div class="card-body">
                                <h5 class="card-title">Competancias</h5>
                                <p class="card-text">
                                Las competencias nacionales son la cupside, animate a ser un profesional en nuestro club
                                </p>
                                <a href="#" class="btn btn-dark btn-block">ir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    )
}
export default Footer
