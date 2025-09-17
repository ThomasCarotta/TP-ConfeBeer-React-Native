import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#8B4513',
  },
  card: {
  width: '48%',          
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 12,
  marginVertical: 8,
  flexDirection: 'column',
},
  cardImage: {
  width: '100%',
  height: 120,
  borderRadius: 8,
  marginBottom: 8,
},
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#2c3e50',
  },
  description: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  speaker: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#8B4513',
    marginBottom: 6,
  },
  time: {
    fontSize: 12,
    color: '#95a5a6',
  },
  button: {
    backgroundColor: '#e67e22',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  detailContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  detailImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#8B4513',
    textAlign: 'center',
  },
  detailDescription: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
    color: '#2c3e50',
    textAlign: 'justify',
  },
  detailInfo: {
    marginBottom: 10,
  },
  detailLabel: {
    fontWeight: 'bold',
    color: '#8B4513',
  },
  detailText: {
    fontSize: 16,
    color: '#2c3e50',
    marginBottom: 8,
  },
  mapButton: {
    backgroundColor: '#8B4513',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  map: {
    flex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 8,
    zIndex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  backButtonText: {
    color: '#e67e22',
    fontWeight: 'bold',
  },
});