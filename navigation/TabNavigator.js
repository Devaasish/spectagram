import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feeds from '../screens/Feeds';
import CreatePost from '../screens/CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator 
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if (route.name === "Feeds") {
                        iconName = focused ? 'book' : 'book-outline'
                    } else if (route.name === "CreatePost") {
                        iconName = focused ? 'create' : 'create-outline'
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
            })}
            tabBarOptions={{
                activeTintColor: 'blue',
                inactiveTintColor: 'gray',
            }} 
        >
            <Tab.Screen name="Feeds" component={Feeds} />
            <Tab.Screen name="CreatePost" component={CreatePost} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator
