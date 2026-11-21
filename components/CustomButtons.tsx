import { Pressable, StyleSheet, Text, View } from 'react-native'; 

import { brand } from '../constants/brand'; 

  

export default function CustomButtons() { 

  return ( 

    <View style={styles.wrap}> 

      <Text style={[styles.heading, { color: brand.primary }]}> 

        YOUR NAME, YYYY-MM-DD 

      </Text> 

  

      {/* Approach A: inline styles */} 

      <Pressable accessibilityRole="button" 

        style={{ 

          backgroundColor: '#1A73E8', padding: 14, borderRadius: 8, 

        }}> 

        <Text style={{ color: '#FFFFFF' }}>A: Inline style (1)</Text> 

      </Pressable> 

      <Pressable accessibilityRole="button" 

        style={{ 

          backgroundColor: '#1A73E8', padding: 14, borderRadius: 8, 

        }}> 

        <Text style={{ color: '#FFFFFF' }}>A: Inline style (2)</Text> 

      </Pressable> 

  

      {/* Approach B: StyleSheet */} 

      <Pressable accessibilityRole="button" style={styles.sheetButton}> 

        <Text style={styles.label}>B: StyleSheet (1)</Text> 

      </Pressable> 

      <Pressable accessibilityRole="button" style={styles.sheetButton}> 

        <Text style={styles.label}>B: StyleSheet (2)</Text> 

      </Pressable> 

  

      {/* Approach C: shared brand object */} 

      <Pressable accessibilityRole="button" 

        style={[styles.base, { backgroundColor: brand.primary }]}> 

        <Text style={{ color: brand.onPrimary }}>C: Shared brand (1)</Text> 

      </Pressable> 

      <Pressable accessibilityRole="button" 

        style={[styles.base, { backgroundColor: brand.primary }]}> 

        <Text style={{ color: brand.onPrimary }}>C: Shared brand (2)</Text> 

      </Pressable> 

    </View> 

  ); 

} 

const styles = StyleSheet.create({ 

  wrap: { padding: 16, gap: 12 }, 

  heading: { fontSize: 18, fontWeight: '600' }, 

  sheetButton: { backgroundColor: '#1A73E8', padding: 14, borderRadius: 8 }, 

  label: { color: '#FFFFFF' }, 

  base: { padding: 14, borderRadius: 8 }, 

});