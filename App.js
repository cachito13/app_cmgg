import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style= {styles.safearea}>
      <View style= {styles.container}>
        <Text style={styles.heading }>CUSTOM MOTOS GARAGE </Text>
      </View>

    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  safearea:{
    paddingHorizontal:10,
    paddingVertical:50,

  },
  container: {
    marginTop: 10,
    padding: 10,
    alignItems: 'center',
  
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    padding:5,
    borderRadius:5,
    backgroundColor: "#2aa198",
    
    
  },
  text: {
    fontWeight: 'bold',
    color: 'red',
  },
})