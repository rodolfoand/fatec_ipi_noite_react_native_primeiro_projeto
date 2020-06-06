import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [numeros, setNumeros] = useState(['', '', '', '', '', '']);
  const historico = [];

  const geraNumeros = () => {
    setNumeros( numeros.map(indice => geraNumAleatorio()) );
  }

  function geraNumAleatorio(){
    var num = (Math.floor(Math.random() * 59) + 1);
    if (historico.indexOf(num) >= 0) return geraNumAleatorio();
    historico.push(num);
    return num;    
  }

  return (
    <View style={styles.container}>
      <View style={{marginBottom: 20}}>
      {
        numeros.map( numero => 
          <View 
            key={numero.indice}>
            <Text>
              {numero}
            </Text>
          </View>
        )
      }
      </View>
      <Button
       title="Gera Números" 
       onPress={geraNumeros} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
