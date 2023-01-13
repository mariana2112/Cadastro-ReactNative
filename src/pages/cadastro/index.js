import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Styles from './styles';
import {Navegar} from './functions';
import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';

export default function AppCadastro() {
  const navigation = useNavigation();

  const AppCadastro = () => {
    navigation.navigate('Lista', {
      title: nome,
      idade: idade,
      cpf: cpf,
    });
  };
  const [nome, setNome] = useState(0);
  const [idade, setIdade] = useState(0);
  const [cpf, setCpf] = useState(0);
  return (
    <View style={Styles.container}>
      <View>
        <Text style={Styles.titulo}>Dev12BR</Text>
      </View>

      <View style={Styles.card}>
        <SafeAreaView style={Styles.area}>
          <View>
            <Text style={Styles.textcard}>Nome</Text>

            <TextInput
              value={nome}
              onChangeText={tex => {
                setNome(tex);
              }}
              keyboardType="string"
              style={Styles.input}
            />
          </View>
          <View>
            <Text style={Styles.textcard}>Idade</Text>
            <TextInput
              value={idade}
              onChangeText={tex => {
                setIdade(tex);
              }}
              keyboardType="numeric"
              style={Styles.input}
            />
          </View>
          <View>
            <Text style={Styles.textcard}>CPF</Text>
            <TextInput
              value={cpf}
              onChangeText={tex => {
                setCpf(tex);
              }}
              keyboardType="numeric"
              style={Styles.input}
            />
          </View>
        </SafeAreaView>

        <View>
          <TouchableOpacity onPress={() => AppCadastro()} style={Styles.botao}>
            <Text style={Styles.texto}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
