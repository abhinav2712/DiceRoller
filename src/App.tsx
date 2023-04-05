
import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
import {
  ImageSourcePropType,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Pressable,
  Linking
 
} from 'react-native';

import Dice1 from '../assets/1st.png'
import Dice2 from '../assets/2nd.png'
import Dice3 from '../assets/3rd.png'
import Dice4 from '../assets/4th.png'
import Dice5 from '../assets/5th.png'
import Dice6 from '../assets/6th.png'


type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>

const Dice= ({imageUrl}: DiceProps):JSX.Element =>{
  
  return (
    <View>
      <Image style={styles.diceImage} source={imageUrl}/>
    </View>
  )

}


function App(): JSX.Element {
  const [diceImage,setDiceImage]=useState<ImageSourcePropType>
  (Dice1)

  const rollDiceOnTap=()=>{
    let randomDiceNumber=Math.floor(Math.random()*6)+1
    switch(randomDiceNumber){
      case 1:
        setDiceImage(Dice1)
        return
      case 2:
        setDiceImage(Dice2)
        return
      case 3:
        setDiceImage(Dice3)
        return
      case 4:
        setDiceImage(Dice4)
        return
      case 5:
        setDiceImage(Dice5)
        return
      case 6:
        setDiceImage(Dice6)
        return
    }
    ReactNativeHapticFeedback.trigger("impactLight", options);
  }

  return (


    <View style={styles.container}>
    

      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#8EA7E9'}}>
        Dice Roller
      </Text>
      
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
        
      </Pressable>

    <View>
      <Text style={{fontSize: 15, color: '#8EA7E9',marginTop:15,textAlign:'center',padding:10}}>
      Roll the dice with ease using our dice roller app! 
        Whether you're playing a board game with friends or need to make a random decision,
         our app has got you covered!!
      </Text>
    </View>
    

      <View style={styles.footerText}>
      <Text style={{textAlign: 'center'}}>
  Made by{' '}
  <Text
    onPress={() => {
      Linking.openURL('https://github.com/abhinav2712');
    }}
    style={{ textDecorationLine: 'underline',color:'#1E90FF' }}>
    Abhinav Kumar  
  </Text>{'   '}
     Follow for more projects ⭐
</Text>
      </View>


      




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  footerText: {
    position: 'absolute',
    
    bottom: 0,
    width: '100%',
    padding: 10,
    backgroundColor: '#8EA7E9',
    textAlign: 'center',

  }
});

export default App;
