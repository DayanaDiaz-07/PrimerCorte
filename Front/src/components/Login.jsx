import React from 'react'
import { auth, firebase } from '../firebase'
import { withRouter } from 'react-router-dom'
import { render } from "react-dom";

// get our fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = (props) => {
    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [error, setError] = React.useState(null)
    const [esRegistro, setEsRegistro] = React.useState(true)

    const procesarDatos = e => {
        e.preventDefault()
        acceder()
        // if(!email.trim()){
        //    // console.log("ingrese email")
        //     setError("ingrese email");
        //     return
        // }
        // if(!pass.trim()){
        //    // console.log("ingrese password")
        //     setError("ingrese password");
        //     return
        // }
        // if(pass.length<6){
        //    // console.log("pass mayor a 6")
        //     setError("ingrese password")
        // }
        // setError(null);

        // if (esRegistro){
        //     registrar();
        // }else{
        //     acceder();
        // }
    }

    // const registrar = React.useCallback(async() => {
    //     try {
    //         console.log("tryRegistrar")
    //         const provider = new firebase.auth.GoogleAuthProvider();
    //         //const res = await auth.createUserWithEmailAndPassword(email, pass)
    //         const res = await auth.signInWithPopup(provider)
    //         console.log(res.user)
    //         await db.collection('EAfitBikeUsuarios').doc(res.user.uid).set({
    //             fechaCreacion: Date.now(),
    //             displayName: res.user.displayName,
    //             photoURL: res.user.photoURL,
    //             email: res.user.email,
    //             uid: res.user.uid
    //         })
    //         setEmail('')
    //         setPass('')
    //         setError(null)
    //         props.history.push('/admin') 
    //     } catch (error) {
    //         console.log("catchRegistrar")
    //         console.log(error)
    //         // setError(error.message)
    //         if(error.code === 'auth/email-already-in-use'){
    //             setError('Usuario ya registrado...')
    //             return
    //         }
    //         if(error.code === 'auth/invalid-email'){
    //             setError('Email no válido')
    //             return
    //         }
    //     }
    // }, [email, pass, props.history])

    const acceder = React.useCallback(async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            console.log("awquijfdsa")
            //const res = await auth.createUserWithEmailAndPassword(email, pass)
            await auth.signInWithPopup(provider)
            setEmail('')
            setPass('')
            setError(null)
            props.history.push('/admin')
        } catch (error) {
            setError(error)
            // console.log("errrororororor")
            // if(error.code === 'auth/user-not-found'){
            //     setError('Usuario o contraseña incorrecta')
            // }
            // if(error.code === 'auth/wrong-password'){
            //     setError('Usuario o contraseña incorrecta')
            // }
            // console.log(error.code)
            // console.log(error.message)
        }
    }, [email, pass, props.history])


    return (
        <div className="mt-5">
            <h3 className="text-center">
                Bienvenido a EAfitBike
            </h3>
            <hr />
            <div className="row justify-content-center">
                <div className="col-12 col-sm-8 col-md-6 col-xl-4">
                    <form onSubmit={procesarDatos}>
                        {
                            error && (
                                <div className="alert alert-danger">
                                    {error}
                                </div>
                            )

                        }
                        {/* <input 
                            type="email" 
                            className="form-control mb-2"
                            placeholder="Ingrese Email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                        />
                        <input 
                            type="password" 
                            className="form-control mb-2"
                            placeholder="Ingrese Contraseña"
                            onChange={e => setPass(e.target.value)}
                            value={pass}
                        /> */}
                        <button
                            className="btn btn-lg btn-dark btn-block"
                            type="submit"
                        >
                            Accede con tu cuenta google <i class="fab fa-google"></i>
                                
                        </button>
                        {/* <button 
                            className="btn btn-sm btn-info btn-block"
                            type="button"
                            onClick={()=> setEsRegistro(!esRegistro)}
                        >
                            {
                                esRegistro ? "¿Ya estas registrado?" : "¿No tienes cuenta?"
                            }
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)