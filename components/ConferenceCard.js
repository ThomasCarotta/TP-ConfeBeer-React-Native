import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from '../styles/styles';

const ConferenceCard = ({ conference, onPress }) => {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: conference.image }} 
        style={styles.cardImage}
        resizeMode="cover"
      />
      <View style={styles.cardContent}>
        <Text style={styles.title} numberOfLines={1}>{conference.title}</Text>
        <Text style={styles.description} numberOfLines={2}>
          {conference.shortDescription}
        </Text>
        <Text style={styles.speaker}>Por: {conference.speaker}</Text>
        <Text style={styles.time}>
          {conference.startTime} - {conference.endTime}
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => onPress(conference)}>
          <Text style={styles.buttonText}>Leer más</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConferenceCard;