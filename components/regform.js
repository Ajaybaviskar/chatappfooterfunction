import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native';

export default function Regform() {
 
  return (
    <View style={styles.regform}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
          <Text style={styles.header}>Registration</Text>

          <TextInput style={styles.textinput} placeholder="User Id"
              underlineColorAndroid={'transparent'} />
          
          <TextInput style={styles.textinput} placeholder="Your Email Id"
            secureTextEntry={true} underlineColorAndroid={'transparent'} />
          
          <TextInput style={styles.textinput} placeholder="Phone Number"
              underlineColorAndroid={'transparent'} />
          
          <TextInput style={styles.textinput} placeholder="Password"
              underlineColorAndroid={'transparent'} />
          
          <TouchableOpacity style={styles.button}>
              <Text style={styles.btntext}>Sign Up</Text>

          </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
    regform: {
        alignSelf:'stretch',
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    },
    header: {
        fontSize: 30,
        color: '#fff',
        paddingBottom: 40,
        marginBottom: 40,
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    textinput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: "#fff",
        borderBottomWidth: 1
    },
    button: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 20
    },
    btntext: {
        color: '#fff',
        fontWeight:'bold'
    }

    
});
