import React from 'react';
import { View, Text } from 'react-native';
const ProfileScreen = () => {
    return (
        <View style={{
            height: '100%',
            backgroundColor: '#A9F1DC',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:4}} >ProfileScreen</Text>
        </View>
    )
}
export default ProfileScreen;