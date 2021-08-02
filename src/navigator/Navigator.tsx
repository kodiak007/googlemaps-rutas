import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { MapScreen } from '../pages/MapScreen';
import { PermisionScreen } from '../pages/PermisionScreen';
import { PermissionsContext } from '../context/PermissionsContext';
import { LoadingScreen } from '../pages/LoadingScreen';

const Stack = createStackNavigator();

export const Navigator = () => {

    const { permissions } = useContext(PermissionsContext);

    if( permissions.locationStatus === 'unavailable' ){
        return <LoadingScreen />
    }

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle:{
                    backgroundColor: 'white'
                }
            }}
        >

            {
            (permissions.locationStatus === 'granted')
            ? <Stack.Screen name="PermisionScreen" component={PermisionScreen} />
            : <Stack.Screen name="MapScreen" component={MapScreen} />
            }
            
            
        </Stack.Navigator>
    );
}