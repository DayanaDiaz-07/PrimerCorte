import React from 'react'

export const Actividades = () => {
    const paseos=[
            {
            id:1,
            fecha:"14/09/2021",
            ruta: "link",
            cantidad: 20,
            instrucciones: "Intruciones bla bla bla",
          },
          {
            id:2,
            fecha:"11/11/2021",
            ruta: "link",
            cantidad: 50,
            instrucciones: "Intruciones bla bla bla",
          },
        ]
        const competencia=paseos;
        const rutas=paseos;
        
    return (
        <div className="row">
            <div className="col-4">
                <ul className="list-group mt-3">
                    {
                        paseos.map((item)=>(
                            <li className="list-group-item text-uppercase" key={item.id}>
                                <div class="card" style={{width: 300}}>
                                    <div class="card-body">
                                        <h5 class="card-title">Fecha de evento: {item.fecha}</h5>
                                        <p class="card-text">{item.instrucciones}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Recorrido: {item.ruta}</li>
                                        <li class="list-group-item">Cantidad: {item.cantidad}</li>
                                        <li class="list-group-item">
                                            <button class="btn btn-warning mr-5 ml-4">Editar</button>
                                            <button class="btn btn-danger">Eliminar</button>
                                        </li>
                                    </ul>
                                </div> 
                            </li>
                        ))
                    }
                </ul> 
                </div>   

                <div className="col-4">
                <ul className="list-group mt-3">
                    {
                        rutas.map((item)=>(
                            <li className="list-group-item text-uppercase" key={item.id}>
                                <div class="card" style={{width: 300}}>
                                    <div class="card-body">
                                        <h5 class="card-title">Fecha de evento: {item.fecha}</h5>
                                        <p class="card-text">{item.instrucciones}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Recorrido: {item.ruta}</li>
                                        <li class="list-group-item">Cantidad: {item.cantidad}</li>
                                        <li class="list-group-item">
                                            <button class="btn btn-warning mr-5 ml-4">Editar</button>
                                            <button class="btn btn-danger">Eliminar</button>
                                        </li>
                                    </ul>
                                </div> 
                                
                                
                                
                                
                                {/* <button 
                                    onClick={()=> dispatch(unPokeDetalleAcción(item.url))}
                                    className="btn btn-dark btn-sm float-right" 
                                >
                                    Info.
                                </button> */}
                            </li>
                        ))
                    }
                </ul> 
                </div>  
                <div className="col-4">
                <ul className="list-group mt-3">
                    {
                        competencia.map((item)=>(
                            <li className="list-group-item text-uppercase" key={item.id}>
                                <div class="card" style={{width: 300}}>
                                    <div class="card-body">
                                        <h5 class="card-title">Fecha de evento: {item.fecha}</h5>
                                        <p class="card-text">{item.instrucciones}</p>
                                    </div>
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item">Recorrido: {item.ruta}</li>
                                        <li class="list-group-item">Cantidad: {item.cantidad}</li>
                                        <li class="list-group-item">
                                            <button class="btn btn-warning mr-5 ml-4">Editar</button>
                                            <button class="btn btn-danger">Eliminar</button>
                                        </li>
                                    </ul>
                                </div> 
                                
                                
                                
                                
                                {/* <button 
                                    onClick={()=> dispatch(unPokeDetalleAcción(item.url))}
                                    className="btn btn-dark btn-sm float-right" 
                                >
                                    Info.
                                </button> */}
                            </li>
                        ))
                    }
                </ul> 
                </div>                 
        </div>
    )
}
