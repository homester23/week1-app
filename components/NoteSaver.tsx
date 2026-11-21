import AsyncStorage from '@react-native-async-storage/async-storage'; 
import { useEffect, useState } from 'react'; 
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'; 

const KEY = 'asyncstorage:note'; 
 

export default function NoteSaver() { 

  const [note, setNote] = useState(''); 

  const [status, setStatus] = useState('Nothing saved yet'); 

  

  useEffect(() => { 

    AsyncStorage.getItem(KEY).then((saved) => { 

      if (saved !== null) { 

        setNote(saved); 

        setStatus('Loaded saved note'); 

      } 

    }); 

  }, []); 

  

  const save = async () => { 

    await AsyncStorage.setItem(KEY, note); 

    setStatus('Saved at ' + new Date().toLocaleTimeString()); 

  }; 

  

  return ( 

    <View style={styles.wrap}> 

      <TextInput 

        style={styles.input} 

        value={note} 

        onChangeText={setNote} 

        placeholder="Type a note" 

      /> 

      <Pressable accessibilityRole="button" style={styles.button} onPress={save}> 

        <Text style={styles.label}>Save note</Text> 

      </Pressable> 

      <Text>{status}</Text> 

    </View> 

  ); 

} 

  

const styles = StyleSheet.create({ 

  wrap: { padding: 16, gap: 12 }, 

  input: { borderWidth: 1, borderColor: '#767676', borderRadius: 8, padding: 12 }, 

  button: { backgroundColor: '#1A73E8', padding: 14, borderRadius: 8 }, 

  label: { color: '#FFFFFF' }, 

});