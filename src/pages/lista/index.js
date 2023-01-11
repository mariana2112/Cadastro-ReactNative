import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import Styles from './styles';
import React from 'react';
export default function Lista() {
  const DATA = [
    {
      id: '1',
      title: 'Name',
      cpf: '1232',
      imagem:
        'https://img.myloview.com.br/posters/user-icon-vector-people-icon-profile-vector-icon-person-illustration-business-user-icon-users-group-symbol-male-user-symbol-700-223068883.jpg',
    },
    {
      id: '2',
      title: 'Idade',
    },
    {
      id: '3',
      title: 'Cpf',
    },
    {
      id: '4',
      title: 'Name',
    },
    {
      id: '5',
      title: 'Idade',
    },
    {
      id: '6',
      title: 'Cpf',
    },
  ];

  const Item = ({title, cpf, imagem}) => (
    <View style={Styles.item}>
      <Text style={Styles.title}>{title}</Text>
      <Text style={Styles.title}>{cpf}</Text>
      <Image source={{uri: imagem}} style={Styles.img} />
    </View>
  );

  const renderItem = ({item}) => (
    <Item title={item.title} cpf={item.cpf} imagem={item.imagem} />
  );

  return (
    <View style={Styles.container}>
      <FlatList
        style={Styles.container}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
