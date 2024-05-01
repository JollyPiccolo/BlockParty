/**
 * Adeline Roberts
 * CS-450
 * Fundamental Firestore Functions for BlockParty
 */
import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, View } from '@/components/Themed';
import {db} from '@/firebaseConfig';
import { addDoc, collection, getDocs, onSnapshot, query, orderBy} from "firebase/firestore";
import { useEffect, useState } from 'react';

/**
 * Creates a reference to the events database to store and call event data
*/
const eventsRef = collection(db, 'events')


 /**
  * pushDoc
  * adds a new document to the events database, using the inputted information
  */ 
 export const pushDoc = async(newData: any) =>{
  console.log('New Event Added'); 
    const res = await addDoc(eventsRef, newData)
    console.log('Added document with ID: ', res.id);
}

  /**
   * pullData
   * retreives every event entry from the events database, and prints it within the host's terminal
   */
  export const pullData = (async () => {
    console.log('Triggered');
    const getData = await getDocs(eventsRef);
    getData.forEach(doc => { 
      console.log(doc.id, '=>', doc.data());
    })
      console.log("  ")
    });
    


  
   /**
    * showData
   * returns an array of stylized "Event" objects, listing every event in the app
   */
  export default function showData(){
  
  //creates an empty array of events 
  const [events, setEvents] = useState<any[]>([]);

  //retreives data from the database, and adds it to the array of events above
  useEffect(() => {
    //creates a version of the event reference, which is ordered by event creation date
    const orderedData = query(
      eventsRef, 
      orderBy('createdAt', 'desc')
    )
    //constructs a "snapshot" of the current state of the events database, and pushes each document into 
    //the list array
    const subscriber = onSnapshot(orderedData, {
      next: (snapshot) =>{
        const list: any[] = [];
        snapshot.docs.forEach(doc => {
          list.push({
            ... doc.data(),

          })
        });
        //exports the list array into the events array
        setEvents(list);
      },
    });
    //resets the state of the snapshot, clearing it for it's next update
    return () => subscriber();
   },
   [])
    
   //returns the visual list of events found on the homescreen, via the event array
    return (

      <SafeAreaView style={styles.maincontainer}>
        {events.map((event) => (
          <View style = {styles.eventcontainer}>
            <Text key={event.id} style = {styles.title}>{event.title}</Text>
            <Text key={event.host} style = {styles.subheading}>{event.host}</Text>
            <Text key={event.desc} style = {styles.description}>{event.desc}</Text>
            <Text key={event.dt} style = {styles.description}>{event.date}</Text>
            <Text key={event.tm} style = {styles.description}>{event.time}</Text>
            <Text key={event.loc} style = {styles.subheading}>{event.location}</Text>

          </View>
        ))}
      <View style = {styles.separator}></View>
    </SafeAreaView>
    );
    }
    
    //Style Sheets for the function's UI
    const styles = StyleSheet.create({
        maincontainer: {
          flex: 1, 
          alignItems: "center",
          paddingTop: 20,
          backgroundColor: '#e8f4f8',
          paddingBottom: 100,
        },
        eventcontainer: {
          alignItems: 'center',
          justifyContent: 'center',
          margin: 5,
          padding: 5,
          width: 405,
          height: 200,
          borderRadius: 5,
          backgroundColor: '#add8e6',
        },
        title: {
          textAlign: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          color: "white",
        },
        description: {
          textAlign: 'center',
          margin: 3,
          fontSize: 15,
          color: "white",
        },
        subheading: {
          textAlign: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: "white",
        },
        separator: {
          marginVertical: 30,
          height: 1,
          width: '80%',
        },
    });
    
