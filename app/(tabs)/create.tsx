/**
 * Adeline Roberts
 * CS-450
 * Event Creation Page for BlockParty
 */
import { StyleSheet, ScrollView, Pressable,} from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import Input from '@/components/Input';
import Logo from '@/components/Logo';
import { Timestamp } from 'firebase/firestore';
import { pushDoc } from '@/components/FSFunctions';

/**
 * Page Function - code used to run the page
 * @returns page information
 */
export default function Page() {
  /**
   * Variable Instantiation - creates constructs for holding submitted data 
   */
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [loc, setLoc] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [host, setHost] = useState("");

  /**
   * newEvent
   * loads the data from each variable into an event
   */
  const newEvent ={
    title: name,
    desc: desc,
    date: date,
    time: time,
    location: loc,
    host: host,
    createdAt: Timestamp.now()
  }
  
  /**
   * createEvent
   * loads the data from newEvent into a new event, and clears the entries from the creation page
   */
  const createEvent = (async () => {
    console.log(time);
    await pushDoc(newEvent);
    setName('');
    setDesc('');
    setDate('');
    setTime('');
    setLoc('');
    setHost('');
  })

  /**
   * @returns visual components relating to the page
   */
  return (
    <ScrollView automaticallyAdjustKeyboardInsets={true}>
      <View style={styles.maincontainer}>
      <Logo/>
      <View style={styles.titlecontainer}>
         <Text style={styles.title}>Create an Event</Text> 
         <Text style={styles.subtitle}>WARNING: Input Data is NOT saved in-between event creation</Text>
      </View>
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Input name={'Title'} dataLink={setName}/>

      <Input name={'Host Name'} dataLink={setHost}/>
      
      <Input name= {'Description'} dataLink={setDesc}/>
      
      <Input name= {'Location/Email'} dataLink={setLoc}/>

      <Input name= {'Date'} dataLink={setDate}/>

      <Input name= {'Time'} dataLink={setTime}/>

      </View>

      <Pressable onPress={() => createEvent()}>
        <View style={styles.titlecontainer}>
        <Text style={styles.title}>Create New Event</Text>
        </View>
      </Pressable>

    </ScrollView>
   
  );
}

//Style Sheets for the page's UI
const styles = StyleSheet.create({
   maincontainer: {
    alignItems: 'center',
    paddingTop: 50,
    backgroundColor: '#e8f4f8',
   },
  titlecontainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    margin: 20,
    paddingTop: 5,
    width: 400,
    height: 80,
    backgroundColor: '#add8e6',
    borderRadius: 30,
   },
  row: {
        flexDirection: 'row',
      },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 10,
    color: 'grey',
},
  subheading: {
  fontSize: 20, 
  color: 'white',
  fontWeight: 'bold',
  margin: 10,
},
  separator: {
    height: 1,
    width: '40%',
    color: 'black',
  },
});
