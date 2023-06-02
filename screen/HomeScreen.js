


import React from 'react'
import { View, Text } from 'react-native'
// import SearchScreen from './screen/Search';
import SearchSection from '../screen/Search/SearchSection'

const HomeScreen = () => {
    return (
        <View style={{

            // height: '100%',
            // backgroundColor: '#54CBFF',
            // justifyContent: 'center',
            // alignItems:'center'
        }}>
            {/* <Text style={{ fontSize: 40, fontWeight: 'bold', letterSpacing: 4 }}>Home Screen</Text> */}
            <Text>HomeScreen</Text>

            {/*  */} 
             <SearchSection/>
           
        </View>
    );
};

export default HomeScreen
