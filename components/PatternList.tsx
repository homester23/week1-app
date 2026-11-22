import { useState } from 'react'; 
import { FlatList, StyleSheet, Text, View } from 'react-native'; 

const START = ['Library hours', 'Bus schedule', 'Dining menu']; 

export default function PatternList() { 

  const [items, setItems] = useState<string[]>(START); 

  const [refreshing, setRefreshing] = useState(false); 

  

  const onRefresh = () => { 

    setRefreshing(true); 

    setTimeout(() => { 

      setItems((prev) => (prev.length > 0 ? [] : START)); 

      setRefreshing(false); 

    }, 800); 

  }; 

  

  return ( 

    <View style={styles.box}> 

      <Text style={styles.title}>YOUR NAME, YYYY-MM-DD</Text> 

      <FlatList 

        data={items} 

        keyExtractor={(item) => item} 

        refreshing={refreshing} 

        onRefresh={onRefresh} 

        ListEmptyComponent={<Text>Nothing here yet. Pull down to refresh.</Text>} 

        renderItem={({ item }) => <Text style={styles.row}>{item}</Text>} 

      /> 

    </View> 

  ); 

} 

  

const styles = StyleSheet.create({ 

  box: { flex: 1, padding: 16 }, 

  title: { fontSize: 16, marginBottom: 12 }, 

  row: { fontSize: 18, paddingVertical: 12 }, 

});