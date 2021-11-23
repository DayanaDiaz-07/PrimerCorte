import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'

const Navbar = (props) => {
    const cerrarSesion = () => {
        auth.signOut()
            .then(() => {
                props.history.push('/login')
            })
    }
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">
                EAfitBikes  
            </Link>
            <div>
                <div className="d-flex">
                    {
                        //props.firebaseUser && (
                            <NavLink
                                className="btn btn-dark mr-2"
                                to="/admin"
                            >
                                Mapa <i class="fas fa-map-marker-alt"></i>
                            </NavLink>
                       // )
                    }{
                        props.firebaseUser && (
                            <NavLink
                                className="btn btn-dark mr-2"
                                to="/reservas"
                            >
                                Reservas <i class="fas fa-laptop"></i>
                            </NavLink>
                            // <a className=" btn btn-dark" href="https://es-la.facebook.com/">
                            //     Bicicletas
                            // </a>
                        )
                    }{


                      //  props.firebaseUser && (
                            <NavLink
                                className="btn btn-dark mr-2"
                                to="/bicicletas"
                            >
                                Bicicletas <i class="fas fa-bicycle"></i>
                            </NavLink>
                            // <a className=" btn btn-dark" href="https://es-la.facebook.com/">
                            //     Bicicletas
                            // </a>
                       // )
                    }
                    {
                        props.firebaseUser !== null ? (
                            <button
                                className="btn btn-dark"
                                onClick={() => cerrarSesion()}
                            >
                                Cerrar Sesión <i class="fas fa-times-circle"></i>
                            </button>
                        ) :
                            <NavLink
                                className="btn btn-dark"
                                to="/"
                            >
                                Login <i class="fas fa-home"></i>
                            </NavLink>
                    }
                </div>
            </div>
        </div>
    )
}

export default withRouter(Navbar)
