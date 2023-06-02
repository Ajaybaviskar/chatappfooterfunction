import React ,{useState} from 'react';
import { View, Text,StyleSheet,TextInput,label ,TouchableOpacity,Button,Image } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import * as ImagePicker from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';
import Regform from '../../components/regform';
import { Axios } from 'axios';

const PostAdd = () => {
    const [image, setImage] = useState(null); 
    const [title, msg,data] = useState('')
    
    // Get Data func
    const getData = async () => {
        const response = await Axios.get("http://localhost:5000/getData");
        setData(response.data);
    }
    useEffect(() => {
        getData()
    })

    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to upload an image.');
          return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync();
        if (!result.cancelled) {
          setImage(result.uri);
        }
    };

    const btn = async () => {        
        alert('Post Created Sucessfully ');       
    }

    

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        {image ? (
          <Image style={styles.image} source={{ uri: image }} />
        ) : (
          <Image style={styles.image} source={require('../../assets/add-user.png')} />
        )}
      </TouchableOpacity>
          
     <label  style={styles.label}>Title</label>
          <TextInput style={styles.input} placeholder="Enter a title" />
          
     <label style={styles.label}>Description</label>     
          <TextInput style={styles.input} placeholder="Enter a description" multiline={true} />
          
      {/* <Button   style={styles.btn}  title="Create Post" onPress={() => {btn}}  /> */}
          <Button style={styles.btn} title="Create Post" onPress={ btn } />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#F2FAF8',
        borderRadius:20,
    },
    label: {
        color: '',
        fontSize: 20,
        // paddinLeft: 10,
        paddingStart:10,
        marginBottom: 20,
    
    },
    btn: {
        borderRadius:20,


    }
  });


    // this is my code 
    // return (
    //     <View style={{
    //         //    height: '100%',
    //         // backgroundColor: '#33E6Fa',
    //         // justifyContent: 'center',
    //         // alignItems:'center'
    //     }}>
    //         {/* <Text style={{fontSize:40,fontWeight:'bold',letterSpacing:4}}>PostScreen</Text> */}
    //         <Text>Add Post Section Here </Text>
    //     </View>
    // ) end my code here 
// }
export default PostAdd;