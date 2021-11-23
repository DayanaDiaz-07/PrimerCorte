import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import React from 'react';
import '../index.css';

class Mapa extends React.Component{
  state = { markers: [] };

   componentDidMount() {
     fetch(process.env.REACT_APP_BICI_URL + "/bicicletas")
       .then((response) => response.json())
       .then((response) => {
         this.setState({ markers: response });
       });
   }
   
  
  render(){
    
    return (
      <div className="mt-5">
      <MapContainer center={[4.567690385580256,-74.23901343872879] } zoom={10} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.state.markers.length > 0 &&
         this.state.markers.map((marker) => (
           <Marker
             position={[
               marker.lat,
               marker.long
             ]}
             
           >
             
           </Marker>
         ))}
      </MapContainer>
      </div>
    );
  }
}

export default Mapa;
