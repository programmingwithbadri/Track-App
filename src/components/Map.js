import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Map = () => {
    let points = []; // Testdata to see the navigation line in map

    for (let i = 0; i < 20; i++) {
        points.push({
            latitude: 13.067439 + i * 0.001,
            longitude: 80.237617 + i * 0.001
        })
    }

    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 13.067439,
                longitude: 80.237617,
                latitudeDelta: 0.04,
                longitudeDelta: 0.05,
            }}
        >
            <Polyline coordinates={points}/>
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300
    }
})

export default Map;