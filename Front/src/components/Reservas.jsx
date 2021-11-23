import React from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import { BicicletaContext } from '../context/BicicletaProvider'


const Reservas = (props) => {
    const [user, setUser] = React.useState(null)
    const [foto, setFoto] = React.useState(null)
    const [email, setEmail] = React.useState(null)
    const { bici, setBici } = React.useContext(BicicletaContext)
    const [ListaBicicletas, setData] = React.useState([{}])
    const [idElim, setIdElim] = React.useState("");
    const [usuario, setUsuario] = React.useState([{}]);

    React.useEffect(async () => {
        if (auth.currentUser) {
            console.log("Existe")
            console.log(auth.currentUser.providerData)
            setUser(auth.currentUser.displayName)
            setFoto(auth.currentUser.photoURL)
            setEmail(auth.currentUser.email)
        } else {
            props.history.push('/')
            setUser(null)
        }

        //const urlApi = process.env.REACT_APP_BICI_URL + "/bicicleta/";
        // const result = await axios(
        //     process.env.REACT_APP_BICI_URL + "/bicicletas",
        // );
        // setData(result.data);

        const result2 = await axios(
            process.env.REACT_APP_RESERVAS_URL + "/reservas",
        );
        setUsuario(result2.data);
        console.log(result2.data);
    }, [setUsuario])

   

    function eliminar2(idReserva){
        
        console.log("hey")
        fetch(process.env.REACT_APP_RESERVAS_URL + "/reserva/"+idReserva,{method:'DELETE'})
        .then((response) => response.json())
        .then((response) => {
            window.location.reload();
        });
    }


    return (

        <div className="mt-3" id="fondo2">
        <div>
            <div class="row">
                <div className="mt-1 text-center col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <img src={foto} alt="" width="100px" className="img-fluid" />
                            <h5 className="card-title">{user}</h5>
                            <p className="card-text">Email:{email}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row"
            >
                <div
                    className="col-9"
                    style={{
                        marginTop: "20px",
                        marginRight: "0px",
                        marginLeft: "10px"
                    }}
                >
                    <a className="btn btn-dark mb-5 ml-5" href="/alquiler">
                        Bicicletas disponibles
                    </a>
                    <table className="table ml-5  table-striped table-secondary">
                        <thead>
                            <th>
                                ID_reserva
                            </th>

                            <th>
                                ID_bicicleta
                            </th>
                            <th>
                                Usuario
                            </th>
                            <th>
                                Finalizar
                            </th>
                            {/* <th>
                                Reservar
                            </th> */}

                        </thead>
                        <tbody>
                            {usuario.map((user, index) => {
                                return (
                                    <tr key={user._id}>
                                        <td>
                                            {user._id}
                                        </td>
                                        <td>
                                            {user.idBicicleta}
                                        </td>
                                        <td>
                                            {user.idUsuario}
                                        </td>
                                        <td>
                                        <button
                                                className="btn btn-danger"
                                                onClick={()=>eliminar2(user._id)}
                                                >
                                                Finalizar
                                            </button>
                                        </td>


                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <div
                    className="col-3"
                    style={{
                        marginTop: "150px",
                        marginLeft: "0px",
                    }}
                >

                </div>
            </div>
        </div>

        </div>

    )
}


export default withRouter(Reservas)
