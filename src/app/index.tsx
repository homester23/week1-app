// Student ID: <1234567>, Date: mm/dd/yyyy

import { View, Text, Button } from "react-native";
import DeviceFacts from '../../components/DeviceFacts';
import CustomButtons from '../../components/CustomButtons'
import WhereAmI from '../../components/WhereAmI';
import NoteSaver from '../../components/NoteSaver';
import { Link } from 'expo-router'; 
import ScreenSize from '../../components/ScreenSize'

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
      <CustomButtons />
      <NoteSaver />
      <WhereAmI />
      <ScreenSize />
      <Link href="../patterns">Open the pattern demo</Link>
      
    </View>
  
  );
}
