import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const MyMapComponent = withScriptjs(
    withGoogleMap((props) => (
      <GoogleMap
        defaultZoom={15}
        defaultCenter={{ lat: 44.434564048412945, lng: 26.036343362490694 }}
      >
        <Marker
          position={{ lat: 44.434564048412945, lng: 26.036343362490694 }}
        />
      </GoogleMap>
    ))
  );
  export default MyMapComponent;