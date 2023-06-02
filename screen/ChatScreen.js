import React from 'react';
import { View, Text } from 'react-native';
const ChatScreen = () => {
    return (
        <View style={{
            height: '100%',
            backgroundColor: '#49F3C2',
            justifyContent: 'center',
            alignItems:'center'
        }}>
            <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:4}} >ChatScreen</Text>
        </View>
    )
}
export default ChatScreen;