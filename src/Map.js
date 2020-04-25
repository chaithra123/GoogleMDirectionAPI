
import React from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Polyline,
    Marker
} from 'react-google-maps'

class Map extends React.Component {


    path = [
        { lat: -36.851085, lng: 174.769930 },

        { lat: -41.28664, lng: 174.77557 },
      ];

    render = () => {
        return (
            <GoogleMap  
                defaultZoom={16}
                defaultCenter={{  lat: -36.851085, lng: 174.769930 }}
            >
                <Polyline path={this.path} options={{ strokeColor: "#FF0000 " }} />
                <Marker position={this.path[this.path.length-1]}/>
            </GoogleMap>
        )

    }

}

const MapComponent = withScriptjs(withGoogleMap(Map))


export default () => (
    <MapComponent

        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBjwnK_zvDGQokuzDJ0NVnR979L_KNEYuo&libraries=geometry,drawing,places"

        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `500px`, width: '1000px' }} />}
        mapElement={<div style={{ height: `100%` }} />}

    />




)