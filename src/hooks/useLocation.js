import { useState, useEffect } from 'react';
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location';

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null);

    useEffect(() => {
        let subscriber;
        // Helper methods that access props/states should be inside useEffect to avoid bugs
        const startWatching = async () => {
            try {
                await requestPermissionsAsync();
                subscriber = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10,
                }, callback);
            } catch (e) {
                console.error(e)
                setErr(e);
            }
        }

        if (shouldTrack) {
            startWatching();
        } else {
            if (subscriber) {
                subscriber.remove();
            }
            subscriber = null;
        }

        return () => { // Clean up the subscription
            if (subscriber) {
                subscriber.remove();
            }
        }
    }, [shouldTrack, callback])

    return [err];
}