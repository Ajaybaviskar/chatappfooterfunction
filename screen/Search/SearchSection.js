

import React,{useState} from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";



const SearchBar = ({ clicked, searchPhrase }) => {

    const [search, setSearch] = useState('')
        

    
    

  return (
    <View style={styles.container}>
      <View
        style={
          clicked
        }
      >
        {/* <TouchableOpacity>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{
              marginLeft: 300,
              marginTop:10
          }}
        />
              </TouchableOpacity> */}
              
              
        <TextInput
          style={styles.input}
          placeholder="Search"
        //   value={searchPhrase}
        //   onChangeText={setSearchPhrase}
        //   onFocus={() => {
        //     setClicked(true);
        //   }}
              />
              
              <TouchableOpacity>
        <Feather
          name="search"
          size={20}
          color="black"
          style={{
              marginLeft: 300,
              marginTop:10
          }}
        />
              </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchBar;

// styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        
    },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "80%",
        backgroundColor: '#A0F2DA',
        paddingLeft: 10,
        padding:5,
    borderRadius:10,
        
    
    
  },
});

