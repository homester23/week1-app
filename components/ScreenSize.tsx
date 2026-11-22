import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'; 
import { useEffect, useState } from 'react';
  

export default function ScreenSize() { 

  const { width, height, fontScale } = useWindowDimensions(); 

  const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
     const orientation = width > height ? 'landscape' : 'portrait'; 
 
    return ( 

    <View style={styles.box}> 

      <Text>Width: {Math.round(width)} dp</Text> 

      <Text>Height: {Math.round(height)} dp</Text> 

      <Text>Orientation: {orientation}</Text> 

      <Text>Font scale: {fontScale}</Text> 

      <Text>YOUR NAME, YYYY-MM-DD</Text> 

    </View> 

  ); 

} 

const styles = StyleSheet.create({ 

  box: { padding: 16, gap: 8 }, 

});