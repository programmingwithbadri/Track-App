import React, { useContext } from 'react'
import { Input, Button } from 'react-native-elements'
import Spacer from '../components/Spacer';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
    const { state: { name, recording, locations },
        startRecording,
        stopRecording,
        changeName } = useContext(LocationContext);

    return (
        <>
            <Spacer>
                <Input value={name} placeholder="Enter name" onChangeText={changeName} />
            </Spacer>
            {recording
                ? <Button title="Stop" onPress={stopRecording} />
                : <Button title="Start Recording" onPress={startRecording} />
            }
            <Spacer>
                {
                    !recording && locations.length
                        ? <Button title="Save the recording" />
                        : null
                }
            </Spacer>
        </>
    )
}

export default TrackForm;