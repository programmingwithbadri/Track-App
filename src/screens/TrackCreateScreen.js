import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import Map from '../components/Map'
import { requestPermissionsAsync } from 'expo-location'

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);
    const startWatching = async () => {
        try {
            await requestPermissionsAsync();
        } catch (e) {
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
                ? <Text>PLease enable the location</Text>
                : null
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default TrackCreateScreen;