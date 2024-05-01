/**
 * Adeline Roberts
 * CS 450
 * Input function and UI
 */
import { Text, StyleSheet, TextInput } from "react-native";
import { View } from "react-native";


//Visual information for the input bar's structure
export default function Input({ name, dataLink }){

    return (
        <View>
           <View style={styles.valuecontainer}>
                    <Text style={styles.valuetext}>{name}</Text>
                    <Text style={styles.minitext}>Max Length: 100 characters</Text>
                    <View style={styles.inputcontainer}>
                        <TextInput 
                        style={styles.inputcontainer}
                        maxLength={100}
                        multiline={true}
                        placeholder="Input Data Here"
                        onChangeText={(newText) => dataLink(newText)}
                        />
                    </View>
                    
            </View>
        </View> 

      );
}

//Style sheet for the function's UI
const styles = StyleSheet.create({

    valuetext: {
        fontSize: 30, 
        color: 'white',
        fontWeight: 'bold',
        margin: 5,
    },
    inputtext: {
        fontSize: 20,
        color: 'grey',
    },
    minitext: {
        fontSize: 10,
        color: 'grey',
        
    },
    valuecontainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: 10,
        width: 400,
        height: 120, 
        backgroundColor: '#add8e6',
        borderRadius: 30,
       },
    inputcontainer: {
        alignItems: 'center',
        textAlignVertical: 'top',
        width: 350,
        height: 50,
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal: 10,
        fontSize: 20,
        color: 'grey',
    }, 
    space: {
        height: 60,
        width: 300,
        borderRadius: 10,
        backgroundColor: '#aaaaaa',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

