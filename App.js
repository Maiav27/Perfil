import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput , Image , ImageBackground} from 'react-native';



export default function App() {
 
  const [digitado ,setDigitado] = useState('')
  const [nome, setNome] = useState('')

  
  return (
    <View style={styles.container}>
     <ImageBackground source={require('./assets/hinata.png')} style={{ flex : 1, alignItems : 'center' }}>
        <View style={{marginTop : 200}}>
                <Text style={{ textAlign: 'center', fontSize:30, color : 'orange'}}>{nome}</Text>
                <View style={{ borderRadius : 500, overflow : 'hidden' }}  >
                    <Image  source={require('./assets/perfil.png')} style={{width : 200, height : 200}}/>
                </View>
                
                <TextInput style={styles.input} onChangeText={setDigitado}  value={digitado} selectionColor='red  '  />
                <Button  title='Clique' onPress={() => setNome(digitado)}/> 

        </View>
     
     
     
     </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent : 'center',
   

    
  },
  input: {
   marginVertical : 8,
   borderWidth : 1,
   color :  'green'
  }
});
