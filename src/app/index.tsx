// Student ID: <1234567>, Date: mm/dd/yyyy

import { View, Text, Button } from "react-native";
import DeviceFacts from '../../components/DeviceFacts';


export default function Index() {
  return (
    <View style={{
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center",}}
    >
     <Button
        title="Tasty Menu"
        onPress={() => alert("Menu coming soon")}
      />
       <DeviceFacts />
      <Text style={{ fontSize: 28, fontWeight: "bold"}}>
        Your App name
      </Text>
      <Text>This app will change the world.</Text>
    </View>
  
  );
}
