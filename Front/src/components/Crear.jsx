import React, { Component } from 'react'
import axios from 'axios'
import { auth } from '../firebase'



class Crear extends Component {


  constructor(props) {
    super(props)

    this.state = {
      
     // estado: '',
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
   
    e.preventDefault()
    const urlApi = process.env.REACT_APP_BICI_URL;


    let datos = {
    }
    if (this.state.color[0] != undefined) {
      datos = { ...datos, color: this.state.color[0] }
    }
    // if (this.state.estado[0] != undefined) {
    //   datos = { ...datos, estado: this.state.estado[0] }
    // }
    if (this.state.lat[0] != undefined) {
      datos = { ...datos, lat: this.state.lat[0] }
    }
    if (this.state.long[0] != undefined) {
      datos = { ...datos, long: this.state.long[0] }
    }
    if (this.state.marca[0] != undefined) {
      datos = { ...datos, marca: this.state.marca[0] }
    }
    if (this.state.tipoBicicleta[0] != undefined) {
      datos = { ...datos, tipoBicicleta: this.state.tipoBicicleta[0] }
    }

    console.log(datos)
    axios.post(urlApi + "/bicicleta/", datos)
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
      //estado,
      marca,
      tipoBicicleta,
      color,
      long,
      lat,
    } = this.state

    return (
      <div className="mt-2" id="fondo1">
      <form  id="formulario" onSubmit={this.submitHandler}>
        <div className="col-sm-12">
          <div class="card  mt-3 " style={{ width: 400 }}>
            
            <div class="card-body">
              
              <h5 class="card-title">MODELO:
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
              {/* <li class="list-group-item ml-3">
                Estado:
                <input
                  name="estado"
                  value={estado}
                  className="ml-5"
                  type="text"
                  placeholder="Inserte estado"
                  onChange={this.changeHandler}
                />
              </li> */}
              <button className="btn btn-success btn-block"
               
                type="submit"
              >
                Agregar
              </button>
              <a className="btn btn-dark btn-block"
               
                href={process.env.REACT_APP_ADMIN_URL+"/bicicletas"}
              >
                Volver
              </a>
            </ul>
          </div>
        </div>
      </form>
      </div>
    )
  }
}

export default Crear

