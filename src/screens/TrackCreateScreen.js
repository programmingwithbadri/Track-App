import '../_mockLocation';
import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
    const { addLocation } = useContext(LocationContext);
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
            await watchPositionAsync({
                accuracy: Accuracy.BestForNavigation,
                timeInterval: 1000,
                distanceInterval: 10,
            }, (location) => {
                addLocation(location);
            });
        } catch (e) {
            console.error(e)
            setErr(e);
        }
    }

    useEffect(() => {
        startWatching();
    }, [])

    return (
        <SafeAreaView>
            <Text h2> TrackCreateScreen </Text>
            <Map />
            {err
                ? <Text>Please enable the location</Text>
                : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen;