import React, { useContext } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { Context as TrackContext } from '../context/TrackContext';
import { NavigationEvents } from 'react-navigation';
import { ListItem } from 'react-native-elements';

const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);
    return (
        <>
            <NavigationEvents onWillFocus={fetchTracks} />
            <FlatList
                data={state}
                keyExtractor={item => item._id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TrackDetail', { _id: item._id });
                        }}>
                            <ListItem bottomDivider >
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    )
                }}
            />
        </>
    )
}

TrackListScreen.navigationOptions = {
    title: 'My Tracks'
};

export default TrackListScreen;