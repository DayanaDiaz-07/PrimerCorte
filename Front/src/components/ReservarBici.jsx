import React, { Component } from 'react'
import axios from 'axios'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'



class ReservarBici extends Component {


  constructor(props) {
    if (!auth.currentUser) {
      props.history.push('/')
    }
    super(props)

    this.state = {
      _id: '',
      estado: '',
      marca: '',
      tipoBicicleta: '',
      color: '',
      long: '',
      lat: '',
    }
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: [e.target.value] })
  }

  submitHandler = e => {
    
    //console.log("state")
    //console.log(process.env.REACT_APP_BICI_URL+"/"+this.state._id[0])
    e.preventDefault()
    const urlApi = process.env.REACT_APP_RESERVAS_URL;
    //const urlApiId=urlapi+this.state.data.id

    // let datos = {
    // }
    // if (this.state.color[0] != undefined) {
    //   datos = { ...datos, color: this.state.color[0] }
    // }
    // if (this.state.estado[0] != undefined) {
    //   datos = { ...datos, estado: this.state.estado[0] }
    // }
    // if (this.state.lat[0] != undefined) {
    //   datos = { ...datos, lat: this.state.lat[0] }
    // }
    // if (this.state.long[0] != undefined) {
    //   datos = { ...datos, long: this.state.long[0] }
    // }
    // if (this.state.marca[0] != undefined) {
    //   datos = { ...datos, marca: this.state.marca[0] }
    // }
    // if (this.state.tipoBicicleta[0] != undefined) {
    //   datos = { ...datos, tipoBicicleta: this.state.tipoBicicleta[0] }
    // }
    const datos={
        idBicicleta:this.state._id[0],
        idUsuario:auth.currentUser.uid,
    }
    
    console.log("info reserva")
    console.log(urlApi + "/reserva/" + this.state._id[0]+"/"+auth.currentUser.uid)
    console.log(datos)
    axios.post(urlApi + "/reserva/"+this.state._id[0]+"/"+auth.currentUser.uid)
      .then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })



  }

  render() {
    const r = 1;
    const montaña = "https://hubsports.mx/wp-content/uploads/2020/02/ciclismo-montana-equipo.jpg";
    const ruta = "https://www.claro.com.co/portal/co/noticias/imagenes/1603899956023-5-og-Historia%20del%20ciclismo.jpg";
    const ruta2 = "https://labicikleta.com/wp-content/uploads/2017/05/CiclistaRuta-1024x683.jpg";
    const {
      _id,
      // estado,
      // marca,
      // tipoBicicleta,
      // color,
      // long,
      // lat,
    } = this.state
    //   return (    
    //     <div>
    //       <form onSubmit={this.submitHandler}>
    //         <div>
    //           <input type="text" name="userId" value={userId} onChange={this.changeHandler}>
    //           </input>
    //         </div>
    //         <div>
    //           <input type="text" name="title" value={title} onChange={this.changeHandler}>
    //           </input>
    //         </div>
    //         <div>
    //           <input type="text" name="body" value={body} onChange={this.changeHandler}>
    //           </input>
    //         </div>
    //         <button type="submit">Enviar</button>
    //       </form>
    //     </div>
    //   )

    return (
      <form id="formulario" onSubmit={this.submitHandler}>
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
              <h5 class="card-title">ID:
                <input
                  name="_id"
                  value={_id}
                  className="ml-2"
                  type="text"
                  placeholder="Id bicicleta"
                  onChange={this.changeHandler}
                />
              </h5>
              <button className="btn btn-primary btn-block"
                //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                type="submit"
              >
                Reservar
              </button>
              <a className="btn btn-dark btn-block"
                //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                href={process.env.REACT_APP_ADMIN_URL+"/reservas"}
              >
                Volver
              </a>
              {/* <h5 class="card-title">MODELO:
                <input
                  name="tipoBicicleta"
                  value={tipoBicicleta}
                  className="ml-2"
                  type="text"
                  placeholder="Inserte modelo"
                  onChange={this.changeHandler}
                />
              </h5>
              <h5 >MARCA:
                <input
                  name="marca"
                  value={marca}
                  className="ml-4"
                  type="text"
                  placeholder="Inserte marca"
                  onChange={this.changeHandler}
                />
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <h5 >Color:
                  <input
                    name="color"
                    value={color}
                    className="ml-5"
                    type="text"
                    placeholder="Inserte color"
                    onChange={this.changeHandler}
                  />
                </h5>
              </li>
              <h3 className="text-center">ubicación</h3>
              <li class="list-group-item">
                <div className="ml-3">
                  Latitud
                  <input
                    name="lat"
                    value={lat}
                    className="ml-5"
                    type="text"
                    placeholder="Inserte color"
                    onChange={this.changeHandler}
                  />
                </div>
                <div >
                  Longitud:
                  <input
                    name="long"
                    value={long}
                    className="ml-5 mt-2"
                    type="text"
                    placeholder="Inserte longitud"
                    onChange={this.changeHandler}
                  />
                </div>
              </li>
              <li class="list-group-item ml-3">
                Estado:
                <input
                  name="estado"
                  value={estado}
                  className="ml-5"
                  type="text"
                  placeholder="Inserte estado"
                  onChange={this.changeHandler}
                />
              </li>
              <button className="btn btn-warning btn-block"
                //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                type="submit"
              >
                Eliminar
              </button>
              <a className="btn btn-dark btn-block"
                //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
                href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
              >
                Volver
              </a>
            </ul>
          </div> */}
            </div>
          </div>
        </div>
      </form>
    )
  }
}

export default withRouter (ReservarBici)



// import React from 'react'
// import axios from 'axios';
// import { BicicletaContext } from '../context/BicicletaProvider';


// const Editar = () => {

//   function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   }
//   const r = getRandomInt(1, 4);
//   const montaña = "https://hubsports.mx/wp-content/uploads/2020/02/ciclismo-montana-equipo.jpg";
//   const ruta = "https://www.claro.com.co/portal/co/noticias/imagenes/1603899956023-5-og-Historia%20del%20ciclismo.jpg";
//   const ruta2 = "https://labicikleta.com/wp-content/uploads/2017/05/CiclistaRuta-1024x683.jpg";


//   const { bici } = React.useContext(BicicletaContext)
//   const [color, setColor] = React.useState("");
//   const [latitud, setLatitud] = React.useState("");
//   const [longitud, setLongitud] = React.useState("");
//   const [modelo, setModelo] = React.useState("");
//   const [usuario ,setUsuario] = React.useState("");
//   const [marca, setMarca] = React.useState("");
//   const [estado, setEstado] = React.useState("");
//   const [nuevaBici,setNuevaBici]=React.useState({});
//   const [accesoAPI, setAccesoAPI] = React.useState({});
//   const [datos, setDatos] = React.useState({});


//   const urlApi = process.env.REACT_APP_BICI_URL + "/bicicleta/" + bici.bici;
//   //const [Bicicleta, setBicicleta] = React.useContext(BicicletaContext);

//   React.useEffect(() => {
//     const consultaAPI = async () => {
//      const consulta= await axios({ method: accesoAPI.tipo, url: urlApi, data: datos });

//       console.log(consulta)
//     };

//     consultaAPI();
//     //result();
//   }, []);

//   const editarBici = async (e) => {
//     e.preventDefault()
//     if(color!=""){   
//       setNuevaBici({...nuevaBici,color:color})
//     }

//     if(estado!=""){
//       setNuevaBici({...nuevaBici,estado:estado})
//     }

//     if(latitud!=""){
//       setNuevaBici({...nuevaBici,lat:latitud})
//     }

//     if(longitud!=""){
//       setNuevaBici({...nuevaBici,long:longitud})
//     }

//     if(marca!=""){
//       setNuevaBici({...nuevaBici,marca:marca})
//     }

//     if(modelo!=""){
//       setNuevaBici({...nuevaBici,modelo:modelo})
//     }

//     setAccesoAPI({ 
//       tipo: 'PATCH',
//       url: urlApi ,
//     });

//     setDatos(nuevaBici);
//     }
//     // console.log("nuevaBici")
//     // console.log(nuevaBici)
//     // console.log(urlApi)



//   return (
//     <form  onSubmit={editarBici}>
//       <div className="col-sm-12">
//         <div class="card  mt-3 " style={{ width: 400 }}>
//           {
//             r == 1 ? (
//               <img src={montaña} class="card-img-top" width="304" height="236" />
//             ) : (
//               r == 2 ? (
//                 <img src={ruta} class="card-img-top" width="304" height="236" />
//               ) : (
//                 <img src={ruta2} class="card-img-top" width="304" height="236" />
//               )
//             )
//           }
//           <div class="card-body">
//             <h5 class="card-title">MODELO:
//               <input 
//                 className="ml-2"
//                 type="text"
//                 placeholder="Inserte modelo"
//                 onChange={e => setModelo(e.target.value)}
//                 value={modelo}
//               />
//             </h5>
//             <h5 >MARCA:
//               <input 
//                 className="ml-4"
//                 type="text"
//                 placeholder="Inserte marca"
//                 onChange={e => setMarca(e.target.value)}
//                 value={marca}
//               />
//             </h5>
//             <h5 >Usuario:
//               <input 
//                 className="ml-4"
//                 type="text"
//                 placeholder="Inserte marca"
//                 onChange={e => setUsuario(e.target.value)}
//                 value={usuario}
//               />
//             </h5>
//             </div>
//           <ul class="list-group list-group-flush">
//             <li class="list-group-item">
//               <h5 >Color:
//               <input 
//                 className="ml-5"
//                 type="text"
//                 placeholder="Inserte color"
//                 onChange={e => setColor(e.target.value)}
//                 value={color}
//               />
//             </h5>           
//             </li>
//             <h3 className="text-center">ubicación</h3>
//             <li class="list-group-item">
//               <div className="ml-3">
//               Latitud:
//               <input 
//                className="ml-5"
//                type="text"
//                 placeholder="Inserte latitud"
//                 onChange={e => setLatitud(e.target.value)}
//                 value={latitud}
//               />
//               </div>
//               <div >
//               Longitud:
//               <input 
//                 className="ml-5 mt-2"
//                 type="text"
//                 placeholder="Inserte longitud"
//                 onChange={e => setLongitud(e.target.value)}
//                 value={longitud}
//               />
//               </div>

//             </li>
//             <li class="list-group-item ml-3">
//               Estado:
//               <input 
//                className="ml-5"
//                type="text"
//                 placeholder="Inserte estado"
//                 onChange={e => setEstado(e.target.value)}
//                 value={estado}
//               />
//             </li>
//             <button className="btn btn-dark btn-block"
//               //href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
//               type="submit"
//             >
//               Editar
//             </button>
//           </ul>
//         </div>
//       </div>
//     </form>
//   )
// }

// export default Editar
