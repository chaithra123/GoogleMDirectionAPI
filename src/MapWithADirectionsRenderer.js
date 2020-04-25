/*global google*/
import React from "react";
import ReactDOM from "react-dom";
//import { DirectionsRenderer } from "react-google-maps";
import { compose, withProps, lifecycle } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,

} from "react-google-maps";

//const google=window.google
//import { DirectionsRenderer } from "react-google-maps";

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL:
    "https://maps.googleapis.com/maps/api/js?key=AIzaSyBjwnK_zvDGQokuzDJ0NVnR979L_KNEYuo&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,

  lifecycle({
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route(
        {
          origin: new google.maps.LatLng(-36.851085, 174.769930),
          destination: new google.maps.LatLng(-41.28664, 174.77557),

          travelMode: google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: result
            });
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }
  })
)(props => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
));

ReactDOM.render(
  < MapWithADirectionsRenderer directions />,
  document.getElementById("root")
);

export default MapWithADirectionsRenderer;