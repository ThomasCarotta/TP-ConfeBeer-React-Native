import React, { useState } from 'react';
import { View } from 'react-native';
import ConferenceList from './components/ConferenceList';
import ConferenceDetail from './components/ConferenceDetail';
import MapScreen from './components/MapScreen';
import { conferencesData } from './data/conferencesData';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('list');
  const [selectedConference, setSelectedConference] = useState(null);

  const handleConferencePress = (conference) => {
    setSelectedConference(conference);
    setCurrentScreen('detail');
  };

  const handleBack = () => {
    setCurrentScreen('list');
    setSelectedConference(null);
  };

  const handleShowMap = (conference) => {
    setSelectedConference(conference);
    setCurrentScreen('map');
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'list':
        return (
          <ConferenceList 
            conferences={conferencesData} 
            onConferencePress={handleConferencePress} 
          />
        );
      case 'detail':
        return (
          <ConferenceDetail 
            conference={selectedConference} 
            onBack={handleBack}
            onShowMap={handleShowMap}
          />
        );
      case 'map':
        return (
          <MapScreen 
            location={selectedConference.location} 
            onBack={() => setCurrentScreen('detail')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {renderScreen()}
    </View>
  );
}