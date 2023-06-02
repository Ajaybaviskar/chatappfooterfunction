import React from 'react';
import { View, Text } from 'react-native';
import PostAdd from './PostImgAdd.js/PostimgAdd';
 
const PostScreen = () => {
    return (
        <View style={{
            //    height: '100%',
            // backgroundColor: '#33E6Fa',
            // justifyContent: 'center',
            // alignItems:'center'
        }}>
            <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 4 }}>PostScreen</Text>
            
            <PostAdd/>
        </View>
    )
}
export default PostScreen;