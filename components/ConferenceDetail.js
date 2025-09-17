import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';

const ConferenceDetail = ({ conference, onBack, onShowMap }) => {
  return (
    <ScrollView style={styles.detailContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backButtonText}>← Volver</Text>
      </TouchableOpacity>
      
      <Image 
        source={{ uri: conference.image }} 
        style={styles.detailImage}
        resizeMode="cover"
      />
      
      <Text style={styles.detailTitle}>{conference.title}</Text>
      <Text style={styles.detailDescription}>{conference.fullDescription}</Text>
      
      <View style={styles.detailInfo}>
        <Text style={styles.detailLabel}>Disertante: </Text>
        <Text style={styles.detailText}>{conference.speaker}</Text>
      </View>
      
      <View style={styles.detailInfo}>
        <Text style={styles.detailLabel}>Horario: </Text>
        <Text style={styles.detailText}>{conference.startTime} - {conference.endTime}</Text>
      </View>
      
      <View style={styles.detailInfo}>
        <Text style={styles.detailLabel}>Lugar: </Text>
        <Text style={styles.detailText}>{conference.location.name}</Text>
        <Text style={styles.detailText}>{conference.location.address}</Text>
      </View>
      
      <TouchableOpacity style={styles.mapButton} onPress={() => onShowMap(conference)}>
        <Text style={styles.buttonText}>Ver ubicación en el mapa</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ConferenceDetail;