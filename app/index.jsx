import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ( useState ) from "react";

export default function Index() {
  const valorInicialText = "23:00";
  const [timeLeft, setTimeLeft] = useState(valorInicialText);

  function atualiza(){
    setTimeLeft("20:00");
  }
  return (
    <View style={styles.container}>

      <View>
        <Image
          source={require('../assets/images/relogio.jpeg')}
          style={styles.image}
        />
      </View>

      <View style={styles.actions}>
        <Text style={styles.timer}>{valorInicialText}</Text>
        <Pressable style={styles.buttonStart} onPress = {atualiza}>
          <Text style={styles.textButton}>Começar</Text>
        </Pressable>
      </View>

      <View style={styles.footer}>
        <Text style={styles.textFooter}>Curso de React Native EAD</Text>
        <Text style={styles.textFooter}>2025 Meu App</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#021123',
    gap: 40,
  },

  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  actions: {
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    alignItems: 'center',
    gap: 32,
  },

  timer: {
    fontSize: 54,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  buttonStart: {
    padding: 24,
    backgroundColor: '#021123',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  },

  buttonStop: {
    padding: 24,
    backgroundColor: '#990000',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
  },

  textButton: {
    fontSize: 25,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});
