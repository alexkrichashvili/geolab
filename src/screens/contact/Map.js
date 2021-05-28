import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import styles from './Contact.module.css';

const containerStyle = {
     width: '100%',
     height: '615px',
     marginbottom: '50px',
};

const center = {
     lat: 41.6995296,
     lng: 44.7930287,
};

export default function Map() {
     const { isLoaded } = useJsApiLoader({
          id: 'google-map-script',
          googleMapsApiKey: 'AIzaSyAxD5EslwnpdWv9PsEfEHWsois6gIKwfIs',
     });

     const [map, setMap] = React.useState(null);

     const onLoad = React.useCallback(function callback(map) {
          const bounds = new window.google.maps.LatLngBounds();
          map.fitBounds(bounds);
          setMap(map);
     }, []);

     const onUnmount = React.useCallback(function callback(map) {
          setMap(null);
     }, []);

     return isLoaded ? (
          <GoogleMap
               mapContainerClassName={styles.GoogleMap}
               mapContainerStyle={containerStyle}
               center={center}
               zoom={14}
               onLoad={onLoad}
               onUnmount={onUnmount}
          >
               {/* Child components, such as markers, info windows, etc. */}
               <></>
          </GoogleMap>
     ) : (
          <></>
     );
}
