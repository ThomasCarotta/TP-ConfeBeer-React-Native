import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from '../styles/styles';

const MapScreen = ({ location, onBack }) => {
  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title={location.name}
          description={location.address}
        />
      </MapView>
      
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MapScreen;