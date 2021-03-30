import React, { useContext } from 'react'
import { ActivityIndicator, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'
import { Context as LocationContext } from '../context/LocationContext';

const Map = () => {
    const { state: { currentLocation } } = useContext(LocationContext);

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
            region={{
                ...currentLocation.coords,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        >
        </MapView >
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;