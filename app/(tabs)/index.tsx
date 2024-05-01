/**
 * Adeline Roberts
 * CS-450
 * Index/Home Page for BlockParty
 */
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '@/components/Themed';
import Logo from '@/components/Logo';
import showData from '@/components/FSFunctions';


//Constructs the page, and it's visual objects
export default function Page() {
  return (
    <View style = {styles.maincontainer}>
      <ScrollView style={styles.scrollcontainer}>
        <View style = {styles.maincontainer}>
          <Logo/>
        </View>
       <View style={styles.titlecontainer}>
          <Text style={styles.title}>Home</Text>
        </View>

        <View>
          {showData()}
        </View>
      
      </ScrollView>
    </View>
  );
}

//style sheets necessary for the page's UI
const styles = StyleSheet.create({
  maincontainer: { 
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#e8f4f8',
  },
  scrollcontainer: {
    alignContent: 'center',
    paddingTop: 5,
    backgroundColor: '#e8f4f8',
  },
  eventfix: {
    alignContent: 'flex-start'
  },
  titlecontainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 400,
    height: 80,
    borderRadius: 30,
    backgroundColor: '#add8e6',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: "white"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  
});
