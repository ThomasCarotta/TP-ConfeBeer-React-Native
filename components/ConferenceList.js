// ConferenceList.js (modificado para grilla 2 columnas)
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
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between', paddingHorizontal: 16 }}
      />
    </View>
  );
};

export default ConferenceList;
