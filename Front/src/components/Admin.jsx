import React from 'react'
import { auth } from '../firebase'
import { withRouter } from 'react-router-dom'
import Mapa from './Mapa'

const Admin = (props) => {
    const [user, setUser] = React.useState(null)
    const [foto, setFoto] = React.useState(null)
    const [email, setEmail] = React.useState(null)

    React.useEffect(() => {
        if (auth.currentUser) {
            console.log("Existe")
            console.log(auth.currentUser.providerData)
            setUser(auth.currentUser.displayName)
            setFoto(auth.currentUser.photoURL)
            setEmail(auth.currentUser.email)
        } else {
            setUser("Invitado")
            setFoto("data:image/png;base64,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")
            setEmail("Invidado")
        }
    }, [])
    return (
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
            <div>
                <Mapa></Mapa>
            </div>
        </div>
    )
}

export default withRouter(Admin)
