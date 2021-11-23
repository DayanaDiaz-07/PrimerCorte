import React from 'react'
import { BicicletaContext } from '../context/BicicletaProvider';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const EditarV2 = (props) => {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
    const r=getRandomInt(1,4);
    
    const montaña="https://hubsports.mx/wp-content/uploads/2020/02/ciclismo-montana-equipo.jpg";
    const ruta="https://www.claro.com.co/portal/co/noticias/imagenes/1603899956023-5-og-Historia%20del%20ciclismo.jpg";
    const ruta2="https://labicikleta.com/wp-content/uploads/2017/05/CiclistaRuta-1024x683.jpg";
    const { bici } = React.useContext(BicicletaContext)
    const urlApi = process.env.REACT_APP_BICI_URL ;
    const urlApiGet = process.env.REACT_APP_BICI_URL + "/bicicleta/" + bici.bici;
    const [Bicicleta, setBicicleta] = React.useState({});
    React.useEffect(() => {    
      // console.log("esde useEffect")
      // console.log(process.env.REACT_APP_ADMIN_URL+"/bicicleta/"+props.location.pathname)
      // console.log(Bicicleta)
      // fetch(process.env.REACT_APP_BICI_URL+"/bicicleta"+props.location.pathname,{
      //   method:'PATCH',
      //   body:Bicicleta,
      // })
      // .then((response) => response.json())
      // .then((response) => {
          
      //    window.location.reload();
         
      // });
      console.log(process.env.REACT_APP_BICI_URL+"/bicicleta"+props.location.pathname)
      
    });


    const editar = React.useCallback((id) => {
        console.log(id)
        console.log("hey")
        // fetch(process.env.REACT_APP_BICI_URL+"/bicicleta"+props.location.pathname,{
        //   method:'PATCH',
        //   body:Bicicleta,
        // })
        // .then((response) => response.json())
        // .then((response) => {
            
        //    window.location.reload();
           
        // });
      },[setBicicleta]);

    return (
        <form id="formulario">
          <div className="col-sm-12">
            <div class="card  mt-3 " style={{ width: 400 }}>
              {
                r == 1 ? (
                  <img src={montaña} class="card-img-top" width="304" height="236" />
                ) : (
                  r == 2 ? (
                    <img src={ruta} class="card-img-top" width="304" height="236" />
                  ) : (
                    <img src={ruta2} class="card-img-top" width="304" height="236" />
                  )
                )
              }
              <div class="card-body">
                {/* <h5 class="card-title">ID:
                  <input
                    // name="_id"
                    // value={_id}
                    className="ml-2"
                    type="text"
                    placeholder="ID bicicleta"
                    onChange={()=>changeHandler()}
                  />
                </h5> */}
                <h5 class="card-title">MODELO:
                  <input
                    // name="tipoBicicleta"
                    // value={tipoBicicleta}
                    className="ml-2"
                    type="text"
                    placeholder="Inserte modelo"
                    onChange={(e)=>setBicicleta({ ...Bicicleta,tipoBicicleta: [e.target.value] })}
                  />
                </h5>
                <h5 >MARCA:
                  <input
                    // name="marca"
                    // value={marca}
                    className="ml-4"
                    type="text"
                    placeholder="Inserte marca"
                    onChange={(e)=>setBicicleta({...Bicicleta,marca: [e.target.value] })}
                  />
                </h5>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">
                  <h5 >Color:
                    <input
                    //   name="color"
                    //   value={color}
                      className="ml-5"
                      type="text"
                      placeholder="Inserte color"
                      onChange={(e)=>setBicicleta({...Bicicleta,color: [e.target.value] })}
                    />
                  </h5>
                </li>
                <h3 className="text-center">ubicación</h3>
                <li class="list-group-item">
                  <div className="ml-3">
                    Latitud
                    <input
                    //   name="lat"
                    //   value={lat}
                      className="ml-5"
                      type="text"
                      placeholder="Inserte color"
                      onChange={(e)=>setBicicleta({...Bicicleta,lat: [e.target.value] })}
                    />
                  </div>
                  <div >
                    Longitud:
                    <input
                    //   name="long"
                    //   value={long}
                      className="ml-5 mt-2"
                      type="text"
                      placeholder="Inserte longitud"
                      onChange={(e)=>setBicicleta({...Bicicleta,long:[e.target.value] })}
                    />
                  </div>
                </li>
                <li class="list-group-item ml-3">
                  Estado:
                  <input
                    // name="estado"
                    // value={estado}
                    className="ml-5"
                    type="text"
                    placeholder="Inserte estado"
                    onChange={(e)=>setBicicleta({ ...Bicicleta,estado: [e.target.value] })}
                  />
                </li>
                <button className="btn btn-warning btn-block"
                  //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                  //type="submit"
                  onClick={()=>editar(bici.bici)}
                >
                  Editar
                </button>
                <a className="btn btn-dark btn-block"
                  //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                  href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                >
                  Volver
                </a>
              </ul>
            </div>
          </div>
        </form>
      )
    }
  
    
export default withRouter(EditarV2)
