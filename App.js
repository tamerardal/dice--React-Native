import React, {useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

const App = () => {
    const [uri1, setUri1] = useState(Dice1);
    const [uri2, setUri2] = useState(Dice1);

    const buttonTapped = () => {
        let randomNumber1 = Math.floor(Math.random() * 6) + 1;
        let randomNumber2 = Math.floor(Math.random() * 6) + 1;

        if (randomNumber1 == 1) {
            setUri1(Dice1);
        } else if(randomNumber1 == 2) {
            setUri1(Dice2);
        } else if(randomNumber1 == 3) {
            setUri1(Dice3);
        } else if(randomNumber1 == 4) {
            setUri1(Dice4);
        } else if(randomNumber1 == 5) {
            setUri1(Dice5);
        } else if(randomNumber1 == 6) {
            setUri1(Dice6);
        } else {
            setUri1(Dice1);
        }

        if (randomNumber2 == 1) {
          setUri2(Dice1);
      } else if(randomNumber2 == 2) {
          setUri2(Dice2);
      } else if(randomNumber2 == 3) {
          setUri2(Dice3);
      } else if(randomNumber2 == 4) {
          setUri2(Dice4);
      } else if(randomNumber2 == 5) {
          setUri2(Dice5);
      } else if(randomNumber2 == 6) {
          setUri2(Dice6);
      } else {
          setUri2(Dice1);
      }
    }

    return(
        <View style= {styles.container}>
            <TouchableOpacity onPress={() => buttonTapped()}>
                <View style={styles.container2}>
                  <Image style={styles.image} source={uri1} />
                  <Image style={styles.image} source={uri2} />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 150,
        height: 150,
        margin: 10,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'purple',
      padding: 10,
    },
    container2: {
      flexDirection: 'row',
    }
});

export default App;