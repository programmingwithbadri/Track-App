import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Polyline, Circle } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation, locations } } = useContext(LocationContext);

    if (!currentLocation) {
        return <ActivityIndicator size="large" style={{ marginTop: 200 }} />
    }
    return (
        // Region - will set the screen to the current location.
        // Wont allow to drag and see other locations
        // latitudeDelta and longitudeDelta - shows the width or zoom of the map
        <MapView
            style={styles.map}
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        >
            <Circle
                center={currentLocation.coords}
                radius={100}
                strokeColor="rgba(158,158,255,1.0)"
                fillColor="rgba(158,158,255,0.3)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)}/>
        </MapView >
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;