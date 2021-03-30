import React from 'react'
import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'


const Map = () => {
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 13.067439,
                longitude: 80.237617,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        />
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;