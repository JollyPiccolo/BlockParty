/**
 * Adeline Roberts
 * CS-450
 * Original Date and Time Picker function's UI (Imported from React Native)
 */

import DateTimePicker from '@react-native-community/datetimepicker';
import { Text } from '@/components/Themed'; 
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

//exports the function for use in other pages
export default function DateAndTime(expDate, expTime) {
    //variable instantiation
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    /**
     * onChange
     * triggers when the date or time is changed, setting the new value to the function's date variable and 
     * exporting it through expDate or expTime
     * @param {*} event 
     * @param {*} selectedDate 
     */
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setShow(false);
      setDate(currentDate);
      if (mode == 'date'){
        expDate = date.toLocaleDateString();
      }
      if (mode == 'time'){
        expTime = date.toLocaleTimeString();
      }
    };
  
    /**
     * showMode
     * changes the active selection box - date vs time
     * @param {*} currentMode 
     */
    const showMode = (currentMode) => {
      setShow(true);
      setMode(currentMode);
    };
  
    //shows the "date" selection box - calendar tool
    const showDatepicker = () => {
      showMode('date');
    };
    
    //shows the "time" selection box - spinner box
    const showTimepicker = () => {
      showMode('time');
    };
  
    //returns the visual components needed for the date/time picker's UI
    return (
      <SafeAreaView>
        <View style={styles.selectorcontainer}>
        <Pressable style={styles.buttoncontainer} onPress={showDatepicker}>
            <Text style={styles.title}>Select Date</Text>
            <Text style={styles.subtitle}>selected: {date.toLocaleDateString()}</Text>
        </Pressable>
        <Pressable style={styles.buttoncontainer} onPress={showTimepicker}>
            <Text style={styles.title}>Select Time</Text>
            <Text style={styles.subtitle}>selected: {date.toLocaleTimeString()}</Text>
        </Pressable>
        </View>
        <View style={styles.input}>
        {show && (
          <DateTimePicker
            style="spinner"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
        </View>
      </SafeAreaView>
    );
  };


  //Style Sheets for the function's UI
  const styles = StyleSheet.create({
    
    selectorcontainer: {
        flexDirection: 'row',
    },
    
    buttoncontainer: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        width: 195,
        height: 100,
        backgroundColor: '#add8e6',
        borderRadius: 30,
    }, 

    title: {
        fontSize: 25, 
        color: 'white',
        fontWeight: 'bold',
        margin: 10,
    },

    subtitle: {
      fontSize: 15, 
      color: 'white',
  },

    input: {
        alignItems: 'center',
        justifyContent: 'center',
    },

});