import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Image, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';

const mainImage = require('./assets/ukulele.png');

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const [sound, setSound] = React.useState();

  state = {
    isPlaying: false,
  }

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('./music/ukulele.mp3')
    );
    setSound(sound);
    await sound.playAsync();
    
  }

  function handlePlayPause() {
    if (this.state.isPlaying == false){
      playSound();
      this.state.isPlaying = true
    }
    else{
    React.useEffect(() => {
      return this.state.isPlaying = false, sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
    }, [sound]);
    
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aloha Music</Text>
      <Image source={mainImage} style={styles.image} />
      <TouchableOpacity onPress={handlePlayPause()}>
        {this.state.isPlaying ?
          <Feather name="pause" size={32} color="#563822"/> :
          <Feather name="play" size={32} color="#563822"/>
        }
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4e3cf',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 30,
    width: 300,
    textAlign: 'center',
    backgroundColor: '#da9547',
    fontWeight: 'bold',
  },

  image: {
    height: 500,
    width: 300,
    marginTop: 30,
    marginBottom: 30
  }
});
