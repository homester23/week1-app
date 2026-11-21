import * as Location from 'expo-location'; 
import { useState } from 'react'; 
import { Pressable, StyleSheet, Text, View } from 'react-native'; 
 

export default function WhereAmI() { 

  const [message, setMessage] = useState('Tap the button to find your location.'); 

  const findMe = async () => { 

    try { 

      const { status } = await Location.requestForegroundPermissionsAsync(); 

      if (status !== 'granted') { 

        setMessage('Location is off. You can still search by typing a city.'); 

        return; 

      } 

      const position = await Location.getCurrentPositionAsync({ 

        accuracy: Location.Accuracy.Balanced, 

      }); 

      const { latitude, longitude } = position.coords; 

      setMessage(`Near ${latitude.toFixed(2)}, ${longitude.toFixed(2)}`); 

    } catch { 

      setMessage('We could not get your location. Check that location is on.'); 

    } 

  }; 

  return ( 

    <View style={styles.box}> 

      <Pressable accessibilityRole="button" style={styles.button} onPress={findMe}> 

        <Text style={styles.label}>Find my location</Text> 

      </Pressable> 

      <Text>{message}</Text> 

      <Text>YOUR NAME, YYYY-MM-DD</Text> 

    </View> 

  ); 

} 
  

const styles = StyleSheet.create({ 

  box: { padding: 16, gap: 12 }, 

  button: { backgroundColor: '#1A73E8', padding: 14, borderRadius: 8, minHeight: 48 }, 

  label: { color: '#FFFFFF' }, 

});