import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class CreatePost extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Your Profile</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})