import React, { useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'
import { BicicletaContext } from '../context/BicicletaProvider';


const EditarV3 = (props) => {
    const { bici, setBici } = React.useContext(BicicletaContext)
    const [ListaBicicletas, setData] = React.useState([{}])
    const [idElim, setIdElim] = React.useState("");
    const [Bicicleta, setBicicleta] = React.useState({})
    const urlApi = process.env.REACT_APP_BICI_URL + "/bicicleta" + props.location.pathname;

    console.log(process.env.REACT_APP_BICI_URL + "/bicicletas")

    useEffect(async () => {
        console.log(urlApi)
        // const result = await axios(
        //   process.env.REACT_APP_BICI_URL + "/bicicletas",
        // );
        // setData(result.data);

        // await axios.delete( urlApi+idElim);
        // console.log("eliminado")
        // console.log(urlApi+idElim)
    }, []);



    //   const mostrar = React.useCallback((id) => {
    //     setBici({ ...bici, bici: id });
    //     props.history.push('/mostrar/')
    //     console.log(id)
    //   }, [props.history]);

    //   const editar = React.useCallback((id, color, tipoBicicleta, lat, long, estado, usuario) => {
    //     setBici({ ...bici, bici: id });

    //     props.history.push('/'+id)
    //   }, [props.history]);

    const editar = React.useCallback((id) => {
        console.log("hey")
        fetch(urlApi, {
            method: 'PATCH',
            json: true,
            body: JSON.stringify({
                color: 'Morado',
            })
        })
            .then((response) => response.json())
            .then((response) => {
                window.location.reload();
            });
    }, [setIdElim]);


    return (
        // 

        <button
            onClick={() => editar()}
        >
            Eliminar prueba
        </button>
    )
}
export default withRouter(EditarV3)


