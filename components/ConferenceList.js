import React from 'react';
import { FlatList, View, Text } from 'react-native';
import ConferenceCard from './ConferenceCard';
import { styles } from '../styles/styles';

const ConferenceList = ({ conferences, onConferencePress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Conferencias ConfBeer 2025</Text>
      <FlatList
        data={conferences}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ConferenceCard conference={item} onPress={onConferencePress} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ConferenceList;