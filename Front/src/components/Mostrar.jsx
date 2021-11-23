import React from 'react'
import axios from 'axios';
import { BicicletaContext } from '../context/BicicletaProvider';


const Mostrar = () => {

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  const r=getRandomInt(1,4);
  const montaña="https://hubsports.mx/wp-content/uploads/2020/02/ciclismo-montana-equipo.jpg";
  const ruta="https://www.claro.com.co/portal/co/noticias/imagenes/1603899956023-5-og-Historia%20del%20ciclismo.jpg";
  const ruta2="https://labicikleta.com/wp-content/uploads/2017/05/CiclistaRuta-1024x683.jpg";
  const { bici } = React.useContext(BicicletaContext)
  const urlApi = process.env.REACT_APP_BICI_URL + "/bicicleta/" + bici.bici;
  const [Bicicleta, setBicicleta] = React.useState({});
  React.useEffect(async () => {
    const result = await axios(
      urlApi,
    );
    setBicicleta(result.data);
    console.log(result.data);
  }, [setBicicleta]);
  return (
    <div className="mt-2" id="fondo1">
    <div id="formulario">
      <div class="card mt-3" style={{width:473}}>
 
                 <div class="card-body">
          {/* <h5 class="card-title">ID:
              {Bicicleta.}
            </h5> */}
            <div >
            <h5 class="card-title">
            <div class="row">
                <div class="col-4 ">MODELO:</div>
                <div class="col-7">{Bicicleta.tipoBicicleta}</div>
            </div>
            </h5>
            </div>
            
            <h5 >
            <div class="row">
                <div class="col-4 ">MARCA:</div>
                <div class="col-7">{Bicicleta.marca}</div>
            </div>
            </h5>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
              <h5 >
              <div class="row">
                <div class="col-4 ">COLOR:</div>
                <div class="col-7">{Bicicleta.color}</div>
            </div>
            </h5>           
            </li>
            <h3 className="text-center">ubicación</h3>
            <li class="list-group-item">
              <div className="ml-3">
              <div class="row">
                <div class="col-4 ">Latitud:</div>
                <div class="col-7">{Bicicleta.lat}</div>
            </div>
              </div>
              <div >
              <div class="row">
                <div class="col-4 ">Longitud:</div>
                <div class="col-7">{Bicicleta.long}</div>
            </div>
              </div>
            </li>
            <li class="list-group-item ml-3">
            <div class="row">
                <div class="col-4 ">Estado:</div>
                <div class="col-3">{Bicicleta.estado}</div>
            </div>
            </li>
            <a className="btn btn-dark btn-block"
              //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
              href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
            >
              Volver
            </a>
          </ul>
      </div>
    </div>
    </div>
  )
}

export default Mostrar
