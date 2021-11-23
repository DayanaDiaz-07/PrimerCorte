import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Admin from './components/Admin';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import {auth} from './firebase'
import Bicicletas from './components/Bicicletas';
import { Actividades } from './components/Actividades';
import Mostrar from './components/Mostrar';
import BicicletaProvider from './context/BicicletaProvider';
import Editar from './components/Editar';
import Eliminar from './components/Eliminar';
import Reservas from './components/Reservas';
import Alquiler from './components/Alquiler';
import Crear from './components/Crear';
import ReservarBici from './components/ReservarBici';
import EditarV2 from './components/EditarV2';
import EditarV3 from './components/EditarV3';

function App() {


  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useState(()=>{
    auth.onAuthStateChanged(user=>{
      console.log(user)
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(null)
      }
    })
  },[])
  return firebaseUser!==false ?(
    <BicicletaProvider>
    <Router>
      <div className="container">
        <Navbar firebaseUser={firebaseUser}></Navbar>
        <Switch>
          <Route path="/" exact>
          <Login></Login>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="/reservas">
            <Reservas></Reservas>
          </Route>
          <Route path="/alquiler">
            <Alquiler></Alquiler>
          </Route>
          <Route path="/bicicletas" exact>
            <Bicicletas></Bicicletas>
          </Route>
          <Route path="/mostrar" exact>
            <Mostrar></Mostrar>
          </Route>
          <Route path="/crear" exact>
            <Crear></Crear>
          </Route>
          <Route path="/eliminar" exact>
            <Eliminar></Eliminar>
          </Route>
          <Route path="/actividades" exact>
            <Actividades></Actividades>
          </Route>
          <Route path="/reservarbici" exact>
            <ReservarBici></ReservarBici>
          </Route>
          <Route path="/:id" exact>
            <Editar></Editar>
          </Route>
        </Switch>
        
        <Footer></Footer>
      </div>
    </Router>
    </BicicletaProvider>
  ):(
    "loading"
  );
}

export default App;
