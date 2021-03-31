import '../_mockLocation';
import React, { useContext, useCallback } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { withNavigationFocus } from 'react-navigation';
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = ({ isFocused }) => {
    const { state: { recording }, addLocation } = useContext(LocationContext);

    const callback = useCallback((location) => {
        addLocation(location, recording)
    }, [recording])

    const [err] = useLocation(isFocused, callback);
    return (
        <SafeAreaView>
            <Text h2> TrackCreateScreen </Text>
            <Map />
            {err
                ? <Text>Please enable the location</Text>
                : null
            }
            <TrackForm />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})

export default withNavigationFocus(TrackCreateScreen);