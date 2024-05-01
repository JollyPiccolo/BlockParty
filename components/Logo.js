/**
 * Adeline Roberts
 * CS-450
 * Logo Display Function
 */

import { StyleSheet} from 'react-native';
import { Image } from 'expo-image';
import {View } from '@/components/Themed';

//calls the app's logo from the asset's folder
const Img = require('../assets/images/BlockParty_Logo.png');

//creates, scales and aligns the logo visually, allowing for easier implementation in the app's pages
export default function Logo(){
    return(
    <View style={styles.logocontainer}>
        <Image 
          source={Img}
          style={styles.logocontainer}
        />
    </View>
    )
}

//style sheet for the logo
const styles = StyleSheet.create({

    logocontainer: {
        alignItems: 'center',
        width: 180,
        height: 160,
        backgroundColor: '#e8f4f8',
       },


})