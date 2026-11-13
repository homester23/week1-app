// Student ID: [your ID]   Date: [today's date] 

import { useState } from "react"; 

import { Pressable, StyleSheet, Text, View } from "react-native"; 

 

export default function HomeScreen() { 

  const [message, setMessage] = useState(""); 

 

  return ( 

    <View style={styles.container}> 

      <Text style={styles.title}>Maple Street Tool Library</Text> 

      <Text style={styles.subtitle}>Borrow tools from your neighbors</Text> 

 

      <Pressable 

        style={styles.button} 

        accessibilityRole="button" 

        onPress={() => setMessage("Your request was sent.")} 

      > 

        <Text style={styles.buttonText}>Submit</Text> 

      </Pressable> 

 

      <Text style={styles.message}>{message}</Text> 

    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  container: { 

    flex: 1, 

    alignItems: "center", 

    justifyContent: "center", 

    padding: 24, 

    backgroundColor: "#FFFFFF", 

  }, 

  title: { 

    fontSize: 24, 

    fontWeight: "bold", 

    color: "#1F1F1F", 

    textAlign: "center", 

  }, 

  subtitle: { 

    fontSize: 16, 

    color: "#1F1F1F", 

    marginTop: 8, 

    marginBottom: 24, 

    textAlign: "center", 

  }, 

  button: { 

    backgroundColor: "#2F5496", 

    paddingVertical: 12, 

    paddingHorizontal: 24, 

    borderRadius: 8, 

  }, 

  buttonText: { 

    fontSize: 16, 

    color: "#FFFFFF", 

    fontWeight: "bold", 

  }, 

  message: { 

    fontSize: 16, 

    color: "#1F1F1F", 

    marginTop: 16, 

    textAlign: "center", 

  }, 

}); 