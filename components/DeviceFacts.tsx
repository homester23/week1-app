import { useEffect, useState } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import * as Device from 'expo-device';

type DeviceFact = [string, string | number | null | undefined];

export default function DeviceFacts() {
  const [facts, setFacts] = useState<DeviceFact[] | null>(null);

  useEffect(() => {
    setFacts([
      ['Manufacturer', Device.manufacturer],
      ['Model', Device.modelName],
      ['OS name', Device.osName],
      ['OS version', Device.osVersion],
      ['Android API level', Device.platformApiLevel],
      ['Total memory (bytes)', Device.totalMemory],
      ['CPU architectures', Device.supportedCpuArchitectures?.join(', ')],
      ['Device type', Device.deviceType],
      ['Running on', Platform.OS],
      ['Student and date', 'YOUR NAME, YYYY-MM-DD'],
    ]);
  }, []);

  return (
    <View style={styles.box}>
      {facts === null ? (
        <Text style={styles.row}>Loading device information...</Text>
      ) : (
        facts.map(([label, value]) => (
          <Text key={label} style={styles.row}>
            {label}: {value ?? 'not available'}
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  box: { padding: 16, gap: 8 },
  row: { fontSize: 16 },
});