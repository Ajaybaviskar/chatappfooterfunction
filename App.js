// import { StatusBar } from 'expo-status-bar';
import { StatusBar} from 'react-native';
import Regform from './components/regform'
import Ionic from "react-native-vector-icons/Ionicons"
import {NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from './screen/HomeScreen';
// import SearchScreen from './screen/Search';
import ChatScreen from './screen/ChatScreen';
import PostScreen from './screen/PostScreen';
import ProfileScreen from './screen/ProfileScreen';


// export default function App() {
//   const Tab = createBottomTabNavigator();
 
//   return (
//     <View style={styles.container}>
//       {/* <Regform />  */}
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomeScreen}/>
//         </Tab.Navigator>
//       </NavigationContainer>


    
//       <Text>Ajay</Text>
//       <Ionic name="home" />
//       </View>
  
  

//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // backgroundColor: '#36485f',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingLeft: 60,
//     paddingRight: 60,

//   },
// });

const App = () => {
  const Tab = createBottomTabNavigator();
  return (   
    <>
    <StatusBar backgroundColor="#54CBFF" barStyle="dark-content" />
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "ios-home" : "ios-home-outline";
              size = focused ? size + 8 : size + 5;

            }          
            else if (route.name === "Post") {
              iconName = focused ? "add-circle-outline" : "add-circle-sharp";
              size = focused ? size + 8 : size + 5;
            }
            else if (route.name === "Chat") {
              iconName = focused ? "chatbubbles-outline" : "chatbubbles";
              size = focused ? size + 8 : size + 5;
            }
            else if (route.name === "Profile") {
              iconName = focused ? "happy-outline" : "happy-sharp";
              size = focused ? size + 8 : size + 5;
            }
            return <Ionic name={iconName} size={size} colour={colour} />;
          },
          
          
        })}
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: 'black',
          showLabel: false,
          style: {
            backgroundColor: '#ffc125',
            height:60,
          },
        
      }}>


        <Tab.Screen name="Home" component={HomeScreen} />  
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />     
        <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      </NavigationContainer>    
      </>
    
    
  );
};




export default App; 